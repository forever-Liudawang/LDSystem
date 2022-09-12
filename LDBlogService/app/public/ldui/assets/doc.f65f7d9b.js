import{d as _,r as d,o as l,c as r,b as u,w as f,e as c,C,M as n,A as h,a as t}from"./index.45851e92.js";import{p as m}from"./preview.fe56d2ff.js";const E=c("\u63D0\u793A"),F=_({setup(i){const e=()=>{C({message:"\u9ED8\u8BA4\u6D88\u606F\u63D0\u793A",onOk:()=>{n({text:"\u786E\u5B9A",type:"success"})},onCancel:()=>{n({text:"\u53D6\u6D88",type:"info"})}})};return(o,p)=>{const a=d("l-button");return l(),r("div",null,[u(a,{onClick:e,type:"primary"},{default:f(()=>[E]),_:1})])}}}),g=c("\u5220\u9664"),D=_({setup(i){const e=h();console.log("app",e);const o=()=>{e==null||e.appContext.config.globalProperties.$LConfirm({message:"\u662F\u5426\u5220\u9664?",onOk:()=>{n({text:"\u5220\u9664\u6210\u529F",type:"success"})},onCancel:()=>{n({text:"\u53D6\u6D88\u5220\u9664",type:"info"})}})};return(p,a)=>{const s=d("l-button");return l(),r("div",null,[u(s,{onClick:o,type:"error"},{default:f(()=>[g]),_:1})])}}}),y=c("\u81EA\u5B9A\u4E49\u914D\u7F6E"),B=_({setup(i){const e=h();console.log("app",e);const o=()=>{e==null||e.appContext.config.globalProperties.$LConfirm({message:"\u60A8\u7684\u751F\u65E5\u662F\u4E0D\u662F2\u670822\u65E5",title:"\u63D0\u793A\u4FE1\u606F",onOk:()=>{n({text:"\u786E\u5B9A",type:"success"})},onCancel:()=>{n({text:"\u53D6\u6D88",type:"info"})}})};return(p,a)=>{const s=d("l-button");return l(),r("div",null,[u(s,{onClick:o,type:"primary"},{default:f(()=>[y]),_:1})])}}}),x=c("\u4EE3\u7801\u7247\u6BB5"),A=_({setup(i){const e=h();console.log("app",e);const o=()=>{e==null||e.appContext.config.globalProperties.$LConfirm({message:'<div style="color:red;font-weight:600">\u4F7F\u7528\u4EE3\u7801\u7247\u6BB5</div>',title:"\u63D0\u793A\u4FE1\u606F",dangerouslyUseHTMLString:!0,onOk:()=>{n({text:"\u5220\u9664\u6210\u529F",type:"success"})},onCancel:()=>{n({text:"\u53D6\u6D88",type:"info"})}})};return(p,a)=>{const s=d("l-button");return l(),r("div",null,[u(s,{onClick:o,type:"primary"},{default:f(()=>[x]),_:1})])}}}),b={class:"attributeDesc"},k=_({setup(i){const e=[{prop:"parameter",label:"\u53C2\u6570",width:"22%"},{prop:"type",label:"\u7C7B\u578B",width:"10%"},{prop:"desc",label:"\u8BF4\u660E",width:"27%"},{prop:"optional",label:"\u53EF\u9009\u503C"},{prop:"default",label:"\u9ED8\u8BA4\u503C",width:"10%"}],o=[{parameter:"title",type:"string",desc:"\u5F39\u7A97\u6807\u9898\u6587\u672C",optional:"\u2014",default:"\u63D0\u793A"},{parameter:"message",type:"string",desc:"\u5F39\u7A97\u5185\u5BB9\u6587\u672C\u4FE1\u606F",optional:"\u2014\u2014",default:"\u2014\u2014"},{parameter:"dangerouslyUseHTMLString",type:"boolean",desc:"\u662F\u5426\u5C06 message \u5C5E\u6027\u4F5C\u4E3A HTML \u7247\u6BB5\u5904\u7406",optional:"true/false",default:"false"},{parameter:"confirmText",type:"String",desc:"\u786E\u8BA4\u6309\u94AE\u6587\u672C\u4FE1\u606F",optional:"\u2014\u2014",default:"\u786E\u8BA4"},{parameter:"cancelText",type:"String",desc:"\u53D6\u6D88\u6309\u94AE\u6587\u672C\u4FE1\u606F",optional:"\u2014\u2014",default:"\u53D6\u6D88"},{parameter:"closeShow",type:"Boolean",desc:"\u662F\u5426\u663E\u793A\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE",optional:"true / false",default:"true"},{parameter:"onOk",type:"Function",desc:"\u786E\u8BA4\u6309\u94AE\u56DE\u8C03\u51FD\u6570",optional:"\u2014\u2014",default:"\u2014\u2014"},{parameter:"onCancel",type:"Function",desc:"\u53D6\u6D88\u6309\u94AE\u56DE\u8C03\u51FD\u6570",optional:"\u2014\u2014",default:"\u2014\u2014"},{parameter:"icon",type:"String",desc:"\u56FE\u6807",optional:"\u2014\u2014",default:"icon-info"}];return(p,a)=>{const s=d("l-table");return l(),r("div",b,[u(s,{columns:e,data:o})])}}}),v={class:"markdown-body"},$=t("h1",null,"Confirm \u6D88\u606F\u786E\u8BA4",-1),N=t("h2",{id:"\u57FA\u672C\u4F7F\u7528"},"\u57FA\u672C\u4F7F\u7528",-1),w=t("p",null,"Confirm \u6D88\u606F\u786E\u8BA4\u57FA\u672C\u4F7F\u7528\u793A\u4F8B\u3002",-1),L={class:"demoBox"},S=t("h2",{id:"\u7EC4\u4EF6\u83B7\u53D6"},"\u7EC4\u4EF6\u83B7\u53D6",-1),T=t("p",null,"\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u65B9\u5F0F\u6765\u8C03\u7528\u3002",-1),M={class:"demoBox"},O=t("h2",{id:"\u81EA\u5B9A\u4E49\u914D\u7F6E"},"\u81EA\u5B9A\u4E49\u914D\u7F6E",-1),H=t("p",null,"\u901A\u8FC7\u81EA\u5B9A\u4E49\u914D\u7F6E\u9879\u8FBE\u5230\u6EE1\u8DB3\u7CFB\u7EDF\u7684\u9700\u6C42",-1),P={class:"demoBox"},U=t("h2",{id:"\u4F7F\u7528\u4EE3\u7801\u7247\u6BB5"},"\u4F7F\u7528\u4EE3\u7801\u7247\u6BB5",-1),V=t("p",null,[c("\u8BBE\u7F6E "),t("strong",null,"dangerouslyUseHTMLString"),c(" \u5C5E\u6027\u540E\u5C06message\u5C5E\u6027\u503C\u5F53\u4F5Chtml\u7247\u6BB5\u89E3\u6790")],-1),I={class:"demoBox"},j=t("h2",null,"\u53C2\u6570",-1),G={setup(i,{expose:e}){return e({frontmatter:{}}),(p,a)=>(l(),r("div",v,[$,N,w,t("div",L,[u(F)]),u(m,{comName:"Confirm",demoName:"demo1"}),S,T,t("div",M,[u(D)]),u(m,{comName:"Confirm",demoName:"demo2"}),O,H,t("div",P,[u(B)]),u(m,{comName:"Confirm",demoName:"demo3"}),U,V,t("div",I,[u(A)]),u(m,{comName:"Confirm",demoName:"demo4"}),j,u(k)]))}};export{G as default};
