import test from 'node:test';
import assert from 'node:assert/strict';
import {paperQuestions,practicalPaper,paperTotal,trafficAnswers,trafficDialogue,blankPapers,paperProgress,sanitizePapers} from '../source-exams.mjs';
import {sourceExamView,practicalPaperView} from '../source-exams-view.mjs';
import {blankState,sanitizeState,rate,queue} from '../logic.mjs';

test('övningsunderlag: 23 unika frågor med 32 poäng, 12 praktiska uppgifter och exakt 13 dialogluckor',()=>{
 assert.deepEqual(paperQuestions.map(q=>q.number),Array.from({length:23},(_,i)=>i+1));
 assert.equal(paperTotal,32);
 assert.deepEqual(practicalPaper.map(t=>t.number),Array.from({length:12},(_,i)=>i+1));
 const blanks=trafficDialogue.flatMap(([,line])=>[...line.matchAll(/\{(\d+)\}/g)].map(m=>Number(m[1])));
 assert.deepEqual(blanks,Array.from({length:13},(_,i)=>i+1));assert.equal(trafficAnswers.length,13);
 for(const q of paperQuestions){assert.ok(q.prompt.length&&q.answer.length&&q.sources.length);if(q.options)assert.ok(q.correct.length&&q.correct.every(n=>n>=0&&n<q.options.length));}
 for(const task of practicalPaper)assert.ok(task.steps.length>=3&&task.sources.length>=2&&task.check);
 assert.ok(paperQuestions.find(q=>q.number===23).sources.some(s=>s.includes('Skanninglistor')));
});
test('poäng viktas enligt frågorna och repetition använder bara bedömda, ofullständiga svar',()=>{
 const p=blankPapers();p.scores[14]=4;p.scores[13]=3;p.scores[1]=0;
 assert.deepEqual(paperProgress(p),{marked:3,points:7,repeat:[1,14],complete:false});
 for(const q of paperQuestions)p.scores[q.number]=q.points;
 assert.deepEqual(paperProgress(p),{marked:23,points:32,repeat:[],complete:true});
});
test('gammal lagring uppgraderas utan förlust och de nya svaren återläses säkert',()=>{
 const s=blankState();rate(s,'01-1',0,100);s.drafts['01-1']='Uppfattat';
 delete s.papers;const upgraded=sanitizeState(s);assert.deepEqual(upgraded.papers,blankPapers());assert.deepEqual(queue(upgraded),['01-1']);assert.equal(upgraded.drafts['01-1'],'Uppfattat');
 upgraded.papers.answers={q1:'Min motivering',q8:'0,1,3','nationell-0':'Adam','internationell-text':'Alpha…','traffic-12':'kom'};upgraded.papers.scores={1:1,14:4};upgraded.papers.practice={1:2,12:1};
 assert.deepEqual(sanitizeState(JSON.parse(JSON.stringify(upgraded))),upgraded);
 const clean=sanitizePapers({answers:{unknown:'bad',q1:'x'.repeat(7000),q2:{bad:true}},scores:{14:6,1:-1,7:1.5,13:3},practice:{1:9,2:2,99:2}});
 assert.deepEqual(Object.keys(clean.answers),['q1']);assert.equal(clean.answers.q1.length,6000);assert.deepEqual(clean.scores,{13:3});assert.deepEqual(clean.practice,{2:2});
});
test('alla fyra delar kan renderas och användarsvar HTML-escapas',()=>{
 const state=blankState(),helpers={heading:()=>'',escape:s=>String(s??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;')};
 state.papers.answers.q1='<script>bad</script>';
 const questions=sourceExamView(state,helpers);assert.equal((questions.match(/class="card paper-question"/g)||[]).length,23);assert.ok(questions.includes('&lt;script>'));assert.ok(!questions.includes('<script>bad'));
 for(const part of ['nationell','internationell']){assert.equal((sourceExamView(state,helpers,part).match(/data-paper-answer=/g)||[]).length,29);assert.equal((sourceExamView(state,helpers,part,false,'text').match(/data-paper-answer=/g)||[]).length,1);}
 assert.equal((sourceExamView(state,helpers,'trafikuttryck').match(/data-paper-answer=/g)||[]).length,13);
 assert.equal((practicalPaperView(state,helpers).match(/<details class="paper-answer"/g)||[]).length,12);
});
