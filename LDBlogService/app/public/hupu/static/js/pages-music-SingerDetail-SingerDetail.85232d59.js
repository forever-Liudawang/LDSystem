(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-music-SingerDetail-SingerDetail","pages-forum-Comment-Comment","pages-music-Recommend-Recommend"],{"0221":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-image[data-v-cb95d42e]{position:relative;transition:opacity .5s ease-in-out}.u-image__image[data-v-cb95d42e]{width:100%;height:100%}.u-image__loading[data-v-cb95d42e], .u-image__error[data-v-cb95d42e]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),t.exports=e},2168:function(t,e,n){"use strict";n.r(e);var i=n("fe84"),r=n("74a3");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("a442");var a,s=n("f0c5"),u=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"cb95d42e",null,!1,i["a"],a);e["default"]=u.exports},"2f91":function(t,e,n){"use strict";n.r(e);var i=n("f3a2"),r=n("3110");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("c5d1");var a,s=n("f0c5"),u=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"adf85ec2",null,!1,i["a"],a);e["default"]=u.exports},3110:function(t,e,n){"use strict";n.r(e);var i=n("4045"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},"342f5":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler:function(t){t?(this.isError=!1,this.loading=!0):(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle:function(){var t={};return t.width=this.$u.addUnit(this.width),t.height=this.$u.addUnit(this.height),t.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),t.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(t.opacity=this.opacity,t.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),t}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(t){this.loading=!1,this.isError=!0,this.$emit("error",t)},onLoadHandler:function(){var t=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){t.durationTime=t.duration,t.opacity=1,setTimeout((function(){t.removeBgColor()}),t.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};e.default=i},4045:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-sticky",props:{offsetTop:{type:[Number,String],default:0},index:{type:[Number,String],default:""},enable:{type:Boolean,default:!0},h5NavHeight:{type:[Number,String],default:44},bgColor:{type:String,default:"#ffffff"},zIndex:{type:[Number,String],default:""}},data:function(){return{fixed:!1,height:"auto",stickyTop:0,elClass:this.$u.guid(),left:0,width:"auto"}},watch:{offsetTop:function(t){this.initObserver()},enable:function(t){0==t?(this.fixed=!1,this.disconnectObserver("contentObserver")):this.initObserver()}},computed:{uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.sticky}},mounted:function(){this.initObserver()},methods:{initObserver:function(){var t=this;this.enable&&(this.stickyTop=0!=this.offsetTop?uni.upx2px(this.offsetTop)+this.h5NavHeight:this.h5NavHeight,this.disconnectObserver("contentObserver"),this.$uGetRect("."+this.elClass).then((function(e){t.height=e.height,t.left=e.left,t.width=e.width,t.$nextTick((function(){t.observeContent()}))})))},observeContent:function(){var t=this;this.disconnectObserver("contentObserver");var e=this.createIntersectionObserver({thresholds:[.95,.98,1]});e.relativeToViewport({top:-this.stickyTop}),e.observe("."+this.elClass,(function(e){t.enable&&t.setFixed(e.boundingClientRect.top)})),this.contentObserver=e},setFixed:function(t){var e=t<this.stickyTop;e?this.$emit("fixed",this.index):this.fixed&&this.$emit("unfixed",this.index),this.fixed=e},disconnectObserver:function(t){var e=this[t];e&&e.disconnect()}},beforeDestroy:function(){this.disconnectObserver("contentObserver")}};e.default=i},5112:function(t,e,n){"use strict";var i=n("4ea4");n("99af"),n("d81d"),n("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=i(n("1da1")),o=i(n("d47d")),a={data:function(){return{imgHeight:null,cptOpacity:1,id:"",singerModel:null,scrollTop:0}},onPageScroll:function(t){console.log(t),this.scrollTop=t.scrollTop},onLoad:function(t){var e=t.id;this.id=e},mounted:function(){this.handleGetDetail()},computed:{musicName:function(){return function(t){var e=t.ar,n=t.al,i="";return e.map((function(t,e){return i+=0===e?t.name:"/"+t.name,t})),"".concat(i," - ").concat(n.name)}}},methods:{handleBack:function(){uni.navigateBack({delta:1})},handleGetDetail:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showLoading({title:"加载中...."}),e.next=3,t.$http({url:"/music/getSingerDetail",method:"get",data:{id:t.id}});case 3:n=e.sent,(0,o.default)(n,(function(e){t.singerModel=e,uni.hideLoading()}));case 5:case"end":return e.stop()}}),e)})))()},handleScroll:function(t){var e=this,n=t.detail,i=(n.scrollLeft,n.scrollTop);n.scrollHeight,n.scrollWidth,n.deltaX,n.deltaY;if(!this.imgHeight){var r=uni.createSelectorQuery().select(".imgBox");r.boundingClientRect((function(t){e.imgHeight=Math.floor(t.height)})).exec()}this.scrollTop=Math.ceil(i);var o=Math.abs(i/this.imgHeight);this.cptOpacity="".concat(.95-o)},handleToTop:function(){console.log(12222),uni.pageScrollTo({scrollTop:0,duration:300})}}};e.default=a},"59f4":function(t,e,n){"use strict";var i=n("de6e"),r=n.n(i);r.a},"5af5":function(t,e,n){var i=n("a683");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("66b15e9b",i,!0,{sourceMap:!1,shadowMode:!1})},"74a3":function(t,e,n){"use strict";n.r(e);var i=n("342f5"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},"9b8d":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-sticky[data-v-adf85ec2]{z-index:9999999999}',""]),t.exports=e},a33b:function(t,e,n){"use strict";var i=n("5af5"),r=n.n(i);r.a},a442:function(t,e,n){"use strict";var i=n("c0af"),r=n.n(i);r.a},a683:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.singerDetail[data-v-58d13502]{padding-top:0;height:100%;position:relative}.singerDetail .header[data-v-58d13502]{position:absolute;top:0}.singerDetail .imgBox[data-v-58d13502]{height:45%;width:100%;background:url(http://p1.music.126.net/LCWqYYKoCEZKuAC3S3lIeg==/109951165034938865.jpg) no-repeat;background-size:cover;-webkit-filter:brightness(.7);filter:brightness(.7);position:fixed}.singerDetail .musicList[data-v-58d13502]{background-color:#fff;border-top-left-radius:%?12?%;border-top-right-radius:%?12?%;position:absolute;width:100%;top:44%}.singerDetail .musicList .collection[data-v-58d13502]{position:absolute;width:35%;height:%?80?%;border-radius:%?40?%;color:#fff;background-color:#d81e06;font-size:%?32?%;left:50%;top:%?-120?%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}',""]),t.exports=e},a74f:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-back-top",props:{mode:{type:String,default:"circle"},icon:{type:String,default:"arrow-upward"},tips:{type:String,default:""},duration:{type:[Number,String],default:100},scrollTop:{type:[Number,String],default:0},top:{type:[Number,String],default:400},bottom:{type:[Number,String],default:200},right:{type:[Number,String],default:40},zIndex:{type:[Number,String],default:"9"},iconStyle:{type:Object,default:function(){return{color:"#909399",fontSize:"38rpx"}}},customStyle:{type:Object,default:function(){return{}}}},watch:{showBackTop:function(t,e){t?(this.uZIndex=this.zIndex,this.opacity=1):(this.uZIndex=-1,this.opacity=0)}},computed:{showBackTop:function(){return this.scrollTop>uni.upx2px(this.top)}},data:function(){return{opacity:0,uZIndex:-1}},methods:{backToTop:function(){uni.pageScrollTo({scrollTop:0,duration:this.duration})}}};e.default=i},aed7:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-back-top[data-v-027c83b3]{width:%?80?%;height:%?80?%;position:fixed;z-index:9;display:flex;flex-direction:row;flex-direction:column;justify-content:center;background-color:#e1e1e1;color:#606266;align-items:center;transition:opacity .4s}.u-back-top__content[data-v-027c83b3]{display:flex;flex-direction:row;flex-direction:column;align-items:center}.u-back-top__content__tips[data-v-027c83b3]{font-size:%?24?%;-webkit-transform:scale(.8);transform:scale(.8);line-height:1}',""]),t.exports=e},b5a76:function(t,e,n){"use strict";n.r(e);var i=n("5112"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},b6db:function(t,e,n){var i=n("9b8d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("3be5cb98",i,!0,{sourceMap:!1,shadowMode:!1})},babf:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uIcon:n("a623").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-back-top",class:["u-back-top--mode--"+t.mode],style:[{bottom:t.bottom+"rpx",right:t.right+"rpx",borderRadius:"circle"==t.mode?"10000rpx":"8rpx",zIndex:t.uZIndex,opacity:t.opacity},t.customStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backToTop.apply(void 0,arguments)}}},[t.$slots.default||t.$slots.$default?t._t("default"):n("v-uni-view",{staticClass:"u-back-top__content"},[n("u-icon",{attrs:{name:t.icon,"custom-style":t.iconStyle},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backToTop.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"u-back-top__content__tips"},[t._v(t._s(t.tips))])],1)],2)},o=[]},c0af:function(t,e,n){var i=n("0221");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("69e3a24a",i,!0,{sourceMap:!1,shadowMode:!1})},c5d1:function(t,e,n){"use strict";var i=n("b6db"),r=n.n(i);r.a},cd04:function(t,e,n){"use strict";n.r(e);var i=n("a74f"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},d081:function(t,e,n){"use strict";n.r(e);var i=n("e121"),r=n("b5a76");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("a33b");var a,s=n("f0c5"),u=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"58d13502",null,!1,i["a"],a);e["default"]=u.exports},dd95:function(t,e,n){"use strict";n.r(e);var i=n("babf"),r=n("cd04");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("59f4");var a,s=n("f0c5"),u=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"027c83b3",null,!1,i["a"],a);e["default"]=u.exports},de6e:function(t,e,n){var i=n("aed7");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("039b7114",i,!0,{sourceMap:!1,shadowMode:!1})},e121:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uSticky:n("2f91").default,uIcon:n("a623").default,uImage:n("2168").default,uBackTop:n("dd95").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"singerDetail"},[n("v-uni-scroll-view",{staticClass:"h-full",attrs:{"scroll-y":"true"},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.handleScroll.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"header w-full"},[n("u-sticky",{attrs:{"offset-top":"0"}},[n("v-uni-view",{staticClass:" p-2  d-flex justify-between nav"},[n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBack.apply(void 0,arguments)}}},[n("u-icon",{attrs:{name:"arrow-left",size:"46"}})],1)],1)],1)],1),t.singerModel?n("v-uni-view",{staticClass:"h-full pos-rel d-flex flex-column"},[n("v-uni-view",{ref:"$img",staticClass:"imgBox",style:{backgroundImage:"url("+t.singerModel.artist.picUrl+")"}}),n("v-uni-view",{staticClass:"musicList flex-1"},[n("v-uni-view",{staticClass:"collection d-flex justify-center align-center",style:{opacity:t.cptOpacity}},[n("u-icon",{staticClass:"mr-2",attrs:{name:"plus",color:"#fff",size:"30"}}),t._v("收藏")],1),n("v-uni-view",{staticClass:"d-flex align-center pl-3",staticStyle:{"border-bottom":"2upx solid #e4e4e4"}},[n("v-uni-view",{staticClass:"d-flex flex-1  align-center pt-2 pb-2"},[n("u-image",{attrs:{shape:"circle",src:"/static/play.png",width:"8%",mode:"widthFix","border-radius":"6"}}),n("v-uni-text",{staticClass:"ml-4 mr-2"},[t._v("播放全部")]),n("v-uni-text",{staticStyle:{color:"#bba8a8","font-size":"24upx"}},[t._v("共 (10) 首")])],1)],1),n("v-uni-view",t._l(t.singerModel.hotSongs,(function(e,i){return n("v-uni-view",{staticClass:"d-flex align-center"},[n("v-uni-text",{staticClass:"p-5"},[t._v(t._s(i+1))]),n("v-uni-view",{staticClass:"d-flex flex-column justify-around flex-1 pt-3 pb-3",staticStyle:{"border-bottom":"2upx solid #e4e4e4"}},[n("v-uni-text",{staticStyle:{"font-size":"32upx"}},[t._v(t._s(e.name))]),n("v-uni-text",{staticClass:"mt-2",staticStyle:{"font-size":"24upx",color:"#bba8a8"}},[t._v(t._s(t.musicName(e)))])],1)],1)})),1)],1)],1):t._e(),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.scrollTop>=295,expression:"scrollTop>=295"}],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleToTop.apply(void 0,arguments)}}},[n("u-back-top",{attrs:{"scroll-top":t.scrollTop,top:"495"}})],1)],1)],1)},o=[]},f3a2:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{},[n("v-uni-view",{staticClass:"u-sticky-wrap",class:[t.elClass],style:{height:t.fixed?t.height+"px":"auto",backgroundColor:t.bgColor}},[n("v-uni-view",{staticClass:"u-sticky",style:{position:t.fixed?"fixed":"static",top:t.stickyTop+"px",left:t.left+"px",width:"auto"==t.width?"auto":t.width+"px",zIndex:t.uZIndex}},[t._t("default")],2)],1)],1)},o=[]},fe84:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uIcon:n("a623").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-image",style:[t.wrapStyle,t.backgroundStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.isError?t._e():n("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)},attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad,"show-menu-by-longpress":t.showMenuByLongpress},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrorHandler.apply(void 0,arguments)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadHandler.apply(void 0,arguments)}}}),t.showLoading&&t.loading?n("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius),backgroundColor:this.bgColor}},[t.$slots.loading?t._t("loading"):n("u-icon",{attrs:{name:t.loadingIcon,width:t.width,height:t.height}})],2):t._e(),t.showError&&t.isError&&!t.loading?n("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)}},[t.$slots.error?t._t("error"):n("u-icon",{attrs:{name:t.errorIcon,width:t.width,height:t.height}})],2):t._e()],1)},o=[]}}]);