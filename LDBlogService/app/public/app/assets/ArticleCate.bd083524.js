var S=Object.defineProperty;var F=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var A=(s,e,a)=>e in s?S(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,T=(s,e)=>{for(var a in e||(e={}))D.call(e,a)&&A(s,a,e[a]);if(F)for(var a of F(e))M.call(e,a)&&A(s,a,e[a]);return s};import{d as U,a as V,r,X as P,Q as R,o as $,l as q,b as k,q as m,w as _,A as Q,c,g as o,t as w,h as X,f as E,n as h,e as L,i as N,F as b,Y as C}from"./vendor.82d14f1c.js";import{b as Y,c as G}from"./index.42bb92cb.js";import{A as H}from"./Article.056a296c.js";import{B as J}from"./BScroll.97283414.js";import{_ as K}from"./index.70d1f7da.js";function j(s){switch(s){case"1":return"FrontEnd";case"2":return"BackEnd";case"3":return"Life"}}const O={class:"articleCate"},W={class:"title"},Z={class:"tags"},ee=C("\u5168\u90E8"),ae={class:"main"},te=C("\u52A0\u8F7D\u4E2D..."),se=U({setup(s){let e=V();const a=r([]),x=r([]),i=r(!0),u=P({pageSize:10,pageIndex:0}),d=r(!1),n=r("");let I=r(j(e.params.cateId));const f=async()=>{const t=await Y(T({articleCateId:e.params.cateId,tag:n.value},u));t&&t.success&&(!t.data||t.data.length==0?d.value=!0:a.value=[...a.value,...t.data],i.value=!1)},B=async()=>{const t=await G();if(t&&t.success){const v=(t.data||[]).filter(g=>g.articleCateId==e.params.cateId);x.value=v}};R(e,()=>{I.value=j(e.params.cateId)}),$(t=>{e=t,u.pageIndex=0,n.value="",a.value=[],d.value=!1,f(),B()}),q(()=>{f(),B()});const z=()=>{if(d.value){Q("\u522B\u62C9\u5566\uFF0C\u6CA1\u6709\u4E86\uFF01");return}u.pageIndex+=1,i.value=!0,f()},y=t=>{u.pageIndex=0,n.value=t.articleTagName||"",a.value=[],d.value=!1,f()};return(t,p)=>{const v=k("van-tag"),g=k("van-loading");return c(),m(J,{onPullingUp:z,refresh:i.value,refreshFlag:a.value.length},{default:_(()=>[o("div",O,[o("div",W,w(X(I)),1),o("div",Z,[E(v,{type:"primary",color:"#fff",class:h(n.value==""?"selected":""),onClick:p[0]||(p[0]=l=>y("")),size:"large"},{default:_(()=>[ee]),_:1},8,["class"]),(c(!0),L(b,null,N(x.value,l=>(c(),m(v,{type:"primary",class:h(n.value==l.articleTagName?"selected":""),onClick:le=>y(l),color:"#fff",size:"large"},{default:_(()=>[C(w(l.articleTagName),1)]),_:2},1032,["class","onClick"]))),256))]),o("div",ae,[(c(!0),L(b,null,N(a.value,l=>(c(),m(H,{articleModel:l},null,8,["articleModel"]))),256))]),o("div",{class:h(["loading",i.value?"show":"hide"])},[E(g,{size:"24px"},{default:_(()=>[te]),_:1})],2)])]),_:1},8,["refresh","refreshFlag"])}}});var de=K(se,[["__scopeId","data-v-d867ae2e"]]);export{de as default};