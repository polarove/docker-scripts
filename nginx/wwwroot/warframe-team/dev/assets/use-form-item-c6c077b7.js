import{w as t,z as p,aE as i,r as d,l as f,o as m,bs as E,aY as I}from"./index-69a426b7.js";import{f as h,b as w,u as y}from"./use-form-common-props-152c363a.js";const A="update:modelValue",D="change",F=({from:a,replacement:u,scope:l,version:o,ref:e,type:v="API"},r)=>{t(()=>p(r),s=>{},{immediate:!0})},N=()=>{const a=i(h,void 0),u=i(w,void 0);return{form:a,formItem:u}},T=(a,{formItemContext:u,disableIdGeneration:l,disableIdManagement:o})=>{l||(l=d(!1)),o||(o=d(!1));const e=d();let v;const r=f(()=>{var s;return!!(!a.label&&u&&u.inputIds&&((s=u.inputIds)==null?void 0:s.length)<=1)});return m(()=>{v=t([E(a,"id"),l],([s,c])=>{const n=s??(c?void 0:y().value);n!==e.value&&(u!=null&&u.removeInputId&&(e.value&&u.removeInputId(e.value),!(o!=null&&o.value)&&!c&&n&&u.addInputId(n)),e.value=n)},{immediate:!0})}),I(()=>{v&&v(),u!=null&&u.removeInputId&&e.value&&u.removeInputId(e.value)}),{isLabeledByFormItem:r,inputId:e}};export{D as C,A as U,N as a,T as b,F as u};
