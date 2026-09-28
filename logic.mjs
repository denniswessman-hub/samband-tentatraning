import {questions,topics} from './data.mjs';
import {scenarios,exercises} from './practice.mjs';
export const items=[...questions,...scenarios,...exercises];
export const itemMap=new Map(items.map(i=>[i.id,i]));
export const STORAGE_KEY='samband-tentatraning:v1';
export const blankState=()=>({schema:1,status:{},reviews:{},drafts:{},exam:null,history:[]});
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
export function makeExam(random=Math.random){
 const chosen=[...shuffle(questions.filter(q=>q.kind==='begrepp'),random).slice(0,3),...shuffle(questions.filter(q=>q.kind==='öppen'),random).slice(0,4),...shuffle(questions.filter(q=>q.kind==='handhavande'),random).slice(0,3),...shuffle(scenarios,random).slice(0,2)];
 return {ids:shuffle(chosen,random).map(q=>q.id),answers:{},ratings:{},index:0,started:Date.now(),submitted:false};
}
const obj=v=>v&&typeof v==='object'&&!Array.isArray(v);
const cleanAnswers=(v,ids)=>Object.fromEntries(Object.entries(obj(v)?v:{}).filter(([id])=>ids.includes(id)).map(([id,a])=>[id,Array.isArray(a)?a.slice(0,4).map(s=>String(s).slice(0,6000)):typeof a==='string'?a.slice(0,6000):'']));
export function sanitizeState(raw){
 if(!obj(raw)||raw.schema!==1)throw new Error('Okänt sparformat');
 const s=blankState();
 for(const t of topics)if([0,1,2].includes(raw.status?.[t.id]))s.status[t.id]=raw.status[t.id];
 for(const item of items){const r=raw.reviews?.[item.id];if(obj(r)&&[0,1,2].includes(r.grade))s.reviews[item.id]={grade:r.grade,at:Number.isFinite(r.at)?r.at:0,attempts:Number.isFinite(r.attempts)?r.attempts:1};}
 s.drafts=cleanAnswers(raw.drafts,items.map(i=>i.id));
 const x=raw.exam;
 if(obj(x)&&Array.isArray(x.ids)&&x.ids.length===12&&new Set(x.ids).size===12&&x.ids.every(id=>itemMap.has(id)&&itemMap.get(id).kind!=='ordning')){
  s.exam={ids:x.ids,answers:cleanAnswers(x.answers,x.ids),ratings:{},index:Number.isInteger(x.index)?Math.max(0,Math.min(11,x.index)):0,started:Number.isFinite(x.started)?x.started:Date.now(),submitted:x.submitted===true};
  for(const id of x.ids)if([0,1,2].includes(x.ratings?.[id]))s.exam.ratings[id]=x.ratings[id];
 }
 s.history=Array.isArray(raw.history)?raw.history.filter(x=>obj(x)&&Number.isFinite(x.at)&&Number.isInteger(x.known)&&x.known>=0&&x.known<=12).slice(-10):[];
 return s;
}
export function hasAnswer(answer){return Array.isArray(answer)?answer.length===4&&answer.every(v=>typeof v==='string'&&v.trim().length>0):typeof answer==='string'&&answer.trim().length>0;}
