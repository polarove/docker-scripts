import{o as W,ap as B,aJ as U,b0 as g}from"./index-69a426b7.js";const y=(t,e,p)=>{let c={offsetX:0,offsetY:0};const a=u=>{const L=u.clientX,M=u.clientY,{offsetX:n,offsetY:s}=c,o=t.value.getBoundingClientRect(),i=o.left,l=o.top,w=o.width,X=o.height,Y=document.documentElement.clientWidth,x=document.documentElement.clientHeight,b=-i+n,D=-l+s,H=Y-i-w+n,T=x-l-X+s,d=f=>{const r=Math.min(Math.max(n+f.clientX-L,b),H),h=Math.min(Math.max(s+f.clientY-M,D),T);c={offsetX:r,offsetY:h},t.value.style.transform=`translate(${g(r)}, ${g(h)})`},v=()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",v)};document.addEventListener("mousemove",d),document.addEventListener("mouseup",v)},E=()=>{e.value&&t.value&&e.value.addEventListener("mousedown",a)},m=()=>{e.value&&t.value&&e.value.removeEventListener("mousedown",a)};W(()=>{B(()=>{p.value?E():m()})}),U(()=>{m()})};export{y as u};
