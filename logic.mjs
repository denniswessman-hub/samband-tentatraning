import {questions,topics} from './data.mjs';
import {scenarios,exercises} from './practice.mjs';
import {focusedQuestions,partById,practicalTasks} from './examination.mjs';
export const items=[...questions,...scenarios,...exercises,...focusedQuestions];
export const itemMap=new Map(items.map(i=>[i.id,i]));
export const STORAGE_KEY='samband-tentatraning:v1';
export const blankState=()=>({schema:1,status:{},reviews:{},drafts:{},exam:null,history:[],practical:{}});
export function shuffle(arr,random=Math.random){const out=[...arr];for(let i=out.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;}
export function shuffledSteps(steps,random=Math.random){let a=shuffle(steps.map((_,i)=>i),random);if(a.every((n,i)=>n===i))a=[...a.slice(1),a[0]];return a;}
export function checkOrder(order,length){return order.length===length&&order.every((n,i)=>n===i);}
export function queue(state){return Object.keys(state.reviews).filter(id=>itemMap.has(id)&&state.reviews[id].grade<2).sort((a,b)=>state.reviews[a].at-state.reviews[b].at);}
export function rate(state,id,grade,now=Date.now()){
 if(!itemMap.has(id)||![0,1,2].includes(grade))throw new Error('Ogiltig bedömning');
 const item=itemMap.get(id);state.reviews[id]={grade,at:now,attempts:(state.reviews[id]?.attempts||0)+1};
 for(const tid of item.topics||[item.topic]){
  if(!state.status[tid]||(grade<2&&state.status[tid]===2))state.status[tid]=1;
 }
 return state;
}
export function makeExam(random=Math.random,part='fragor'){
 if(!partById(part))throw new Error('Okänd provdel');
 const chosen=[...shuffle(questions.filter(q=>q.kind==='begrepp'),random).slice(0,3),...shuffle(questions.filter(q=>q.kind==='öppen'),random).slice(0,4),...shuffle(questions.filter(q=>q.kind==='handhavande'),random).slice(0,3),...shuffle(scenarios,random).slice(0,2)];
 return {part,ids:shuffle(part==='fragor'?chosen:focusedQuestions.filter(q=>q.part===part),random).map(q=>q.id),answers:{},ratings:{},index:0,started:Date.now(),submitted:false};
}
export function meetsThreshold(correct,total,threshold){return Number.isInteger(correct)&&Number.isInteger(total)&&total>0&&correct>=0&&correct<=total&&correct*100>=total*threshold;}
export function assessment(exam){const total=exam.ids.length,known=exam.ids.filter(id=>exam.ratings[id]===2).length,rated=exam.ids.filter(id=>[0,1,2].includes(exam.ratings[id])).length,threshold=partById(exam.part||'fragor').threshold;return {total,known,rated,threshold,minimum:Math.ceil(total*threshold/100),percentage:Math.round(known/total*1000)/10,met:rated===total?meetsThreshold(known,total,threshold):null};}
const obj=v=>v&&typeof v==='object'&&!Array.isArray(v);
const cleanAnswers=(v,ids)=>Object.fromEntries(Object.entries(obj(v)?v:{}).filter(([id])=>ids.includes(id)).map(([id,a])=>[id,Array.isArray(a)?a.slice(0,4).map(s=>String(s).slice(0,6000)):typeof a==='string'?a.slice(0,6000):'']));
export function sanitizeState(raw){
 if(!obj(raw)||raw.schema!==1)throw new Error('Okänt sparformat');
 const s=blankState();
 for(const t of topics)if([0,1,2].includes(raw.status?.[t.id]))s.status[t.id]=raw.status[t.id];
 for(const item of items){const r=raw.reviews?.[item.id];if(obj(r)&&[0,1,2].includes(r.grade))s.reviews[item.id]={grade:r.grade,at:Number.isFinite(r.at)?r.at:0,attempts:Number.isFinite(r.attempts)?r.attempts:1};}
 s.drafts=cleanAnswers(raw.drafts,items.map(i=>i.id));
 for(const task of practicalTasks)if([0,1,2].includes(raw.practical?.[task.id]))s.practical[task.id]=raw.practical[task.id];
 const x=raw.exam;
 const part=partById(x?.part??'fragor');
 const allowed=part?.id==='fragor'?[...questions,...scenarios]:focusedQuestions.filter(q=>q.part===part?.id);
 if(obj(x)&&part&&Array.isArray(x.ids)&&x.ids.length===part.count&&new Set(x.ids).size===part.count&&x.ids.every(id=>allowed.some(q=>q.id===id))){
  s.exam={part:part.id,ids:x.ids,answers:cleanAnswers(x.answers,x.ids),ratings:{},index:Number.isInteger(x.index)?Math.max(0,Math.min(x.ids.length-1,x.index)):0,started:Number.isFinite(x.started)?x.started:Date.now(),submitted:x.submitted===true};
  for(const id of x.ids)if([0,1,2].includes(x.ratings?.[id]))s.exam.ratings[id]=x.ratings[id];
 }
 s.history=Array.isArray(raw.history)?raw.history.filter(x=>obj(x)&&Number.isFinite(x.at)&&partById(x.part??'fragor')&&Number.isInteger(x.known)&&x.known>=0&&x.known<=partById(x.part??'fragor').count).slice(-40).map(x=>({at:x.at,part:x.part??'fragor',known:x.known})):[];
 return s;
}
export function hasAnswer(answer){return Array.isArray(answer)?answer.length===4&&answer.every(v=>typeof v==='string'&&v.trim().length>0):typeof answer==='string'&&answer.trim().length>0;}
