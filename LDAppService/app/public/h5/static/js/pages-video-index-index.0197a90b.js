(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-video-index-index","pages-forum-Comment-Comment","pages-music-Recommend-Recommend"],{"0221":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-image[data-v-cb95d42e]{position:relative;transition:opacity .5s ease-in-out}.u-image__image[data-v-cb95d42e]{width:100%;height:100%}.u-image__loading[data-v-cb95d42e], .u-image__error[data-v-cb95d42e]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),t.exports=e},"0d2c":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.videoBox[data-v-7febf04a]{padding-top:0;padding-bottom:%?100?%}.videoBox[data-v-7febf04a] .uni-list-item__container{padding:0!important;height:100%}.videoBox[data-v-7febf04a] .uni-video-container .uni-video-bar{background-color:initial}.videoBox .videoDesc[data-v-7febf04a]{position:absolute;bottom:%?68?%;color:#fff;font-size:%?28?%;letter-spacing:%?4?%;height:%?120?%;overflow:auto}.videoBox .util[data-v-7febf04a]{position:absolute;right:%?20?%;top:40%;z-index:20}',""]),t.exports=e},"1c46":function(t,e,i){"use strict";i("4160"),i("ac1f"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=0,o=0,a={data:function(){return{dataList:[1,2,3,4,5],index:0,containerH:0,videoContentList:[]}},mounted:function(){var t=this,e=uni.createSelectorQuery().select(".videoItem");e.boundingClientRect((function(e){t.containerH=e.height})).exec(),this.init()},methods:{init:function(){var t=this;this.dataList.forEach((function(e,i){t.videoContentList.push(uni.createVideoContext("video_".concat(i)))}))},handleMoveStart:function(t){var e=t.touches;n=e[0].clientY},handleMoveEnd:function(t){var e=t.changedTouches;o=e[0].clientY;var i=o-n,a=Math.abs(i)/this.containerH;i<0?(a>.4&&(this.index++,this.videoContentList[this.index].play(),this.videoContentList[this.index-1].pause()),uni.pageScrollTo({scrollTop:this.containerH*this.index,duration:100})):(a>.4&&(this.index--,this.videoContentList[this.index].play(),this.videoContentList[this.index+1].pause()),uni.pageScrollTo({scrollTop:this.containerH*this.index,duration:100}))}}};e.default=a},2168:function(t,e,i){"use strict";i.r(e);var n=i("fe84"),o=i("74a3");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("a442");var r,s=i("f0c5"),d=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"cb95d42e",null,!1,n["a"],r);e["default"]=d.exports},"2e67":function(t,e,i){"use strict";i.r(e);var n=i("f4da"),o=i("cd4d");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("bdc8");var r,s=i("f0c5"),d=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"7febf04a",null,!1,n["a"],r);e["default"]=d.exports},"342f5":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler:function(t){t?(this.isError=!1,this.loading=!0):(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle:function(){var t={};return t.width=this.$u.addUnit(this.width),t.height=this.$u.addUnit(this.height),t.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),t.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(t.opacity=this.opacity,t.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),t}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(t){this.loading=!1,this.isError=!0,this.$emit("error",t)},onLoadHandler:function(){var t=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){t.durationTime=t.duration,t.opacity=1,setTimeout((function(){t.removeBgColor()}),t.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};e.default=n},"4b1d":function(t,e,i){var n=i("0d2c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("6bc0ad67",n,!0,{sourceMap:!1,shadowMode:!1})},"74a3":function(t,e,i){"use strict";i.r(e);var n=i("342f5"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},a442:function(t,e,i){"use strict";var n=i("c0af"),o=i.n(n);o.a},bdc8:function(t,e,i){"use strict";var n=i("4b1d"),o=i.n(n);o.a},c0af:function(t,e,i){var n=i("0221");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("69e3a24a",n,!0,{sourceMap:!1,shadowMode:!1})},cd4d:function(t,e,i){"use strict";i.r(e);var n=i("1c46"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},f4da:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uniList:i("ea30").default,uniListItem:i("b532").default,uImage:i("2168").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"videoBox",on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.handleMoveStart.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.handleMoveEnd.apply(void 0,arguments)}}},[i("uni-list",{staticClass:"h-full"},t._l(t.dataList,(function(e,n){return i("uni-list-item",{staticClass:"d-flex h-full",staticStyle:{width:"100vw",height:"93vh"},attrs:{title:"",note:""}},[i("template",{slot:"body"},[i("v-uni-view",{staticClass:"flex-1 d-flex videoItem",staticStyle:{height:"93vh","box-sizing":"border-box"}},[i("v-uni-video",{staticClass:"w-full h-full",attrs:{id:"video_"+n,loop:!0,src:"/static/1.mp4",controls:!0,"show-center-play-btn":!1,objectFit:"fill"}}),i("v-uni-view",{staticClass:"util"},[i("v-uni-view",{staticClass:"d-flex justify-center align-center"},[i("u-image",{attrs:{src:"/static/videoLike.png",width:"60upx",mode:"widthFix",shape:"circle"}}),i("v-uni-text",{staticStyle:{"font-size":"24upx",color:"#fff"}},[t._v("2519")])],1),i("v-uni-view",{staticClass:"d-flex justify-center align-center",staticStyle:{margin:"16upx 0"}},[i("u-image",{attrs:{src:"/static/videoComment.png",width:"60upx",mode:"widthFix",shape:"circle"}}),i("v-uni-text",{staticStyle:{"font-size":"24upx",color:"#fff"}},[t._v("523")])],1),i("v-uni-view",{staticClass:"d-flex justify-center align-center"},[i("u-image",{attrs:{src:"/static/videoShare.png",width:"64upx",mode:"widthFix",shape:"circle"}}),i("v-uni-text",{staticStyle:{"font-size":"24upx",color:"#fff"}},[t._v("12")])],1)],1),i("v-uni-view",{staticClass:"videoDesc w-full p-2"},[t._v("测试测试测试测试\n\t\t\t\t\t \t测试测试测试测试\n\t\t\t\t\t \t测试测试测试测试\n\t\t\t\t\t \t测试测试测试测试\n\t\t\t\t\t \t测试测试测试测试\n\t\t\t\t\t \t测试测试测试测试\n\t\t\t\t\t \t测试测试测试测试\n\t\t\t\t\t \t测试测试测试测试\n\t\t\t\t\t \t测试测试测试测试")])],1)],1)],2)})),1)],1)},a=[]},fe84:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uIcon:i("a623").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-image",style:[t.wrapStyle,t.backgroundStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.isError?t._e():i("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)},attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad,"show-menu-by-longpress":t.showMenuByLongpress},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrorHandler.apply(void 0,arguments)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadHandler.apply(void 0,arguments)}}}),t.showLoading&&t.loading?i("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius),backgroundColor:this.bgColor}},[t.$slots.loading?t._t("loading"):i("u-icon",{attrs:{name:t.loadingIcon,width:t.width,height:t.height}})],2):t._e(),t.showError&&t.isError&&!t.loading?i("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)}},[t.$slots.error?t._t("error"):i("u-icon",{attrs:{name:t.errorIcon,width:t.width,height:t.height}})],2):t._e()],1)},a=[]}}]);