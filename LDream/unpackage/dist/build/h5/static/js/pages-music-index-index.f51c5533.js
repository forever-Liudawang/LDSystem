(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-music-index-index","pages-music-RankingList-RankingList"],{"07af":function(t,e,n){"use strict";n.r(e);var i=n("1a2d"),r=n("aba0");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("6083");var o,s=n("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"12bc3d2c",null,!1,i["a"],o);e["default"]=c.exports},"09f1":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(n("b5a7")),i(n("d47d"));var r=i(n("2c62")),a=i(n("6beb")),o=i(n("776f")),s=i(n("a677")),c={components:{Recommend:r.default,Singer:a.default,RankingList:o.default,MusicPlay:s.default},data:function(){return{bannerList:[],recommendList:null,list:[{name:"推荐"},{name:"歌手"},{name:"排行榜"}],current:0,swiperCurrent:0}},computed:{playCount:function(){return function(t){return(t/1e4).toFixed(2)}}},mounted:function(){},methods:{handleSelect:function(t){this.curCate=t},handleToDetail:function(t){uni.navigateTo({url:"/pages/music/Detail/Detail?id="+t.id,animationType:"pop-in",fail:function(t){console.log(t)}})},tabsChange:function(t){this.swiperCurrent=t},transition:function(t){var e=t.detail.dx;this.$refs.uTabs.setDx(e)},animationfinish:function(t){var e=t.detail.current;this.$refs.uTabs.setFinishCurrent(e),this.swiperCurrent=e,this.current=e},loadMoreRecommend:function(){this.$refs.recommend.pageIndex++,this.$refs.recommend.handleGetRecomendList(),console.log(this.$refs.recommend)},onreachBottom:function(){console.log(1222)}}};e.default=c},"13bb":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view")},a=[]},"1a2d":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uTabsSwiper:n("4bdf").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"music"},[n("v-uni-view",[n("u-tabs-swiper",{ref:"uTabs",staticStyle:{"background-color":"#d81e06","font-weight":"bold"},attrs:{"font-size":"36","active-color":"#fff","inactive-color":"#fff",list:t.list,current:t.current,"is-scroll":!1,swiperWidth:"750"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.tabsChange.apply(void 0,arguments)}}})],1),n("v-uni-swiper",{staticClass:"flex-1",attrs:{current:t.swiperCurrent},on:{transition:function(e){arguments[0]=e=t.$handleEvent(e),t.transition.apply(void 0,arguments)},animationfinish:function(e){arguments[0]=e=t.$handleEvent(e),t.animationfinish.apply(void 0,arguments)}}},[n("v-uni-swiper-item",{staticClass:"swiper-item h-full"},[n("v-uni-scroll-view",{staticClass:"h-full",staticStyle:{width:"100%"},attrs:{"scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMoreRecommend.apply(void 0,arguments)}}},[n("Recommend",{ref:"recommend"})],1)],1),n("v-uni-swiper-item",{staticClass:"swiper-item h-full"},[n("v-uni-scroll-view",{staticClass:"h-full",staticStyle:{width:"100%"},attrs:{"scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.onreachBottom.apply(void 0,arguments)}}},[n("Singer")],1)],1),n("v-uni-swiper-item",{staticClass:"swiper-item h-full"},[n("v-uni-scroll-view",{staticClass:"h-full",staticStyle:{width:"100%"},attrs:{"scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.onreachBottom.apply(void 0,arguments)}}},[n("RankingList")],1)],1)],1),n("v-uni-view",{},[n("MusicPlay")],1)],1)},a=[]},"21f6":function(t,e,n){"use strict";var i=n("4ea4");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("2909"));n("96cf");var a=i(n("1da1")),o=i(n("c7be")),s=i(n("d47d")),c={data:function(){return{sexList:[{label:"全部",id:-1},{label:"男歌手",id:1},{label:"女歌手",id:2},{label:"乐队",id:3}],curSex:{label:"全部",id:-1},character:o.default,curCharacter:{key:"",name:""},regionList:[{label:"全部",id:-1},{label:"华语",id:7},{label:"欧美",id:96},{label:"日本",id:8},{label:"韩国",id:16},{label:"其他",id:0}],curRegion:{label:"全部",id:-1},singerList:[],page:0,listPage:0}},mounted:function(){this.handleGetHotSinger()},methods:{handleChangeSex:function(t){t.id!=this.curSex.id&&(this.listPage=0,this.curSex=t,this.singerList=[],this.handGetSingerList())},handleChangeCharacter:function(t){t.key!=this.curCharacter.key&&(this.listPage=0,this.curCharacter=t,this.singerList=[],this.handGetSingerList())},handleChangeRegion:function(t){t.id!=this.curRegion.id&&(this.listPage=0,this.curRegion=t,this.singerList=[],this.handGetSingerList())},handleGetHotSinger:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showLoading({title:"加载中"}),e.next=3,t.$http({url:"/music/getHotSinger",method:"get",data:{offset:t.page}});case 3:n=e.sent,(0,s.default)(n,(function(e){t.singerList=[].concat((0,r.default)(t.singerList),(0,r.default)(e)),uni.hideLoading()}));case 5:case"end":return e.stop()}}),e)})))()},handleToDetail:function(t){uni.navigateTo({url:"/pages/music/SingerDetail/SingerDetail?id="+t.id,animationType:"pop-in",fail:function(t){console.log(t)}})},loadMore:function(){-1!=this.curRegion.id||this.curCharacter.key||-1!=this.curSex.id?(this.listPage++,this.handGetSingerList()):(this.page++,this.handleGetHotSinger())},handGetSingerList:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showLoading({title:"加载中"}),n={page:t.listPage,type:t.curSex.id,area:t.curRegion.id,initial:t.curCharacter.key.toLowerCase()},e.next=4,t.$http({url:"/music/getSingerList",method:"get",data:n});case 4:i=e.sent,(0,s.default)(i,(function(e){console.log(e),t.singerList=[].concat((0,r.default)(t.singerList),(0,r.default)(e)),uni.hideLoading()}));case 6:case"end":return e.stop()}}),e)})))()}}};e.default=c},"23a6":function(t,e,n){"use strict";n.r(e);var i=n("9203"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"256a":function(t,e,n){var i=n("793a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("2a8a8d30",i,!0,{sourceMap:!1,shadowMode:!1})},"2dd6":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uLazyLoad:n("85da").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"singer w-full"},[n("v-uni-view",{staticClass:"pt-4 w-full"},[n("v-uni-view",{staticClass:"d-flex sex"},[n("v-uni-text",{staticStyle:{color:"grey"}},[t._v("分类:")]),n("v-uni-view",{staticClass:"ml-2"},t._l(t.sexList,(function(e){return n("v-uni-text",{class:["ml-3","item",{active:e.id==t.curSex.id}],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleChangeSex(e)}}},[t._v(t._s(e.label))])})),1)],1)],1),n("v-uni-view",{staticClass:"pt-4 character w-full"},[n("v-uni-view",{staticClass:"d-flex character align-center w-full"},[n("v-uni-view",{staticStyle:{color:"grey","white-space":"nowrap",width:"14%"}},[t._v("首字母:")]),n("v-uni-view",{staticStyle:{width:"86%"}},[n("v-uni-scroll-view",{staticClass:"w-full",attrs:{"scroll-x":"true"}},[n("v-uni-view",{staticStyle:{height:"60upx","line-height":"60upx"}},t._l(t.character,(function(e){return n("v-uni-text",{class:["item",{active:e.key==t.curCharacter.key}],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleChangeCharacter(e)}}},[t._v(t._s(e.name))])})),1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"pt-4 region w-full"},[n("v-uni-view",{staticClass:"d-flex character align-center w-full"},[n("v-uni-view",{staticStyle:{color:"grey","white-space":"nowrap"}},[t._v("地区:")]),n("v-uni-view",[n("v-uni-scroll-view",{staticClass:"w-full",attrs:{"scroll-x":"true"}},[n("v-uni-view",{staticClass:"ml-3",staticStyle:{height:"60upx","line-height":"60upx"}},t._l(t.regionList,(function(e){return n("v-uni-text",{class:["item",{active:e.id==t.curRegion.id}],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleChangeRegion(e)}}},[t._v(t._s(e.label))])})),1)],1)],1)],1)],1),n("v-uni-scroll-view",{staticClass:"flex-1",staticStyle:{height:"calc(100% - 250upx)"},attrs:{"scroll-y":"true"},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},t._l(t.singerList,(function(e,i){return n("v-uni-view",{staticClass:"d-flex align-center pb-2 mt-2",staticStyle:{"border-bottom":"2upx solid #eeeeee"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleToDetail(e)}}},[n("u-lazy-load",{attrs:{"img-mode":"heightFix",image:e.picUrl+"?param=250x300",height:"100upx",width:"100upx","border-radius":"6"}}),n("v-uni-text",{staticClass:"ml-4"},[t._v(t._s(e.name))])],1)})),1)],1)},a=[]},"4bdf":function(t,e,n){"use strict";n.r(e);var i=n("9a56"),r=n("23a6");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("7755");var o,s=n("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"a632e85e",null,!1,i["a"],o);e["default"]=c.exports},"545f":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-uni-view",{staticClass:"u-badge",class:[t.isDot?"u-badge-dot":"","mini"==t.size?"u-badge-mini":"",t.type?"u-badge--bg--"+t.type:""],style:[{top:t.offset[0]+"rpx",right:t.offset[1]+"rpx",fontSize:t.fontSize+"rpx",position:t.absolute?"absolute":"static",color:t.color,backgroundColor:t.bgColor},t.boxStyle]},[t._v(t._s(t.showText))]):t._e()},a=[]},"5d15":function(t,e,n){"use strict";var i=n("6d92"),r=n.n(i);r.a},6083:function(t,e,n){"use strict";var i=n("256a"),r=n.n(i);r.a},"6beb":function(t,e,n){"use strict";n.r(e);var i=n("2dd6"),r=n("a402");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("c144");var o,s=n("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"54dadf8e",null,!1,i["a"],o);e["default"]=c.exports},"6d92":function(t,e,n){var i=n("9b5f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("d6d95948",i,!0,{sourceMap:!1,shadowMode:!1})},7755:function(t,e,n){"use strict";var i=n("e6eb"),r=n.n(i);r.a},"776f":function(t,e,n){"use strict";n.r(e);var i=n("13bb"),r=n("c008");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var o,s=n("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"24b4c8af",null,!1,i["a"],o);e["default"]=c.exports},"793a":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.music[data-v-12bc3d2c]{padding-top:0;height:100%;display:flex;flex-direction:column}.music .header[data-v-12bc3d2c]{height:8%;width:100%;background:#d81e06;display:flex;justify-content:space-around;align-items:center;color:#fff;font-size:%?30?%;font-weight:700}.music .header .cate[data-v-12bc3d2c]{border-bottom:%?4?% solid transparent}.music .header .active[data-v-12bc3d2c]{border-bottom:%?4?% solid #fff}.music .content[data-v-12bc3d2c]{flex:1;overflow:auto}.music .content .listBox[data-v-12bc3d2c]{padding:%?10?% %?6?%}.music .content .listBox .title[data-v-12bc3d2c]{font-size:%?32?%;font-weight:700}.music .content .listBox .desc[data-v-12bc3d2c]{overflow:hidden;margin-top:2px;padding:0 2px;height:50px;text-align:left;font-size:%?24?%;line-height:1.4;color:#2e3030}.music .content .listBox .item[data-v-12bc3d2c]{position:relative}.music .content .listBox .listen[data-v-12bc3d2c]{position:absolute;top:%?4?%;right:%?10?%;color:#e7e7e7}',""]),t.exports=e},8739:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.singer[data-v-54dadf8e]{padding:%?6?%;height:100%;display:flex;flex-direction:column}.singer .sex .item[data-v-54dadf8e], .singer .character .item[data-v-54dadf8e], .singer .region .item[data-v-54dadf8e]{padding:%?8?% %?12?%;border:%?2?% solid transparent}.singer .sex .active[data-v-54dadf8e], .singer .character .active[data-v-54dadf8e], .singer .region .active[data-v-54dadf8e]{color:#d81e06;border:%?2?% solid #d81e06;border-radius:%?16?%}',""]),t.exports=e},9203:function(t,e,n){"use strict";var i=n("4ea4");n("d81d"),n("a9e3"),n("d3b7"),n("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=i(n("1da1")),a=i(n("cafd")),o=a.default,s=uni.getSystemInfoSync(),c=s.windowWidth,u="UEl_",l={name:"u-tabs-swiper",props:{isScroll:{type:Boolean,default:!0},list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},height:{type:[Number,String],default:80},fontSize:{type:[Number,String],default:30},swiperWidth:{type:[String,Number],default:750},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#303133"},barWidth:{type:[Number,String],default:40},barHeight:{type:[Number,String],default:6},gutter:{type:[Number,String],default:40},zIndex:{type:[Number,String],default:1},bgColor:{type:String,default:"#ffffff"},autoCenterMode:{type:String,default:"window"},name:{type:String,default:"name"},count:{type:String,default:"count"},offset:{type:Array,default:function(){return[5,20]}},bold:{type:Boolean,default:!0},activeItemStyle:{type:Object,default:function(){return{}}},showBar:{type:Boolean,default:!0},barStyle:{type:Object,default:function(){return{}}}},data:function(){return{scrollLeft:0,tabQueryInfo:[],windowWidth:0,animationFinishCurrent:this.current,componentsWidth:0,line3AddDx:0,line3Dx:0,preId:u,sW:0,tabsInfo:[],colorGradientArr:[],colorStep:100}},computed:{getCurrent:function(){var t=Number(this.current);return t>this.getTabs.length-1?this.getTabs.length-1:t<0?0:t},getTabs:function(){return this.list},scrollBarLeft:function(){return Number(this.line3Dx)+Number(this.line3AddDx)},barWidthPx:function(){return uni.upx2px(this.barWidth)},tabItemStyle:function(){var t=this;return function(e){var n={height:t.height+"rpx",lineHeight:t.height+"rpx",padding:"0 ".concat(t.gutter/2,"rpx"),color:t.tabsInfo.length>0?t.tabsInfo[e]?t.tabsInfo[e].color:t.activeColor:t.inactiveColor,fontSize:t.fontSize+"rpx",zIndex:t.zIndex+2,fontWeight:e==t.getCurrent&&t.bold?"bold":"normal"};return e==t.getCurrent&&(n=Object.assign(n,t.activeItemStyle)),n}},tabBarStyle:function(){var t={width:this.barWidthPx+"px",height:this.barHeight+"rpx",borderRadius:"100px",backgroundColor:this.activeColor,left:this.scrollBarLeft+"px"};return Object.assign(t,this.barStyle)}},watch:{current:function(t,e){this.change(t),this.setFinishCurrent(t)},list:function(){var t=this;this.$nextTick((function(){t.init()}))}},mounted:function(){this.init()},methods:{init:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.countPx(),e.next=3,t.getTabsInfo();case 3:t.countLine3Dx(),t.getQuery((function(){t.setScrollViewToCenter()})),t.colorGradientArr=o.colorGradient(t.inactiveColor,t.activeColor,t.colorStep);case 6:case"end":return e.stop()}}),e)})))()},getTabsInfo:function(){var t=this;return new Promise((function(e,n){for(var i=uni.createSelectorQuery().in(t),r=0;r<t.list.length;r++)i.select("."+u+r).boundingClientRect();i.exec((function(n){for(var i=[],r=0;r<n.length;r++)n[r].color=t.inactiveColor,r==t.getCurrent&&(n[r].color=t.activeColor),i.push(n[r]);t.tabsInfo=i,e()}))}))},countLine3Dx:function(){var t=this.tabsInfo[this.animationFinishCurrent];t&&(this.line3Dx=t.left+t.width/2-this.barWidthPx/2-this.tabsInfo[0].left)},countPx:function(){this.sW=uni.upx2px(Number(this.swiperWidth))},emit:function(t){this.$emit("change",t)},change:function(){this.setScrollViewToCenter()},getQuery:function(t){var e=this;try{var n=uni.createSelectorQuery().in(this).select(".u-tabs");n.fields({size:!0},(function(n){n?(e.componentsWidth=n.width,t&&"function"===typeof t&&t(n)):e.getQuery(t)})).exec()}catch(i){this.componentsWidth=c}},setScrollViewToCenter:function(){var t;if(t=this.tabsInfo[this.animationFinishCurrent],t){var e,n=t.left+t.width/2;e="window"===this.autoCenterMode?c:this.componentsWidth,this.scrollLeft=n-e/2}},setDx:function(t){var e=t>0?this.animationFinishCurrent+1:this.animationFinishCurrent-1;e=e<=0?0:e,e=e>=this.list.length?this.list.length-1:e;this.tabsInfo[e];var n=this.tabsInfo[this.animationFinishCurrent],i=n.left+n.width/2,r=this.tabsInfo[e],a=r.left+r.width/2,o=Math.abs(a-i);this.line3AddDx=t/this.sW*o,this.setTabColor(this.animationFinishCurrent,e,t)},setTabColor:function(t,e,n){var i=Math.abs(Math.ceil(n/this.sW*100)),r=this.colorGradientArr.length;i=i>=r?r-1:i<=0?0:i,this.tabsInfo[e].color=this.colorGradientArr[i],this.tabsInfo[t].color=this.colorGradientArr[r-1-i]},setFinishCurrent:function(t){var e=this;this.tabsInfo.map((function(n,i){return n.color=t==i?e.activeColor:e.inactiveColor,n})),this.line3AddDx=0,this.animationFinishCurrent=t,this.countLine3Dx()}}};e.default=l},9375:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-a632e85e],\r\nuni-scroll-view[data-v-a632e85e]{box-sizing:border-box}.u-tabs[data-v-a632e85e]{width:100%;transition-property:background-color,color}[data-v-a632e85e]::-webkit-scrollbar,[data-v-a632e85e]::-webkit-scrollbar,[data-v-a632e85e]::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}uni-scroll-view[data-v-a632e85e]  ::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.u-scroll-view[data-v-a632e85e]{width:100%;white-space:nowrap;position:relative}.u-tabs-scroll-box[data-v-a632e85e]{position:relative}.u-tabs-scorll-flex[data-v-a632e85e]{display:flex;flex-direction:row;justify-content:space-between}.u-tabs-scorll-flex .u-tabs-item[data-v-a632e85e]{flex:1}.u-tabs-item[data-v-a632e85e]{position:relative;display:inline-block;text-align:center;transition-property:background-color,color,font-weight}.content[data-v-a632e85e]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.boxStyle[data-v-a632e85e]{pointer-events:none;position:absolute;transition-property:all}.boxStyle2[data-v-a632e85e]{pointer-events:none;position:absolute;bottom:0;transition-property:all;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.itemBackgroundBox[data-v-a632e85e]{pointer-events:none;position:absolute;top:0;transition-property:left,background-color;display:flex;flex-direction:row;flex-direction:row;justify-content:center;align-items:center}.itemBackground[data-v-a632e85e]{height:100%;width:100%;transition-property:all}.u-scroll-bar[data-v-a632e85e]{position:absolute;bottom:%?4?%}',""]),t.exports=e},"98c2":function(t,e,n){var i=n("8739");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("9efa891a",i,!0,{sourceMap:!1,shadowMode:!1})},"9a56":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uBadge:n("c82e").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-tabs",style:{zIndex:t.zIndex,background:t.bgColor}},[n("v-uni-scroll-view",{staticClass:"u-scroll-view",style:{zIndex:t.zIndex+1},attrs:{"scroll-x":!0,"scroll-left":t.scrollLeft,"scroll-with-animation":!0}},[n("v-uni-view",{staticClass:"u-tabs-scroll-box",class:{"u-tabs-scorll-flex":!t.isScroll}},[t._l(t.getTabs,(function(e,i){return n("v-uni-view",{key:i,staticClass:"u-tabs-item",class:[t.preId+i],style:[t.tabItemStyle(i)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.emit(i)}}},[n("u-badge",{attrs:{count:e[t.count]||e["count"]||0,offset:t.offset,size:"mini"}}),t._v(t._s(e[t.name]||e["name"]))],1)})),t.showBar?n("v-uni-view",{staticClass:"u-scroll-bar",style:[t.tabBarStyle]}):t._e()],2)],1)],1)},a=[]},"9b5f":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-badge[data-v-2aee38b6]{display:inline-flex;justify-content:center;align-items:center;line-height:%?24?%;padding:%?4?% %?8?%;border-radius:%?100?%;z-index:9}.u-badge--bg--primary[data-v-2aee38b6]{background-color:#2979ff}.u-badge--bg--error[data-v-2aee38b6]{background-color:#fa3534}.u-badge--bg--success[data-v-2aee38b6]{background-color:#19be6b}.u-badge--bg--info[data-v-2aee38b6]{background-color:#909399}.u-badge--bg--warning[data-v-2aee38b6]{background-color:#f90}.u-badge-dot[data-v-2aee38b6]{height:%?16?%;width:%?16?%;border-radius:%?100?%;line-height:1}.u-badge-mini[data-v-2aee38b6]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}.u-info[data-v-2aee38b6]{background-color:#909399;color:#fff}',""]),t.exports=e},a402:function(t,e,n){"use strict";n.r(e);var i=n("21f6"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},aba0:function(t,e,n){"use strict";n.r(e);var i=n("09f1"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},b268:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},methods:{}};e.default=i},bb9e:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-badge",props:{type:{type:String,default:"error"},size:{type:String,default:"default"},isDot:{type:Boolean,default:!1},count:{type:[Number,String]},overflowCount:{type:Number,default:99},showZero:{type:Boolean,default:!1},offset:{type:Array,default:function(){return[20,20]}},absolute:{type:Boolean,default:!0},fontSize:{type:[String,Number],default:"24"},color:{type:String,default:"#ffffff"},bgColor:{type:String,default:""},isCenter:{type:Boolean,default:!1}},computed:{boxStyle:function(){var t={};return this.isCenter?(t.top=0,t.right=0,t.transform="translateY(-50%) translateX(50%)"):(t.top=this.offset[0]+"rpx",t.right=this.offset[1]+"rpx",t.transform="translateY(0) translateX(0)"),"mini"==this.size&&(t.transform=t.transform+" scale(0.8)"),t},showText:function(){return this.isDot?"":this.count>this.overflowCount?"".concat(this.overflowCount,"+"):this.count},show:function(){return 0!=this.count||0!=this.showZero}}};e.default=i},c008:function(t,e,n){"use strict";n.r(e);var i=n("b268"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},c144:function(t,e,n){"use strict";var i=n("98c2"),r=n.n(i);r.a},c7be:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=[{key:"A",name:"A"},{key:"B",name:"B"},{key:"C",name:"C"},{key:"D",name:"D"},{key:"E",name:"E"},{key:"F",name:"F"},{key:"G",name:"G"},{key:"H",name:"H"},{key:"I",name:"I"},{key:"J",name:"J"},{key:"K",name:"K"},{key:"L",name:"L"},{key:"M",name:"M"},{key:"N",name:"N"},{key:"O",name:"O"},{key:"P",name:"P"},{key:"Q",name:"Q"},{key:"R",name:"R"},{key:"S",name:"S"},{key:"T",name:"T"},{key:"U",name:"U"},{key:"V",name:"V"},{key:"W",name:"W"},{key:"X",name:"X"},{key:"Y",name:"Y"},{key:"Z",name:"Z"}];e.default=i},c82e:function(t,e,n){"use strict";n.r(e);var i=n("545f"),r=n("cb31");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("5d15");var o,s=n("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"2aee38b6",null,!1,i["a"],o);e["default"]=c.exports},cb31:function(t,e,n){"use strict";n.r(e);var i=n("bb9e"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},e6eb:function(t,e,n){var i=n("9375");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("314ee6ef",i,!0,{sourceMap:!1,shadowMode:!1})}}]);