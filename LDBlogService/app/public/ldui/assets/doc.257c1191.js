import{d as b,i as w,r as t,o as f,c as v,b as e,w as a,e as n,_ as F,a as l,p as C,h as y}from"./index.45851e92.js";import{p as A}from"./preview.fe56d2ff.js";const g=n("\u6253\u5F00"),V=b({setup(_){const o=w(!1),u=()=>{o.value=!o.value};return(p,r)=>{const s=t("l-button"),c=t("l-col"),d=t("l-row"),i=t("l-drawer");return f(),v("div",null,[e(d,{align:"center"},{default:a(()=>[e(c,{span:4},{default:a(()=>[e(s,{onClick:u,type:"primary"},{default:a(()=>[g]),_:1})]),_:1})]),_:1}),e(i,{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=m=>o.value=m)},null,8,["modelValue"])])}}}),$=n(" \xA0 "),x=n(" \xA0 "),N=n(" \xA0 "),S=n(" \xA0 "),k=n("\u5207\u6362"),I=n(" 123 "),U=b({setup(_){const o=w(!1),u=w("left"),p=()=>{o.value=!o.value};return(r,s)=>{const c=t("l-radio"),d=t("l-radio-group"),i=t("l-col"),m=t("l-button"),B=t("l-row"),D=t("l-drawer");return f(),v("div",null,[e(B,{align:"center"},{default:a(()=>[e(i,{span:20},{default:a(()=>[e(d,{modelValue:u.value,"onUpdate:modelValue":s[0]||(s[0]=h=>u.value=h)},{default:a(()=>[e(c,{value:"left",label:"left",size:"large"}),$,e(c,{value:"right",label:"right",size:"large",class:"ml-4"}),x,e(c,{value:"top",label:"top",size:"large",class:"ml-4"}),N,e(c,{value:"bottom",label:"bottom",size:"large",class:"ml-4"}),S]),_:1},8,["modelValue"])]),_:1}),e(i,{span:4},{default:a(()=>[e(m,{onClick:p,type:"primary"},{default:a(()=>[k]),_:1})]),_:1})]),_:1}),e(D,{modelValue:o.value,"onUpdate:modelValue":s[1]||(s[1]=h=>o.value=h),direction:u.value},{default:a(()=>[I]),_:1},8,["modelValue","direction"])])}}}),T=n("\u663E\u793A\u8868\u683C"),z=n("\u663E\u793A\u8868\u5355"),G=b({setup(_){const o=w(!1),u=w(!1),p=()=>{o.value=!o.value},r=()=>{u.value=!u.value},s=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",address:"No. 189, Grove St, Los Angeles",name:"Tom"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(c,d)=>{const i=t("l-button"),m=t("l-table-column"),B=t("l-table"),D=t("l-drawer"),h=t("l-input");return f(),v("div",null,[e(i,{onClick:p,type:"primary"},{default:a(()=>[T]),_:1}),e(i,{onClick:r,type:"primary",class:"ml-4"},{default:a(()=>[z]),_:1}),e(D,{modelValue:o.value,"onUpdate:modelValue":d[0]||(d[0]=E=>o.value=E)},{default:a(()=>[e(B,{style:{width:"100%"},data:s},{default:a(()=>[e(m,{prop:"date",label:"Date",align:"center"}),e(m,{prop:"name",label:"Name",width:"10%",align:"center"}),e(m,{prop:"address",label:"Address",width:"60%",align:"center"})]),_:1})]),_:1},8,["modelValue"]),e(D,{modelValue:u.value,"onUpdate:modelValue":d[1]||(d[1]=E=>u.value=E),direction:"left"},{default:a(()=>[e(h),e(h,{class:"mt-5 mb-5"}),e(h)]),_:1},8,["modelValue"])])}}});const L=_=>(C("data-v-1e6d7bea"),_=_(),y(),_),P=n("\u81EA\u5B9A\u4E49\u5934\u90E8"),M={class:"header"},O=L(()=>l("span",{class:"title"},"\u81EA\u5B9A\u4E49\u5934\u90E8\u5185\u5BB9",-1)),j=n("close"),q=b({setup(_){const o=w(!1),u=()=>{o.value=!o.value};return(p,r)=>{const s=t("l-button"),c=t("l-drawer");return f(),v("div",null,[e(s,{onClick:u,type:"primary"},{default:a(()=>[P]),_:1}),e(c,{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=d=>o.value=d)},{header:a(({close:d})=>[l("div",M,[O,e(s,{type:"error",onClick:d},{default:a(()=>[j]),_:2},1032,["onClick"])])]),_:1},8,["modelValue"])])}}});var H=F(q,[["__scopeId","data-v-1e6d7bea"]]);const J={class:"attributeDesc"},K=b({setup(_){const o=[{prop:"parameter",label:"\u53C2\u6570",width:"22%"},{prop:"type",label:"\u7C7B\u578B",width:"10%"},{prop:"desc",label:"\u8BF4\u660E",width:"30%"},{prop:"optional",label:"\u53EF\u9009\u503C"},{prop:"default",label:"\u9ED8\u8BA4\u503C",width:"10%"}],u=[{parameter:"title",type:"string",desc:"\u62BD\u5C49\u6807\u9898\uFF0C\u5982\u679C\u4F7F\u7528header\u5177\u540D\u63D2\u69FD\u540E\u5C06\u5931\u6548",optional:"\u2014",default:"\u6807\u9898"},{parameter:"v-model",type:"Boolean",desc:"\u662F\u5426\u663E\u793A\u62BD\u5C49",optional:"true / false",default:"false"},{parameter:"direction",type:"String",desc:"\u62BD\u5C49\u51FA\u73B0\u4E3A\u65B9\u5411",optional:"left / top / right / bottom",default:"left"},{parameter:"width",type:"String",desc:"\u62BD\u5C49\u533A\u57DF\u5BBD\u5EA6",optional:"\u2014\u2014",default:"32%"},{parameter:"closeOnModal",type:"Boolean",desc:"\u662F\u5426\u53EF\u901A\u8FC7\u906E\u7F69\u5C42\u5173\u95ED\u62BD\u5C49",optional:"true / false",default:"true"},{parameter:"closeShow",type:"Boolean",desc:"\u662F\u5426\u663E\u793A\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE",optional:"true / false",default:"true"},{parameter:"showClose",type:"Boolean",desc:"\u662F\u5426\u663E\u793A\u5DE6\u4E0A\u89D2\u5173\u95ED\u6309\u94AE",optional:"true / false",default:"true"},{parameter:"beforeClose",type:"Function",desc:"\u5173\u95ED\u524D\u4F1A\u6267\u884C\u6B64\u51FD\u6570\uFF0C\u8FD4\u56DEtrue\u53CA\u5173\u95ED",optional:"\u2014\u2014",default:"\u2014\u2014"}];return(p,r)=>{const s=t("l-table");return f(),v("div",J,[e(s,{columns:o,data:u})])}}}),Q={class:"attributeDesc"},R=b({setup(_){const o=[{prop:"slotName",label:"\u53C2\u6570"},{prop:"desc",label:"\u8BF4\u660E"}],u=[{slotName:"header",desc:"Drawer \u6807\u9898\u7684\u5185\u5BB9\uFF1B\u4F1A\u66FF\u6362\u6807\u9898\u90E8\u5206\u3002"},{slotName:"footer",desc:"Drawer \u9875\u811A\u90E8\u5206"},{slotName:"\u9ED8\u8BA4\u63D2\u69FD",desc:"modal\u4E2D\u7684\u5185\u5BB9\u533A\u57DF"}];return(p,r)=>{const s=t("l-table");return f(),v("div",Q,[e(s,{columns:o,data:u})])}}}),W={class:"markdown-body"},X=l("h1",null,"Drawer \u62BD\u5C49\u7EC4\u4EF6",-1),Y=l("h2",{id:"\u57FA\u672C\u4F7F\u7528"},"\u57FA\u672C\u4F7F\u7528",-1),Z=l("p",null,[n("\u901A\u8FC7\u8BBE\u7F6E "),l("strong",null,"model-value"),n(" \u6765\u63A7\u5236 Drawer \u7684\u663E\u793A\u4E0E\u9690\u85CF\u72B6\u6001\uFF0C\u8BE5\u5C5E\u6027\u63A5\u53D7\u4E00\u4E2A boolean \u7C7B\u578B\u3002 Drawer \u5305\u542B\u4E09\u90E8\u5206: title & body & footer, \u5176\u4E2D title \u662F\u4E00\u4E2A\u5177\u540D slot, \u4F60\u8FD8\u53EF\u4EE5\u901A\u8FC7 title \u5C5E\u6027\u6765\u8BBE\u7F6E\u6807\u9898, \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5B83\u662F\u4E00\u4E2A\u7A7A\u5B57\u7B26\u4E32, \u5176\u4E2D body \u90E8\u5206\u662F Drawer \u7EC4\u4EF6\u7684\u4E3B\u533A\u57DF, \u5B83\u5305\u542B\u4E86\u7528\u6237\u5B9A\u4E49\u7684\u4E3B\u8981\u5185\u5BB9. footer\u548Ctitle\u7528\u6CD5\u4E00\u81F4, \u7528\u6765\u663E\u793A\u9875\u811A\u4FE1\u606F. \u5F53 Drawer \u6253\u5F00\u65F6\uFF0C\u9ED8\u8BA4\u8BBE\u7F6E\u662F\u4ECE\u53F3\u81F3\u5DE6\u6253\u5F00 32% \u6D4F\u89C8\u5668\u5BBD\u5EA6\u3002 \u4F60\u53EF\u4EE5\u901A\u8FC7\u4F20\u5165\u5BF9\u5E94\u7684 direction \u548C width \u5C5E\u6027\u6765\u4FEE\u6539\u8FD9\u4E00\u9ED8\u8BA4\u884C\u4E3A\u3002 \u4E0B\u9762\u4E00\u4E2A\u793A\u4F8B\u5C06\u5C55\u793A\u5982\u4F55\u4F7F\u7528 before-close API\uFF0C\u66F4\u591A\u8BE6\u7EC6\u7528\u6CD5\u8BF7\u53C2\u8003\u9875\u9762\u5E95\u90E8\u7684 API \u90E8\u5206")],-1),ee={class:"demoBox"},oe=l("h2",{id:"\u4E0D\u540C\u65B9\u5411"},"\u4E0D\u540C\u65B9\u5411",-1),te=l("p",null,[n("\u8BBE\u7F6E "),l("strong",null,"direction"),n("\u5C5E\u6027\u63A7\u5236\u62BD\u5C49\u663E\u793A\u5728\u4E0D\u540C\u7684\u65B9\u5411")],-1),le={class:"demoBox"},ue=l("h2",{id:"\u81EA\u5B9A\u4E49\u5185\u5BB9"},"\u81EA\u5B9A\u4E49\u5185\u5BB9",-1),ae=l("p",null,"\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u663E\u793A\u5185\u5BB9",-1),se={class:"demoBox"},ne=l("h2",{id:"\u81EA\u5B9A\u4E49\u5934\u90E8"},"\u81EA\u5B9A\u4E49\u5934\u90E8",-1),de=l("p",null,"header \u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u663E\u793A\u6807\u9898\u7684\u533A\u57DF\u3002 \u4E3A\u4E86\u4FDD\u6301\u53EF\u7528\u6027\uFF0C\u9664\u4E86\u4F7F\u7528\u6B64\u63D2\u69FD\u5916\uFF0C\u4F7F\u7528 title \u5C5E\u6027",-1),re={class:"demoBox"},_e=l("h2",null,"\u53C2\u6570",-1),ce=l("h2",null,"\u63D2\u69FD",-1),me={setup(_,{expose:o}){return o({frontmatter:{}}),(p,r)=>(f(),v("div",W,[X,Y,Z,l("div",ee,[e(V)]),e(A,{comName:"Drawer",demoName:"demo1"}),oe,te,l("div",le,[e(U)]),e(A,{comName:"Drawer",demoName:"demo2"}),ue,ae,l("div",se,[e(G)]),e(A,{comName:"Drawer",demoName:"demo3"}),ne,de,l("div",re,[e(H)]),e(A,{comName:"Drawer",demoName:"demo4"}),_e,e(K),ce,e(R)]))}};export{me as default};