import{i as N,b as A,d as h,e as x,g as B,l as F,aD as D,c as E,p as v,F as S,y as f,z as l,R as w,ah as O,Z as g,C as b,x as y,A as j,_ as V,X as _,r as H,w as P,aJ as R,q as z,aI as q,O as I,v as L}from"./index-69a426b7.js";import{C as M}from"./use-form-item-c6c077b7.js";const $=t=>N?window.requestAnimationFrame(t):setTimeout(t,16),U=t=>N?window.cancelAnimationFrame(t):clearTimeout(t),G=A({decimalSeparator:{type:String,default:"."},groupSeparator:{type:String,default:","},precision:{type:Number,default:0},formatter:Function,value:{type:h([Number,Object]),default:0},prefix:String,suffix:String,title:String,valueStyle:{type:h([String,Object,Array])}}),J=x({name:"ElStatistic"}),X=x({...J,props:G,setup(t,{expose:m}){const u=t,a=B("statistic"),r=F(()=>{const{value:e,formatter:c,precision:n,decimalSeparator:i,groupSeparator:p}=u;if(D(c))return c(e);if(!E(e))return e;let[s,o=""]=String(e).split(".");return o=o.padEnd(n,"0").slice(0,n>0?n:0),s=s.replace(/\B(?=(\d{3})+(?!\d))/g,p),[s,o].join(o?i:"")});return m({displayValue:r}),(e,c)=>(v(),S("div",{class:f(l(a).b())},[e.$slots.title||e.title?(v(),S("div",{key:0,class:f(l(a).e("head"))},[w(e.$slots,"title",{},()=>[O(g(e.title),1)])],2)):b("v-if",!0),y("div",{class:f(l(a).e("content"))},[e.$slots.prefix||e.prefix?(v(),S("div",{key:0,class:f(l(a).e("prefix"))},[w(e.$slots,"prefix",{},()=>[y("span",null,g(e.prefix),1)])],2)):b("v-if",!0),y("span",{class:f(l(a).e("number")),style:j(e.valueStyle)},g(l(r)),7),e.$slots.suffix||e.suffix?(v(),S("div",{key:1,class:f(l(a).e("suffix"))},[w(e.$slots,"suffix",{},()=>[y("span",null,g(e.suffix),1)])],2)):b("v-if",!0)],2)],2))}});var Y=V(X,[["__file","/home/runner/work/element-plus/element-plus/packages/components/statistic/src/statistic.vue"]]);const Z=_(Y),K=A({format:{type:String,default:"HH:mm:ss"},prefix:String,suffix:String,title:String,value:{type:h([Number,Object]),default:0},valueStyle:{type:h([String,Object,Array])}}),Q={finish:()=>!0,[M]:t=>E(t)},W=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]],C=t=>E(t)?new Date(t).getTime():t.valueOf(),k=(t,m)=>{let u=t;const a=/\[([^\]]*)]/g;return W.reduce((e,[c,n])=>{const i=new RegExp(`${c}+(?![^\\[\\]]*\\])`,"g");if(i.test(e)){const p=Math.floor(u/n);return u-=p*n,e.replace(i,s=>String(p).padStart(s.length,"0"))}return e},m).replace(a,"$1")},ee=x({name:"ElCountdown"}),te=x({...ee,props:K,emits:Q,setup(t,{expose:m,emit:u}){const a=t;let r;const e=H(C(a.value)-Date.now()),c=F(()=>k(e.value,a.format)),n=s=>k(s,a.format),i=()=>{r&&(U(r),r=void 0)},p=()=>{const s=C(a.value),o=()=>{let d=s-Date.now();u("change",d),d<=0?(d=0,i(),u("finish")):r=$(o),e.value=d};r=$(o)};return P(()=>[a.value,a.format],()=>{i(),p()},{immediate:!0}),R(()=>{i()}),m({displayValue:c}),(s,o)=>(v(),z(l(Z),{value:e.value,title:s.title,prefix:s.prefix,suffix:s.suffix,"value-style":s.valueStyle,formatter:n},q({_:2},[I(s.$slots,(d,T)=>({name:T,fn:L(()=>[w(s.$slots,T)])}))]),1032,["value","title","prefix","suffix","value-style"]))}});var se=V(te,[["__file","/home/runner/work/element-plus/element-plus/packages/components/countdown/src/countdown.vue"]]);const ne=_(se);export{ne as E};
