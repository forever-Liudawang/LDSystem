import{a as v}from"./index.42bb92cb.js";import{d as p,a as g,r as i,Q as x,l as y,W as _,q as D,w as I,c as B,g as a,t as b,k as w,h as k}from"./vendor.82d14f1c.js";import{B as j}from"./BScroll.adf46c18.js";import{_ as M}from"./index.0770a693.js";const A={class:"articleDetail"},H={style:{"text-align":"center"}},R=["innerHTML"],S=["src"],T=p({setup(C){let c=g();const s=i(),r=i("/comment.html");r.value="/static/app/comment.html";const e=i(),m=async()=>{const t=await v({articleId:c.params.articleId});t&&t.success&&(s.value=t.data?t.data[0]:{})},o=()=>{e.value.onload=function(){e.value.height=e.value.contentDocument.body&&e.value.contentDocument.body.scrollHeight+100}};return x(()=>c.params.articleId,()=>{o()}),y(()=>{m(),o()}),(t,F)=>{const u=_("highlight"),h=_("click");return B(),D(j,{refreshFlag:e.value?e.value.height:6},{default:I(()=>{var l,n;return[a("div",A,[a("h1",H,b((l=s.value)==null?void 0:l.articleTitle),1),w(a("div",{class:"content",innerHTML:(n=s.value)==null?void 0:n.content},null,8,R),[[u],[h]]),a("iframe",{ref:(d,f)=>{f.commentRef=d,e.value=d},style:{width:"100%","min-height":"300px"},src:`${r.value}?articleId=${k(c).params.articleId}`,frameborder:"0"},null,8,S)])]}),_:1},8,["refreshFlag"])}}});var Q=M(T,[["__scopeId","data-v-666757af"]]);export{Q as default};
