import{e as w,aa as z,a5 as f,ag as c,r as V,F as C,x as s,y as d,z as a,Z as v,q as B,v as u,C as R,b1 as q,au as T,a7 as U,a8 as D,p as h,av as M,t as y,aN as K,ah as P,b2 as $,a9 as Z}from"./index-69a426b7.js";import{a as j,E as A}from"./el-form-item-f99dedd3.js";import{E as G}from"./el-input-5783c248.js";import{E as H}from"./el-button-26725033.js";import{a as J}from"./index-569d277e.js";import"./use-form-common-props-152c363a.js";import"./castArray-1ae6a672.js";import"./error-78e43d3e.js";import"./_Uint8Array-950cea96.js";import"./use-form-item-c6c077b7.js";const g=n=>(U("data-v-3aa651dc"),n=n(),D(),n),L={class:"page-account-verify"},O={class:"animate__animated animate__pulse"},Q=g(()=>s("div",{class:"i-ep:check text-size-[3rem]"},null,-1)),W=g(()=>s("div",{class:"i-ep:close text-size-[3rem]"},null,-1)),X=g(()=>s("div",{class:"i-ant-design:info-circle-outlined text-size-[3rem]"},null,-1)),Y=w({__name:"index",setup(n){const m=z(),N=f.currentRoute.value.query.email,x=f.currentRoute.value.query.uuid,e=c({compeleted:!1,succeed:!1,failed:!1,duplicated:!1,message:""}),k=c({email:N,uuid:x});(async()=>{const t=await q(k);t.code==204?setTimeout(()=>{e.compeleted=!0,e.succeed=!0},1e3):t.code==205?setTimeout(()=>{e.compeleted=!0,T(m.getName())?(e.succeed=!0,e.message="别忘了输入用户名哦^_^"):e.duplicated=!0},1e3):t.code==206&&setTimeout(()=>{e.compeleted=!0,e.failed=!0},1e3),e.message=t.message})();const p=V(),i=c({uuid:"",name:""}),E=c({name:[{required:!0,message:"请输入用户名",trigger:["blur","change"]},{min:1,max:30}]}),r=V(!1),b=async t=>{r.value=!0,t&&t.validate(async o=>{if(o){i.uuid=x;const l=await $(i);l.success?(f.push({name:"origin"}),m.setUser(l.data)):J.error(l.message),r.value=!1}else return r.value=!1,!1})};return(t,o)=>{const l=H,F=G,S=A,I=j;return h(),C("div",L,[s("div",{class:d(["i-ep:loading text-size-[3rem] animation-rotate",{invisible:a(e).compeleted}])},null,2),s("div",{class:d(["w-80% display-none",{visible:a(e).succeed}])},[s("div",O,[Q,s("div",null,v(a(e).message)+"向大家介绍一下自己吧！ ",1)]),a(M)(a(m).getName())?(h(),B(I,{key:0,class:"mt-20px",ref_key:"VerifyFormRef",ref:p,model:a(i),rules:a(E)},{default:u(()=>[y(S,{prop:"name",label:"我是："},{default:u(()=>[y(F,{modelValue:a(i).name,"onUpdate:modelValue":o[1]||(o[1]=_=>a(i).name=_),class:"inline-block",placeholder:"请填写游戏内昵称",onKeyup:o[2]||(o[2]=K(_=>b(a(p)),["enter"]))},{append:u(()=>[y(l,{loading:a(r),onClick:o[0]||(o[0]=_=>b(a(p)))},{default:u(()=>[P("保存")]),_:1},8,["loading"])]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])):R("",!0)],2),s("div",{class:d(["animate__animated animate__bounce display-none",{visible:a(e).failed}])},[W,s("div",null,v(a(e).message),1)],2),s("div",{class:d(["animate__animated animate__bounceIn display-none",{visible:a(e).duplicated}])},[X,s("div",null,v(a(e).message),1)],2)])}}});const ue=Z(Y,[["__scopeId","data-v-3aa651dc"]]);export{ue as default};
