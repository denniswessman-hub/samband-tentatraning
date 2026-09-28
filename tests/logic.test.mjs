import test from 'node:test';
import assert from 'node:assert/strict';
import {topics,questions} from '../data.mjs';
import {scenarios,exercises} from '../practice.mjs';
import {items,itemMap,blankState,rate,queue,makeExam,sanitizeState,shuffledSteps,checkOrder,hasAnswer} from '../logic.mjs';

test('31 källkopplade delmoment med tre distinkta grundfrågor vardera',()=>{
 assert.equal(topics.length,31);assert.equal(questions.length,93);
 assert.equal(new Set(items.map(i=>i.id)).size,items.length);
 assert.equal(new Set(questions.map(i=>i.prompt)).size,93);
 assert.deepEqual(topics.map(t=>t.id),Array.from({length:31},(_,i)=>String(i+1).padStart(2,'0')));
 for(const t of topics){assert.equal(t.questions.length,3);for(const q of t.questions){assert.equal(q.topic,t.id);assert.ok(q.sources.length&&q.sources.every(s=>s.title&&s.location||s.url));assert.ok(q.answer.length>=2);}}
 assert.equal(scenarios.length,8);assert.equal(exercises.length,12);
 for(const s of scenarios){assert.equal(s.answer.length,4);assert.ok(s.sources.length);s.topics.forEach(id=>assert.ok(topics.some(t=>t.id===id)));}
 for(const e of exercises){assert.ok(e.steps.length>=5);assert.equal(new Set(e.steps).size,e.steps.length);assert.ok(e.sources.length);}
});
test('missat/delvis läggs i kön; självständigt korrekt tas bort och behärskat backas vid behov',()=>{
 const s=blankState();s.status['01']=2;rate(s,'01-1',0,10);assert.equal(s.status['01'],1);
 rate(s,'s1',1,20);rate(s,'e1',0,30);assert.deepEqual(queue(s),['01-1','s1','e1']);
 rate(s,'01-1',2,40);assert.deepEqual(queue(s),['s1','e1']);assert.equal(s.status['01'],1);
 rate(s,'s1',2,50);rate(s,'e1',2,60);assert.deepEqual(queue(s),[]);
 assert.throws(()=>rate(s,'unknown',0));assert.throws(()=>rate(s,'01-1',4));
});
test('100 provpass har alltid 12 unika frågor och fast fördelning utan godkäntgräns',()=>{
 const selections=new Set();
 for(let i=0;i<100;i++){const e=makeExam();assert.equal(e.ids.length,12);assert.equal(new Set(e.ids).size,12);const kinds=e.ids.reduce((a,id)=>{const k=itemMap.get(id).kind;a[k]=(a[k]||0)+1;return a;},{});assert.deepEqual(kinds,{...kinds,begrepp:3,öppen:4,handhavande:3,scenario:2});assert.equal(e.submitted,false);assert.equal(e.passMark,undefined);selections.add(e.ids.join());}
 assert.ok(selections.size>95);
});
test('spara/läs behåller pågående prov, svar, status och kö',()=>{
 const s=blankState();s.exam=makeExam();s.exam.index=7;s.exam.answers[s.exam.ids[0]]='Min motivering';s.exam.answers[s.exam.ids.find(id=>id.startsWith('s'))]=['gör','säger','väljer','förklarar'];s.drafts['01-1']='KOM';s.status['02']=2;rate(s,'01-1',1,100);
 assert.deepEqual(sanitizeState(JSON.parse(JSON.stringify(s))),s);
});
test('korrupt lagring och gamla id:n kan inte krascha aktivt prov',()=>{
 assert.throws(()=>sanitizeState(null));assert.throws(()=>sanitizeState({schema:9}));
 const s=sanitizeState({schema:1,status:{'01':7,'02':2},reviews:{missing:{grade:0},'01-1':{grade:1,at:'bad'}},drafts:{missing:'bad'},exam:{ids:['missing']}});
 assert.equal(s.status['01'],undefined);assert.equal(s.status['02'],2);assert.equal(s.exam,null);assert.deepEqual(queue(s),['01-1']);assert.deepEqual(s.drafts,{});
});
test('ordningsövningar startar aldrig lösta och kräver alla steg',()=>{
 for(const e of exercises){for(let i=0;i<30;i++){const a=shuffledSteps(e.steps);assert.equal(a.length,e.steps.length);assert.equal(new Set(a).size,e.steps.length);assert.equal(checkOrder(a,e.steps.length),false);}assert.equal(checkOrder(e.steps.map((_,i)=>i),e.steps.length),true);assert.equal(checkOrder([0],e.steps.length),false);}
});
test('scenarier räknas som skrivna först när alla fyra delar har text',()=>{assert.equal(hasAnswer('  '),false);assert.equal(hasAnswer('svar'),true);assert.equal(hasAnswer(['a','','c','d']),false);assert.equal(hasAnswer(['a','b','c','d']),true);});
