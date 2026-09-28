import test from 'node:test';
import assert from 'node:assert/strict';
import {topics,questions} from '../data.mjs';
import {scenarios,exercises} from '../practice.mjs';
import {items,itemMap,blankState,rate,queue,makeExam,sanitizeState,shuffledSteps,checkOrder,hasAnswer,assessment,meetsThreshold} from '../logic.mjs';
import {examParts,focusedQuestions,practicalTasks} from '../examination.mjs';

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
test('100 pass i frågedelen har 12 unika uppgifter och avsedd bredd',()=>{
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
test('scenarier räknas som skrivna först när alla fyra delar har text',()=>{assert.equal(hasAnswer('  '),false);assert.equal(hasAnswer('svar'),true);assert.equal(hasAnswer([]),false);assert.equal(hasAnswer(['a']),false);assert.equal(hasAnswer(['a','','c','d']),false);assert.equal(hasAnswer(['a','b','c','d']),true);});

test('de fyra skriftliga delarna har separata urval, källor och gränser',()=>{
 assert.deepEqual(examParts.map(p=>p.threshold),[80,100,100,100]);
 assert.equal(focusedQuestions.length,67);
 for(const part of examParts){const x=makeExam(Math.random,part.id);assert.equal(x.part,part.id);assert.equal(x.ids.length,part.count);assert.equal(new Set(x.ids).size,part.count);if(part.id!=='fragor')for(const id of x.ids)assert.equal(itemMap.get(id).part,part.id);assert.equal(assessment(x).met,null);assert.equal(assessment(x).threshold,part.threshold);}
 for(const q of focusedQuestions){assert.ok(q.sources.every(s=>s.title&&s.location));assert.ok(q.answer.length);assert.ok(topics.some(t=>t.id===q.topic));}
 assert.equal(practicalTasks.length,7);assert.equal(new Set(practicalTasks.map(t=>t.id)).size,7);for(const t of practicalTasks){assert.ok(t.checks.length);assert.ok(t.sources.length);if(t.exercise)assert.ok(exercises.some(e=>e.id===t.exercise));}
 assert.throws(()=>makeExam(Math.random,'unknown'));
});

test('80 procent och 100 procent avgörs utan avrundning eller delpoäng',()=>{
 assert.equal(meetsThreshold(8,10,80),true);assert.equal(meetsThreshold(7,10,80),false);assert.equal(meetsThreshold(799,1000,80),false);
 assert.equal(meetsThreshold(9,12,80),false);assert.equal(meetsThreshold(10,12,80),true);assert.equal(meetsThreshold(28,29,100),false);assert.equal(meetsThreshold(29,29,100),true);assert.equal(meetsThreshold(0,0,80),false);
 const q=makeExam();q.ids.forEach((id,i)=>q.ratings[id]=i<9?2:1);assert.equal(assessment(q).met,false);q.ratings[q.ids[9]]=2;assert.equal(assessment(q).met,true);
 const b=makeExam(Math.random,'nationell');b.ids.forEach(id=>b.ratings[id]=2);assert.equal(assessment(b).met,true);b.ratings[b.ids[0]]=1;assert.equal(assessment(b).met,false);delete b.ratings[b.ids[0]];assert.equal(assessment(b).met,null);
 assert.equal(assessment(q).met,true); // Ett annat delresultat påverkas inte.
});

test('uppgradering bevarar äldre svar, pågående tolvpassets läge och historik',()=>{
 const old={schema:1,status:{'01':2},reviews:{'01-1':{grade:0,at:1,attempts:2}},drafts:{'01-1':'Mitt svar'},exam:makeExam(),history:[{at:10,known:9}]};delete old.exam.part;old.exam.index=5;old.exam.answers[old.exam.ids[0]]='Sparat provsvar';
 const restored=sanitizeState(old);assert.deepEqual(restored.status,old.status);assert.deepEqual(restored.drafts,old.drafts);assert.deepEqual(restored.reviews,old.reviews);assert.deepEqual(restored.exam.answers,old.exam.answers);assert.equal(restored.exam.index,5);assert.equal(restored.exam.part,'fragor');assert.deepEqual(restored.history,[{at:10,part:'fragor',known:9}]);assert.deepEqual(restored.practical,{});
});

test('nya delpass, repetitionskort och praktisk träning överlever omladdning',()=>{
 for(const part of examParts){const s=blankState();s.exam=makeExam(Math.random,part.id);s.exam.index=s.exam.ids.length-1;s.exam.answers[s.exam.ids[0]]='<b>Eget svar</b>';s.exam.ratings[s.exam.ids[0]]=1;s.practical.p1=2;s.history=[{at:1,part:part.id,known:part.count}];rate(s,'bn-01',0,1);rate(s,'tu-kom',1,2);assert.deepEqual(sanitizeState(JSON.parse(JSON.stringify(s))),s);assert.deepEqual(queue(s),['bn-01','tu-kom']);}
 const s=blankState();s.exam=makeExam(Math.random,'nationell');s.exam.ids[0]='01-1';assert.equal(sanitizeState(s).exam,null);s.exam=makeExam();s.exam.part='unknown';assert.equal(sanitizeState(s).exam,null);
});
