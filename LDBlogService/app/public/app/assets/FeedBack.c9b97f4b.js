import{i as C}from"./index.42bb92cb.js";import{d as b,X as h,u as x,b as t,e as A,f as u,w as l,p as D,j as y,H as g,A as _,c as w,h as a,g as d,Y as V}from"./vendor.82d14f1c.js";import{_ as k}from"./index.0770a693.js";const j="_themeColor_1w8mq_21";var q={"d-flex":"_d-flex_1w8mq_1","justify-center":"_justify-center_1w8mq_5","align-center":"_align-center_1w8mq_9",themeColor:j};const z=o=>(D("data-v-5431e95e"),o=o(),y(),o),I={class:"feedback"},S=z(()=>d("h2",null,"\u53CD\u9988",-1)),N={style:{margin:"16px"}},T=V(" \u63D0\u4EA4 "),M=b({setup(o){const s=h({emailAddress:"",info:""}),m=x(),p=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,F=r=>{g.confirm({title:"",message:"\u662F\u5426\u63D0\u4EA4\u53CD\u9988\u4FE1\u606F\uFF1F"}).then(async()=>{const e=await C(r);e&&e.success?(_("\u53CD\u9988\u6210\u529F\uFF0C\u8BF7\u6CE8\u610F\u67E5\u770B\u5783\u573E\u90AE\u4EF6\uFF01"),setTimeout(()=>{m.push({path:"/"})},900)):_("\u53CD\u9988\u5931\u8D25")}).catch(()=>{})};return(r,e)=>{const f=t("van-notice-bar"),c=t("van-field"),v=t("van-cell-group"),B=t("van-button"),E=t("van-form");return w(),A("div",I,[u(f,{"left-icon":"volume-o",text:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740\uFF0C\u770B\u5230\u540E\u4F1A\u5728\u7B2C\u4E00\u65F6\u95F4\u5185\u56DE\u590D"}),S,u(E,{onSubmit:F},{default:l(()=>[u(v,{inset:""},{default:l(()=>[u(c,{modelValue:a(s).emailAddress,"onUpdate:modelValue":e[0]||(e[0]=n=>a(s).emailAddress=n),name:"emailAddress",label:"\u90AE\u7BB1\u5730\u5740",placeholder:"\u90AE\u7BB1\u5730\u5740",rules:[{required:!0,pattern:p,message:"\u8BF7\u586B\u5199\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740"}]},null,8,["modelValue","rules"]),u(c,{modelValue:a(s).info,"onUpdate:modelValue":e[1]||(e[1]=n=>a(s).info=n),type:"textarea",rows:"5",name:"info",label:"\u53CD\u9988\u4FE1\u606F",placeholder:"\u53CD\u9988\u4FE1\u606F",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u53CD\u9988\u4FE1\u606F"}]},null,8,["modelValue"])]),_:1}),d("div",N,[u(B,{color:"#ff4c21",round:"",block:"",type:"primary","native-type":"submit"},{default:l(()=>[T]),_:1})])]),_:1})])}}}),i={};i.$style=q;var P=k(M,[["__cssModules",i],["__scopeId","data-v-5431e95e"]]);export{P as default};