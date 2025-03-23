import{c as h,d as y}from"./chunk-XZVNKUP3.js";h();var b=(t,e=document)=>t[0]==="#"?e.getElementById(t.substring(1)):e.querySelector(t);b.all=(t,e=document)=>e.querySelectorAll(t);b.each=(t,e,n)=>{b.all(t,n).forEach(e)};h();var W=function(t,e){let n=t.parentNode;n.lastChild===t?n.appendChild(e):n.insertBefore(e,t.nextSibling)},lt=function(t,e,n,l){let o=document.createElement(e);switch(Object.assign(o,n),l){case"after":W(t,o);break;case"replace":t.innerHTML="",t.appendChild(o);break;default:t.appendChild(o)}return o},at=function(t,e){let n=document.createElement("div");Object.assign(n,e),t.parentNode.insertBefore(n,t),t.parentNode.removeChild(t),n.appendChild(t)},ct=function(t){return t.getBoundingClientRect().height},ut=function(t,e){t.style.width=typeof e=="number"?e+"rem":e},dt=function(t){return t.getBoundingClientRect().width},j=function(t){return t.getBoundingClientRect().top},pt=function(t){return t.getBoundingClientRect().left},ft=function(t){return t.style.display},T=function(t,e){return t.style.display=e,t};function C(){Object.assign(HTMLElement.prototype,{find(t){return b.all(t,this)},_class(t,e,n){(e.indexOf(" ")?e.split(" "):[e]).forEach(o=>{t==="toggle"?this.classList.toggle(o,n):this.classList[t](o)})},addClass(t){return this._class("add",t),this},removeClass(t){return this._class("remove",t),this},toggleClass(t,e){return this._class("toggle",t,e),this},hasClass(t){return this.classList.contains(t)}})}h();var O=y;C();var yt=O.statics.indexOf("//")>0?O.statics:O.root,xt={x:0,y:0},q=0,D,F,bt=document.getElementsByTagName("body")[0],Tt=document.documentElement,Et=document.getElementById("container"),vt=document.getElementById("loading"),$=document.getElementById("nav"),Ht=document.getElementById("header"),Lt=$.querySelector(".toggle"),Mt=document.getElementById("quick"),wt=document.getElementById("sidebar"),Ct=document.getElementById("brand"),R=document.getElementById("tool"),_,Y,Q,G,K=document.getElementById("search"),B,U,V,X=window.innerHeight,J=window.innerWidth,Z=0,z=window.location.href,tt;function Ot(t){B=t}function Bt(t){U=t}function It(t){V=t}function kt(t){X=t}function St(t){J=t}function Nt(t){q=t}function jt(t){F=t}function At(t){Z=t}function Pt(t){z=t}function Wt(t){tt=t}function qt(t){D=t}function Dt(t){_=t}function Ft(t){Y=t}function $t(t){Q=t}function Rt(t){G=t}function _t(t){R=t}function Yt(t){K=t}h();h();var k=class{constructor(){this.queue=[]}add(e){return this.queue.push(new M(e)),this}play(){this.queue.forEach(e=>e.play())}},A={targets:null,duration:1/0,easing:"linear",delay:0,begin:null,update:null,complete:null},et=()=>{let t={linear:()=>n=>n},e={Sine:()=>n=>1-Math.cos(n*Math.PI/2),Expo:()=>n=>n?Math.pow(2,10*n-10):0,Circ:()=>n=>1-Math.sqrt(1-n*n),Back:()=>n=>n*n*(3*n-2),Bounce:()=>n=>{let l,o=4;for(;n<((l=Math.pow(2,--o))-1)/11;);return 1/Math.pow(4,3-o)-7.5625*Math.pow((l*3-2)/22-n,2)}};return["Quad","Cubic","Quart","Quint"].forEach((n,l)=>{e[n]=()=>o=>Math.pow(o,l+2)}),Object.keys(e).forEach(n=>{let l=e[n];t["easeIn"+n]=l,t["easeOut"+n]=()=>o=>1-l()(1-o),t["easeInOut"+n]=()=>o=>o<.5?l()(o*2)/2:1-l()(o*-2+2)/2,t["easeOutIn"+n]=()=>o=>o<.5?(1-l()(1-o*2))/2:(l()(o*2-1)+1)/2}),t},I=et(),nt=["translateX","translateY","translateZ"],P=(t,e)=>t instanceof HTMLElement?"transform"in t.style&&nt.includes(e)?"transform":e in t.style?"style":"attribute":"attribute",ot=t=>{let e=Date.now()+t.delay,n=e+t.duration,l=!!t.targets,o=[],m=()=>{if(l){Array.isArray(t.targets)||(t.targets=[t.targets]);for(let i of t.targets){let a={};for(let r in t.dest){let s=t.dest[r],d=P(i,r);if(Array.isArray(s))if(s.length===2&&typeof s[0]!="object")d==="transform"?i.style.transform=`${r}(${typeof s[0]=="string"?s[0]:s[0]+"px"})`:d==="style"?i.style[r]=s[0]:i[r]=s[0],a[r]=s[0],t.dest[r]=s[1];else{let p=0;for(let c of s)c.startTimeStamp=p,p+=c.duration;a[r]=i[r]}else d==="transform"?a[r]=i.style.transform.match(new RegExp(`${r}\\((\\w+)\\)`))[1]:d==="style"?a[r]=i.style[r]:a[r]=i[r]}o.push(a)}}},g=(i,a,r,s,d,p=!1)=>{let c;if(typeof s=="string")if(c=s.endsWith("%")?"%":s.endsWith("px")?"px":null,c)s=parseFloat(s);else throw new TypeError("string value must ends with '%' or 'px'");let u=p?s:(s-a)*r+a;c&&(u+=c);let f=P(i,d);f==="transform"?i.style.transform=`${d}(${u}${c?"":"px"})`:f==="style"?i.style[d]=u:i[d]=u},E=(i,a,r=!1)=>{t.targets.forEach((s,d)=>{Object.keys(t.dest).forEach(p=>{let c=parseFloat(o[d][p]),u=t.dest[p];if(typeof u=="object")if(Array.isArray(u)){let f=0;for(;f<u.length&&a-e>=u[f].startTimeStamp;)f++;let{value:x,duration:H,easing:L=t.easing,startTimeStamp:S}=u[f-1];c=f<=1?c:u[f-2].value;let N=I[L]()((a-e-S)/H);a<=e+H+S?g(s,c,N,x,p):r&&g(s,c,N,x,p,r)}else{let{value:f,duration:x,easing:H=t.easing}=u,L=I[H]()((a-e)/x);a<=e+x?g(s,c,L,f,p):r&&g(s,c,L,f,p,r)}else typeof u=="function"&&(u=u(s,d)),g(s,c,i,u,p,r)})})},v=()=>{let i=Date.now();if(i>n)E(1,i,!0),typeof t.complete=="function"&&t.complete(t.targets),t.isPlay=!1;else{if(i>=e){let a=I[t.easing]()((i-e)/t.duration);l&&E(a,i),typeof t.update=="function"&&t.update(t.targets)}requestAnimationFrame(v)}};m(),typeof t.begin=="function"&&t.begin(t.targets),v()},M=class{constructor(e=A){e={...A,...e};let{targets:n,duration:l,easing:o,delay:m,begin:g,update:E,complete:v,...i}=e;this.targets=n,this.duration=l,this.easing=o,this.delay=m,this.begin=g,this.update=E,this.complete=v,this.dest=i||{},this.tl=null,this.isPlay=!1}timeline(){return this.tl||(this.tl=new k),this.tl}play(){this.isPlay||(this.isPlay=!0,ot(this))}},w=t=>new M(t);w.random=(t,e)=>Math.floor(Math.random()*(e-t+1))+t;var Zt=(t,e,n,l)=>{let o,m="none";switch(e){case 0:o={opacity:[1,0]};break;case 1:o={opacity:[0,1]},m="block";break;case"bounceUpIn":o={begin(g){T(t,"block")},translateY:[{value:-60,duration:200},{value:10,duration:200},{value:-5,duration:200},{value:0,duration:200}],opacity:[0,1]},m="block";break;case"shrinkIn":o={begin(g){T(t,"block")},scale:[{value:1.1,duration:300},{value:1,duration:200}],opacity:1},m="block";break;case"slideRightIn":o={begin(g){T(t,"block")},translateX:["100%","0%"],opacity:[0,1]},m="block";break;case"slideRightOut":o={translateX:["0%","100%"],opacity:[1,0]};break;default:o=e,m=e.display;break}w(Object.assign({targets:t,duration:200,easing:"linear",begin(){l&&l()},complete(){T(t,m),n&&n()}},o)).play()},zt=(t,e,n)=>{w({targets:typeof e=="number"&&typeof t!="number"?t.parentNode:document.scrollingElement,duration:500,easing:"easeInOutQuad",scrollTop:e||(typeof t=="number"?t:t?j(t)+document.documentElement.scrollTop-B:0),complete(){n&&n()}}).play()};export{b as a,W as b,lt as c,at as d,ct as e,ut as f,dt as g,pt as h,ft as i,T as j,C as k,O as l,yt as m,xt as n,q as o,D as p,F as q,bt as r,Tt as s,Et as t,vt as u,$ as v,Ht as w,Lt as x,Mt as y,wt as z,Ct as A,R as B,_ as C,Y as D,Q as E,G as F,K as G,U as H,V as I,J,Z as K,z as L,tt as M,Ot as N,Bt as O,It as P,kt as Q,St as R,Nt as S,jt as T,At as U,Pt as V,Wt as W,qt as X,Dt as Y,Ft as Z,$t as _,Rt as $,_t as aa,Yt as ba,Zt as ca,zt as da};
