(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-forum-Comment-Comment~pages-forum-ReplayComment-ReplayComment~pages-forum-postDetail-postDetail"],{"06c5":function(t,e,i){"use strict";i("a630"),i("fb6a"),i("d3b7"),i("25f0"),i("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var n=r(i("6b75"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(t){if("string"===typeof t)return(0,n.default)(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?(0,n.default)(t,e):void 0}}},"193e":function(t,e,i){"use strict";i.r(e);var n=i("7168"),r=i("244b");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("9893");var o,s=i("f0c5"),l=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"c95c97b2",null,!1,n["a"],o);e["default"]=l.exports},"244b":function(t,e,i){"use strict";i.r(e);var n=i("dee3"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"592b":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("b719"),r={props:{model:{type:Object,required:!0},showComment:{type:Boolean,default:!0}},data:function(){return{dateDistance:n.dateDistance,showReplay:!1}},methods:{time:function(t){var e=this.dateDistance(t);return console.log(e),0==e[0]?"刚刚":e[0]+e[1]+"前"},handleLight:function(){},handleReplay:function(){this.$emit("onReplay",this.model)},handleComment:function(){console.log(this.model,"model"),uni.navigateTo({url:"/pages/forum/ReplayComment/ReplayComment?model="+JSON.stringify(this.model),animationType:"slide-in-bottom"})}}};e.default=r},"6b75":function(t,e,i){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},7168:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.nodes.length?t._e():t._t("default"),i("v-uni-view",{style:t.showAm+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"_top"}},[i("div",{attrs:{id:"rtf"+t.uid}})])],2)},a=[]},9893:function(t,e,i){"use strict";var n=i("cd9a"),r=i.n(n);r.a},a745:function(t,e,i){"use strict";i.r(e);var n=i("592b"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},b5c8:function(t,e,i){"use strict";i.r(e);var n=i("c707"),r=i("a745");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);var o,s=i("f0c5"),l=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"0d95cf9b",null,!1,n["a"],o);e["default"]=l.exports},b719:function(t,e,i){"use strict";i("99af"),i("d3b7"),i("25f0"),i("4d90"),Object.defineProperty(e,"__esModule",{value:!0}),e.formatPlayTime=e.dateDistance=void 0;var n=function(t){var e,i,n=new Date(t),r=new Date,a=Math.floor((r-n)/1e3),o=Math.floor(a/86400);return o<1?(e=Math.floor(a%86400/3600),e<1?(i=Math.floor(a%3600/60),o%60,[i,"分钟"]):[e,"小时"]):[o,"天"]};e.dateDistance=n;var r=function(t){t|=0;var e=t/60|0,i=(t%60).toString().padStart(2,"0");return"".concat(e,":").concat(i)};e.formatPlayTime=r},b85c:function(t,e,i){"use strict";i("a4d3"),i("e01a"),i("d28b"),i("d3b7"),i("3ca3"),i("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var n=r(i("06c5"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var i;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=(0,n.default)(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return s=t.done,t},e:function(t){l=!0,o=t},f:function(){try{s||null==i["return"]||i["return"]()}finally{if(l)throw o}}}}},c217:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"@-webkit-keyframes _show-data-v-c95c97b2{0%{opacity:0}100%{opacity:1}}@keyframes _show-data-v-c95c97b2{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e},c707:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uImage:i("0fbd").default,uParse:i("193e").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"w-full d-flex mb-2"},[i("v-uni-view",{},[i("u-image",{attrs:{src:"https://img2.baidu.com/it/u=3960470193,627689163&fm=26&fmt=auto&gp=0.jpg",width:"80upx",height:"80upx",shape:"circle"}})],1),i("v-uni-view",{staticClass:"ml-3 d-flex flex-column pt-2 pb-2 flex-1",staticStyle:{"border-bottom":"2upx solid #f7f7f7"}},[i("v-uni-view",{staticClass:" d-flex flex-column"},[i("v-uni-text",[t._v(t._s(t.model.nickName))]),i("v-uni-text",{staticClass:"font-xs color-grey"},[t._v(t._s(t.time(t.model.created)))])],1),i("v-uni-view",{staticClass:"p-2"},[i("u-parse",{attrs:{html:t.model.content}})],1),i("v-uni-view",{staticClass:"d-flex pt-2 pr-4"},[i("v-uni-view",{staticClass:"d-flex align-center mr-5",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleLight.apply(void 0,arguments)}}},[i("u-image",{staticClass:"mr-1",attrs:{src:"/static/noLight.png",width:"40upx",mode:"widthFix"}}),i("v-uni-text",{staticClass:"font-xs color-grey"},[t._v("亮了("+t._s(t.model.light)+")")])],1),t.model.replayNum&&t.showComment&&t.model.replayNum>0?i("v-uni-view",{staticClass:"d-flex align-center mr-5",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleComment.apply(void 0,arguments)}}},[i("u-image",{staticClass:"mr-1",attrs:{src:"/static/comment.png",width:"40upx",mode:"widthFix"}}),i("v-uni-text",{staticClass:"font-xs color-grey"},[t._v("评论("+t._s(t.model.replayNum||"")+")")])],1):t._e(),t.showComment?i("v-uni-view",{staticClass:"d-flex align-center mr-5",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleReplay.apply(void 0,arguments)}}},[i("u-image",{staticClass:"mr-1",attrs:{src:"/static/replay.png",width:"40upx",mode:"widthFix"}}),i("v-uni-text",{staticClass:"font-xs color-grey"},[t._v("回复")])],1):t._e()],1)],1)],1)},a=[]},cd9a:function(t,e,i){var n=i("c217");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("ba43220e",n,!0,{sourceMap:!1,shadowMode:!1})},dee3:function(t,e,i){"use strict";var n=i("4ea4");i("99af"),i("caad"),i("c975"),i("acd8"),i("e25e"),i("ac1f"),i("2532"),i("466d"),i("5319"),i("841c"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,a=n(i("b85c")),o=uni.getSystemInfoSync(),s=o.windowWidth,l=(o.platform,i("df09")),c={name:"parser",data:function(){return{uid:this._uid,showAm:"",nodes:[]}},props:{html:String,autopause:{type:Boolean,default:!0},autoscroll:Boolean,autosetTitle:{type:Boolean,default:!0},domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},created:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,i=this.length;e<i;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var i,n=e.split("://")[0],r=n.length;i=e[r];r++){if("/"==i&&"/"!=e[r-1]&&"/"!=e[r+1])break;n+=Math.random()>.5?i.toUpperCase():i}return n+=e.substr(r),this[t]=n}if(this[t]=e,e.includes("data:image")){var a=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!a)return}}}},mounted:function(){var t=this;this.document=document.getElementById("rtf"+this._uid),r&&(this.search=function(e){return r(t,e)}),this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{setContent:function(t,e){var i=this;if(t){var n=document.createElement("div");e?this.rtf?this.rtf.appendChild(n):this.rtf=n:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=n),n.innerHTML=this._handleHtml(t,e);for(var r,o=this.rtf.getElementsByTagName("style"),c=0;r=o[c++];)r.innerHTML=r.innerHTML.replace(/body/g,"#rtf"+this._uid),r.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,n=0;e=t[n++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),i._observer.unobserve(e.target))}),{rootMargin:"500px 0px 500px 0px"}));var u=this,d=this.rtf.getElementsByTagName("title");d.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:d[0].innerText});var f=function(t){var e=t.getAttribute("src");i.domain&&e&&("/"==e[0]?"/"==e[1]?t.src=(i.domain.includes("://")?i.domain.split("://")[0]:"")+":"+e:t.src=i.domain+e:e.includes("://")||0==e.indexOf("data:")||(t.src=i.domain+"/"+e))};this.imgList.length=0;for(var h,m=this.rtf.getElementsByTagName("img"),p=0,v=0;h=m[p];p++)parseInt(h.style.width||h.getAttribute("width"))>s&&(h.style.height="auto"),f(h),h.hasAttribute("ignore")||"A"==h.parentElement.nodeName||(h.i=v++,u.imgList.push(h.getAttribute("original-src")||h.src||h.getAttribute("data-src")),h.onclick=function(t){t.stopPropagation();var e=!0;this.ignore=function(){return e=!1},u.$emit("imgtap",this),e&&uni.previewImage({current:this.i,urls:u.imgList})}),h.onerror=function(){l.errorImg&&(u.imgList[this.i]=this.src=l.errorImg),u.$emit("error",{source:"img",target:this})},u.lazyLoad&&this._observer&&h.src&&0!=h.i&&(h.setAttribute("data-src",h.src),h.removeAttribute("src"),this._observer.observe(h));var g,b=this.rtf.getElementsByTagName("a"),y=(0,a.default)(b);try{for(y.s();!(g=y.n()).done;){var x=g.value;x.onclick=function(t){t.stopPropagation();var e=!0,i=this.getAttribute("href");if(u.$emit("linkpress",{href:i,ignore:function(){return e=!1}}),e&&i)if("#"==i[0])u.useAnchor&&u.navigateTo({id:i.substr(1)});else{if(0==i.indexOf("http")||0==i.indexOf("//"))return!0;uni.navigateTo({url:i})}return!1}}}catch(N){y.e(N)}finally{y.f()}var _=this.rtf.getElementsByTagName("video");u.videoContexts=_;for(var w,C=0;w=_[C++];)f(w),w.style.maxWidth="100%",w.onerror=function(){u.$emit("error",{source:"video",target:this})},w.onplay=function(){if(u.autopause)for(var t,e=0;t=u.videoContexts[e++];)t!=this&&t.pause()};var T,A,k=this.rtf.getElementsByTagName("audio"),S=(0,a.default)(k);try{for(S.s();!(T=S.n()).done;){var O=T.value;f(O),O.onerror=function(){u.$emit("error",{source:"audio",target:this})}}}catch(N){S.e(N)}finally{S.f()}if(this.autoscroll){var I,M=this.rtf.getElementsByTagName("table"),B=(0,a.default)(M);try{for(B.s();!(I=B.n()).done;){var L=I.value,E=document.createElement("div");E.style.overflow="scroll",L.parentNode.replaceChild(E,L),E.appendChild(L)}}catch(N){B.e(N)}finally{B.f()}}e||this.document.appendChild(this.rtf),this.$nextTick((function(){i.nodes=[1],i.$emit("load")})),setTimeout((function(){return i.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){i.rect=i.rtf.getBoundingClientRect(),i.rect.height==A&&(i.$emit("ready",i.rect),clearInterval(i._timer)),A=i.rect.height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:_show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;var t="";return t=this.rtf.innerText,t},in:function(t){t.page&&t.selector&&t.scrollTop&&(this._in=t)},navigateTo:function(t){var e=this;if(!this.useAnchor)return t.fail&&t.fail("Anchor is disabled");var i=" ",n=uni.createSelectorQuery().in(this._in?this._in.page:this).select((this._in?this._in.selector:"#_top")+(t.id?"".concat(i,"#").concat(t.id,",").concat(this._in?this._in.selector:"#_top").concat(i,".").concat(t.id):"")).boundingClientRect();this._in?n.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect():n.selectViewport().scrollOffset(),n.exec((function(i){if(!i[0])return t.fail&&t.fail("Label not found");var n=i[1].scrollTop+i[0].top-(i[2]?i[2].top:0)+(t.offset||0);e._in?e._in.page[e._in.scrollTop]=n:uni.pageScrollTo({scrollTop:n,duration:300}),t.success&&t.success()}))},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},_handleHtml:function(t,e){if(!e){var i="<style scoped>@keyframes _show{0%{opacity:0}100%{opacity:1}}img{max-width:100%}";for(var n in l.userAgentStyles)i+="".concat(n,"{").concat(l.userAgentStyles[n],"}");for(n in this.tagStyle)i+="".concat(n,"{").concat(this.tagStyle[n],"}");i+="</style>",t=i+t}return t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*s/750+"px"}))),t}}};e.default=c},df09:function(t,e,i){i("ac1f"),i("1276");var n={errorImg:null,filter:null,highlight:null,onText:null,entities:{quot:'"',apos:"'",semi:";",nbsp:" ",ensp:" ",emsp:" ",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…"},blankChar:r(" , ,\t,\r,\n,\f"),boolAttrs:r("allowfullscreen,autoplay,autostart,controls,ignore,loop,muted"),blockTags:r("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:r("area,base,canvas,frame,iframe,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr"),richOnlyTags:r("a,colgroup,fieldset,legend"),selfClosingTags:r("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustTags:r("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}};function r(t){for(var e=Object.create(null),i=t.split(","),n=i.length;n--;)e[i[n]]=!0;return e}t.exports=n}}]);