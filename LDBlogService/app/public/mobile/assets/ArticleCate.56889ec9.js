var D=Object.defineProperty;var L=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var A=(s,e,a)=>e in s?D(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,F=(s,e)=>{for(var a in e||(e={}))M.call(e,a)&&A(s,a,e[a]);if(L)for(var a of L(e))U.call(e,a)&&A(s,a,e[a]);return s};import{d as V,a as b,r as c,U as P,l as R,o as $,M as q,b as T,q as m,w as p,A as G,c as r,g as o,t as k,h as H,f as w,n as h,e as z,i as E,F as N,V as C}from"./vendor.e7693954.js";import{b as J,c as K}from"./index.91c9dadc.js";import{B as O,A as Q}from"./BScroll.3a10d930.js";import{_ as W}from"./index.d2b9488e.js";function S(s){switch(s){case"1":return"FrontEnd";case"2":return"BackEnd";case"3":return"Life"}}const X={class:"articleCate"},Y={class:"title"},Z={class:"tags"},ee=C("\u5168\u90E8"),ae={class:"main"},te=C("\u52A0\u8F7D\u4E2D..."),se=V({setup(s){let e=b();const a=c([]),x=c([]),i=c(!0),u=P({pageSize:10,pageIndex:0}),d=c(!1),n=c("");let I=c(S(e.params.cateId));const v=async()=>{const t=await J(F({articleCateId:e.params.cateId,tag:n.value},u));t&&t.success&&(!t.data||t.data.length==0?d.value=!0:a.value=[...a.value,...t.data],i.value=!1)},B=async()=>{const t=await K();if(t&&t.success){const _=(t.data||[]).filter(g=>g.articleCateId==e.params.cateId);x.value=_}};R(e,()=>{I.value=S(e.params.cateId)}),$(t=>{e=t,u.pageIndex=0,n.value="",a.value=[],d.value=!1,v(),B()}),q(()=>{v(),B()});const j=()=>{if(d.value){G("\u522B\u62C9\u5566\uFF0C\u6CA1\u6709\u4E86\uFF01");return}u.pageIndex+=1,i.value=!0,v()},y=t=>{u.pageIndex=0,n.value=t.articleTagName||"",a.value=[],d.value=!1,v()};return(t,f)=>{const _=T("van-tag"),g=T("van-loading");return r(),m(O,{onPullingUp:j,refresh:i.value,articleListSize:a.value.length},{default:p(()=>[o("div",X,[o("div",Y,k(H(I)),1),o("div",Z,[w(_,{type:"primary",color:"#fff",class:h(n.value==""?"selected":""),onClick:f[0]||(f[0]=l=>y("")),size:"large"},{default:p(()=>[ee]),_:1},8,["class"]),(r(!0),z(N,null,E(x.value,l=>(r(),m(_,{type:"primary",class:h(n.value==l.articleTagName?"selected":""),onClick:le=>y(l),color:"#fff",size:"large"},{default:p(()=>[C(k(l.articleTagName),1)]),_:2},1032,["class","onClick"]))),256))]),o("div",ae,[(r(!0),z(N,null,E(a.value,l=>(r(),m(Q,{articleModel:l},null,8,["articleModel"]))),256))]),o("div",{class:h(["loading",i.value?"show":"hide"])},[w(g,{size:"24px"},{default:p(()=>[te]),_:1})],2)])]),_:1},8,["refresh","articleListSize"])}}});var ue=W(se,[["__scopeId","data-v-2c6afe57"]]);export{ue as default};