import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
const source=await readFile(new URL('../app.js',import.meta.url),'utf8');
const data=await readFile(new URL('../data.js',import.meta.url),'utf8');
function setup(hash='#/'){
 const elements=new Map();const storage=new Map();
 const element=()=>({innerHTML:'',textContent:'',disabled:true,classList:{toggle(){},add(){},remove(){}},querySelectorAll:()=>[]});
 const document={title:'',querySelector(s){if(!elements.has(s))elements.set(s,element());return elements.get(s)},querySelectorAll:()=>[]};
 const location={hash};const context=vm.createContext({document,location,window:{history:{pushState(a,b,h){location.hash=h}},scrollTo(){},addEventListener(){}},localStorage:{getItem:()=>null,setItem(){}},sessionStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},crypto,Intl,Date,console,confirm:()=>true,fetch:async()=>Response.json({email:'test@example.com'}),navigator:{clipboard:{writeText:async()=>{}}},setTimeout});
 vm.runInContext(data+'\n'+source,context);return {context,document,location,run:s=>vm.runInContext(s,context)};
}
test('direct links open each subject and exercise, unknown URLs show a recovery link',()=>{
 const c=setup('#/castellano/pronombres-personales');assert.equal(c.run('session.topic'),'pronouns');assert.equal(c.run('session.questions.length'),10);
 for(const [path,view]of [['/','home'],['/castellano','castellano'],['/history','history'],['/english','subject'],['/mathematics','subject'],['/valenciano','subject'],['/logout','logout'],['/unknown','not-found']]){c.location.hash='#'+path;c.run('route()');assert.equal(c.run('appView'),view)}
});
test('returning to an exercise restores question order and checked feedback with enabled next button',()=>{
 const c=setup('#/castellano/silabas');const ids=c.run('session.questions.map(q=>q.id).join()');c.run('session.selected=session.questions[0].answer;check()');
 c.location.hash='#/history';c.run('route()');c.location.hash='#/castellano/silabas';c.run('route()');assert.equal(c.run('session.questions.map(q=>q.id).join()'),ids);assert.equal(c.run('session.answers.length'),1);assert.equal(c.document.querySelector('#check').disabled,false);
});
test('results have a stable shareable URL and reopening does not duplicate an attempt',()=>{
 const c=setup('#/castellano/tildes');c.run('session.answers=session.questions.map(question=>({question,selected:question.answer,correct:true}));finish()');const url=c.location.hash;assert.match(url,/^#\/results\//);assert.equal(c.run('history.length'),1);c.run('route()');assert.equal(c.run('appView'),'results');assert.equal(c.run('history.length'),1);assert.equal(c.location.hash,url);
});
test('profile fetch displays signed-in identity and logout uses Cloudflare logout endpoint',async()=>{
 const c=setup();await c.run('showProfile()');assert.equal(c.document.querySelector('#profile-email').textContent,'test@example.com');c.run('showLogout()');assert.match(c.document.querySelector('#app').innerHTML,/href="\/cdn-cgi\/access\/logout"/);
});
