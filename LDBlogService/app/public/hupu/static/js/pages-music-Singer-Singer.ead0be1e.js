(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-music-Singer-Singer"],{"14bd":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"u-wrap",class:"u-lazy-item-"+e.elIndex,style:{opacity:Number(e.opacity),borderRadius:e.borderRadius+"rpx",transition:"opacity "+e.time/1e3+"s ease-in-out"}},[i("v-uni-view",{class:"u-lazy-item-"+e.elIndex},[e.isError?i("v-uni-image",{staticClass:"u-lazy-item error",style:{borderRadius:e.borderRadius+"rpx",height:e.imgHeight},attrs:{src:e.errorImg,mode:e.imgMode},on:{load:function(t){arguments[0]=t=e.$handleEvent(t),e.errorImgLoaded.apply(void 0,arguments)},click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickImg.apply(void 0,arguments)}}}):i("v-uni-image",{staticClass:"u-lazy-item",style:{borderRadius:e.borderRadius+"rpx",height:e.imgHeight},attrs:{src:e.isShow?e.image:e.loadingImg,mode:e.imgMode},on:{load:function(t){arguments[0]=t=e.$handleEvent(t),e.imgLoaded.apply(void 0,arguments)},error:function(t){arguments[0]=t=e.$handleEvent(t),e.loadError.apply(void 0,arguments)},click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickImg.apply(void 0,arguments)}}})],1)],1)},a=[]},"21f6":function(e,t,i){"use strict";var n=i("4ea4");i("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i("2909"));i("96cf");var a=n(i("1da1")),A=n(i("c7be")),s=n(i("d47d")),u={data:function(){return{sexList:[{label:"全部",id:-1},{label:"男歌手",id:1},{label:"女歌手",id:2},{label:"乐队",id:3}],curSex:{label:"全部",id:-1},character:A.default,curCharacter:{key:"",name:""},regionList:[{label:"全部",id:-1},{label:"华语",id:7},{label:"欧美",id:96},{label:"日本",id:8},{label:"韩国",id:16},{label:"其他",id:0}],curRegion:{label:"全部",id:-1},singerList:[],page:0,listPage:0}},mounted:function(){this.handleGetHotSinger()},methods:{handleChangeSex:function(e){e.id!=this.curSex.id&&(this.listPage=0,this.curSex=e,this.singerList=[],this.handGetSingerList())},handleChangeCharacter:function(e){e.key!=this.curCharacter.key&&(this.listPage=0,this.curCharacter=e,this.singerList=[],this.handGetSingerList())},handleChangeRegion:function(e){e.id!=this.curRegion.id&&(this.listPage=0,this.curRegion=e,this.singerList=[],this.handGetSingerList())},handleGetHotSinger:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return uni.showLoading({title:"加载中"}),t.next=3,e.$http({url:"/music/getHotSinger",method:"get",data:{offset:e.page}});case 3:i=t.sent,(0,s.default)(i,(function(t){e.singerList=[].concat((0,r.default)(e.singerList),(0,r.default)(t)),uni.hideLoading()}));case 5:case"end":return t.stop()}}),t)})))()},handleToDetail:function(e){uni.navigateTo({url:"/pages/music/SingerDetail/SingerDetail?id="+e.id,animationType:"pop-in",fail:function(e){console.log(e)}})},loadMore:function(){-1!=this.curRegion.id||this.curCharacter.key||-1!=this.curSex.id?(this.listPage++,this.handGetSingerList()):(this.page++,this.handleGetHotSinger())},handGetSingerList:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return uni.showLoading({title:"加载中"}),i={page:e.listPage,type:e.curSex.id,area:e.curRegion.id,initial:e.curCharacter.key.toLowerCase()},t.next=4,e.$http({url:"/music/getSingerList",method:"get",data:i});case 4:n=t.sent,(0,s.default)(n,(function(t){console.log(t),e.singerList=[].concat((0,r.default)(e.singerList),(0,r.default)(t)),uni.hideLoading()}));case 6:case"end":return t.stop()}}),t)})))()}}};t.default=u},2909:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var n=s(i("6005")),r=s(i("db90")),a=s(i("06c5")),A=s(i("3427"));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){return(0,n.default)(e)||(0,r.default)(e)||(0,a.default)(e)||(0,A.default)()}},"2dd6":function(e,t,i){"use strict";i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var n={uLazyLoad:i("85da").default},r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"singer w-full"},[i("v-uni-view",{staticClass:"pt-4 w-full"},[i("v-uni-view",{staticClass:"d-flex sex"},[i("v-uni-text",{staticStyle:{color:"grey"}},[e._v("分类:")]),i("v-uni-view",{staticClass:"ml-2"},e._l(e.sexList,(function(t){return i("v-uni-text",{class:["ml-3","item",{active:t.id==e.curSex.id}],on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.handleChangeSex(t)}}},[e._v(e._s(t.label))])})),1)],1)],1),i("v-uni-view",{staticClass:"pt-4 character w-full"},[i("v-uni-view",{staticClass:"d-flex character align-center w-full"},[i("v-uni-view",{staticStyle:{color:"grey","white-space":"nowrap",width:"14%"}},[e._v("首字母:")]),i("v-uni-view",{staticStyle:{width:"86%"}},[i("v-uni-scroll-view",{staticClass:"w-full",attrs:{"scroll-x":"true"}},[i("v-uni-view",{staticStyle:{height:"60upx","line-height":"60upx"}},e._l(e.character,(function(t){return i("v-uni-text",{class:["item",{active:t.key==e.curCharacter.key}],on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.handleChangeCharacter(t)}}},[e._v(e._s(t.name))])})),1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"pt-4 region w-full"},[i("v-uni-view",{staticClass:"d-flex character align-center w-full"},[i("v-uni-view",{staticStyle:{color:"grey","white-space":"nowrap"}},[e._v("地区:")]),i("v-uni-view",[i("v-uni-scroll-view",{staticClass:"w-full",attrs:{"scroll-x":"true"}},[i("v-uni-view",{staticClass:"ml-3",staticStyle:{height:"60upx","line-height":"60upx"}},e._l(e.regionList,(function(t){return i("v-uni-text",{class:["item",{active:t.id==e.curRegion.id}],on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.handleChangeRegion(t)}}},[e._v(e._s(t.label))])})),1)],1)],1)],1)],1),i("v-uni-scroll-view",{staticClass:"flex-1",staticStyle:{height:"calc(100% - 250upx)"},attrs:{"scroll-y":"true"},on:{scrolltolower:function(t){arguments[0]=t=e.$handleEvent(t),e.loadMore.apply(void 0,arguments)}}},e._l(e.singerList,(function(t,n){return i("v-uni-view",{staticClass:"d-flex align-center pb-2 mt-2",staticStyle:{"border-bottom":"2upx solid #eeeeee"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.handleToDetail(t)}}},[i("u-lazy-load",{attrs:{"img-mode":"heightFix",image:t.picUrl+"?param=250x300",height:"100upx",width:"100upx","border-radius":"6"}}),i("v-uni-text",{staticClass:"ml-4"},[e._v(e._s(t.name))])],1)})),1)],1)},a=[]},3427:function(e,t,i){"use strict";function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},"3c6b":function(e,t,i){var n=i("d35c");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("eaf2e242",n,!0,{sourceMap:!1,shadowMode:!1})},"4a99":function(e,t,i){"use strict";i.r(t);var n=i("56d0"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"56d0":function(e,t,i){"use strict";i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"u-lazy-load",props:{index:{type:[Number,String]},image:{type:String,default:""},imgMode:{type:String,default:"widthFix"},loadingImg:{type:String,default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUM0QjNBQjkyQUQ2MTFFQTlCNUQ4RTIzNDE5RUIxNjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUM0QjNBQkEyQUQ2MTFFQTlCNUQ4RTIzNDE5RUIxNjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5QzRCM0FCNzJBRDYxMUVBOUI1RDhFMjM0MTlFQjE2NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5QzRCM0FCODJBRDYxMUVBOUI1RDhFMjM0MTlFQjE2NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtRHfPcAAAAzUExURZWVldfX18PDw62trZubm9zc3Li4uKGhoebm5tLS0uHh4c3Nzaenp729vcjIyLKysuvr6141L40AAAcXSURBVHja7NzZlqpGAEBR5lG0//9rIw7IJKJi4or7PGTdtN10wr5SVAEGf/qqArsAiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAg+nmQFMi5Jis+sIniED23jSzIgLTtg2D//iYme/8QBM/9lQ+CAEhbNLM3N9hEHAThX7GPCiBfAxK1b51kD+R7QMLjXg7iCsgWIPUh7pfVozG791oeBPngm48G583uW5GkBvI+SBaM2xXDn1oqum423bX/mgF5FySc2cv93Voug9TdZotsggnkBZB2NzbhrSY5HnoG07jei8dvzsJB/c3W60SALILE46+WCztsbhPR7R2VJq0ukEcT49nyy8QhaKcRa3fYHZD4+ufqOJAcgDz8/59vtw1I3QP5K6JsOG0vm3hce4I8LQp/BaRZGJC3AAn7IKOKXbC+7EdA5vdmmVwOLksgRThqOqiH4XEGsht+peoPUE8U/jJIO5OLH4GEwUslV5G0PTBG5Uiw/Y2jyigO3l9HAHKv9PYb82LloH74dZBoBUgar+l48NsNvtD0fkez9iwrAvIYZDRCl+Xs149Hm/KZmQ+QjUCiO1ei4ru7EsgnQYrkznlQb7thCuRfAzlOAPN72427P4VA/i2Q/DKT/Ls/VR8fvIBsDZIuz7TPF6TCbnk4GJkB2RokejTjuE7/unlgCuSTIO0Cy+Plp6vDfnQlBchy8QtjSHVd3EgmK1bHLm+H6+nXYbz2DuQRSPnqoL7vvq0u70on4zvxgCyWD3b9UyDVdW24PaWaiGTnFZJwPIQAebDpIKheBIm7n124ZthMJipAlkqHO+IZkP1tbfzOJark/A7MgKyvvl60fRqkvXfhuow+t9+q00+0/yyBrK8ZngOtBzldhw2X9tvpNGty0gvkmbPeJ0Cy/r09s/stbmfo0yMWkEdjevgKyOn2t2pxv7UXoibTdCDLje9/Ww1ymqzn87dbp92242ZmMRjI8hASvwKSLq4udqN6ksw8nxXN3tszD9L8Gkg+2mFrQYql5az4tvFj5xOx4VwnSdeBtGdyPwUytxK77pBVlNHdO7OK3rh/eTPUvdutT3fO52tuHMqD4N7llv8pyOQQ//w19YVDfX27+Sfuby9/6nau4pdA8vEdOZuChEH/quHt0Jg+IRJ/5+PrHwKZXfjbDiS73Zo7mu5UkzX7uTsXe0e/7nC3ePf1O69+BUg2XDfZCqSqOu7rGVf8cHBe8zhC2b61dtUHXv0OkGo6ZL4JkpbRYXdUaFevivx2M/1GIOctNh949TtAoumQ+TpIHMX54CJu+8BDd8FkE5BqcZh/59XvAClmTvKfB0nDqIlHo3T70SftyW1eX9dXtgQJqs1f/Q6QaOa/7wmQKtxH8eiGoCRuovODIO3VxOMmruZbHrLyD7z6DSDtGyT7ew1kf9hNn07c986JTovzzem0Id9wUG+Vk/IDr34DSNR7huZJkMFT6vEhqrPx/j5cnlZML8N6/PAzh9Y99Flm5Yde/c9BquDOkvkKkMP58dA4qi9vivE8JOvGz/j8FokfPpr288+pH2ZPOZrLmeGD+7KOh6dqYWJ48ki7yUg0tz0go/fv/LLddfV3sgOLJyaGPY/zrSlh1a36Arkzoue9CyG35ze6E6/dzO2Ga0EGHqdRJIkfn9/8OEjTW8Vq91ZWh39FeehWA7Nu9ft8CpUEk1WWOyDF0OPyEU2Pnzf/bZC0P6IPzmAvu7KauQBVrgKpJ0tG2arHzX8e5Pb3PezNs/PrX+3JMyCLn9XXf37tPFHvt09WfCDDjx+yyn1/p1V11j7GnB/q3leLuVva79S/tzed+db08YpF4uOZtmz/9oXWMq6BCAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiAALELvqt/BBgACqVeUBXxcCkAAAAASUVORK5CYII="},errorImg:{type:String,default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODdDMjhENDYyQUQ2MTFFQTlDQ0VBODgxQjFFOEEyMEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODdDMjhENDcyQUQ2MTFFQTlDQ0VBODgxQjFFOEEyMEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4N0MyOEQ0NDJBRDYxMUVBOUNDRUE4ODFCMUU4QTIwQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4N0MyOEQ0NTJBRDYxMUVBOUNDRUE4ODFCMUU4QTIwQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhLwhikAAAAzUExURZWVldfX162t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"},threshold:{type:[Number,String],default:100},duration:{type:[Number,String],default:500},effect:{type:String,default:"ease-in-out"},isEffect:{type:Boolean,default:!0},borderRadius:{type:[Number,String],default:0},height:{type:[Number,String],default:"450"}},data:function(){return{isShow:!1,opacity:1,time:this.duration,loadStatus:"",isError:!1,elIndex:this.$u.guid()}},computed:{getThreshold:function(){var e=uni.upx2px(Math.abs(this.threshold));return this.threshold<0?-e:e},imgHeight:function(){return this.$u.addUnit(this.height)}},created:function(){this.observer={}},watch:{isShow:function(e){var t=this;this.isEffect&&(this.time=0,this.opacity=0,setTimeout((function(){t.time=t.duration,t.opacity=1}),30))},image:function(e){e?(this.init(),this.isError=!1):this.isError=!0}},methods:{init:function(){this.isError=!1,this.loadStatus=""},clickImg:function(){0==this.isShow||this.isError,this.$emit("click",this.index)},imgLoaded:function(){""==this.loadStatus?this.loadStatus="lazyed":"lazyed"==this.loadStatus&&(this.loadStatus="loaded",this.$emit("load",this.index))},errorImgLoaded:function(){this.$emit("error",this.index)},loadError:function(){this.isError=!0},disconnectObserver:function(e){var t=this[e];t&&t.disconnect()}},beforeDestroy:function(){},mounted:function(){var e=this;this.$nextTick((function(){uni.$once("uOnReachBottom",(function(){e.isShow||(e.isShow=!0)}))})),setTimeout((function(){e.disconnectObserver("contentObserver");var t=uni.createIntersectionObserver(e);t.relativeToViewport({bottom:e.getThreshold}).observe(".u-lazy-item-"+e.elIndex,(function(t){t.intersectionRatio>0&&(e.isShow=!0,e.disconnectObserver("contentObserver"))})),e.contentObserver=t}),30)}};t.default=n},6005:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var n=r(i("6b75"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e))return(0,n.default)(e)}},"6beb":function(e,t,i){"use strict";i.r(t);var n=i("2dd6"),r=i("a402");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("c144");var A,s=i("f0c5"),u=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"54dadf8e",null,!1,n["a"],A);t["default"]=u.exports},"85da":function(e,t,i){"use strict";i.r(t);var n=i("14bd"),r=i("4a99");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("cbc2");var A,s=i("f0c5"),u=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"79bed394",null,!1,n["a"],A);t["default"]=u.exports},8739:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.singer[data-v-54dadf8e]{padding:%?6?%;height:100%;display:flex;flex-direction:column}.singer .sex .item[data-v-54dadf8e], .singer .character .item[data-v-54dadf8e], .singer .region .item[data-v-54dadf8e]{padding:%?8?% %?12?%;border:%?2?% solid transparent}.singer .sex .active[data-v-54dadf8e], .singer .character .active[data-v-54dadf8e], .singer .region .active[data-v-54dadf8e]{color:#d81e06;border:%?2?% solid #d81e06;border-radius:%?16?%}',""]),e.exports=t},"98c2":function(e,t,i){var n=i("8739");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("9efa891a",n,!0,{sourceMap:!1,shadowMode:!1})},a402:function(e,t,i){"use strict";i.r(t);var n=i("21f6"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},c144:function(e,t,i){"use strict";var n=i("98c2"),r=i.n(n);r.a},c7be:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[{key:"A",name:"A"},{key:"B",name:"B"},{key:"C",name:"C"},{key:"D",name:"D"},{key:"E",name:"E"},{key:"F",name:"F"},{key:"G",name:"G"},{key:"H",name:"H"},{key:"I",name:"I"},{key:"J",name:"J"},{key:"K",name:"K"},{key:"L",name:"L"},{key:"M",name:"M"},{key:"N",name:"N"},{key:"O",name:"O"},{key:"P",name:"P"},{key:"Q",name:"Q"},{key:"R",name:"R"},{key:"S",name:"S"},{key:"T",name:"T"},{key:"U",name:"U"},{key:"V",name:"V"},{key:"W",name:"W"},{key:"X",name:"X"},{key:"Y",name:"Y"},{key:"Z",name:"Z"}];t.default=n},cbc2:function(e,t,i){"use strict";var n=i("3c6b"),r=i.n(n);r.a},d35c:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-wrap[data-v-79bed394]{background-color:#eee;overflow:hidden}.u-lazy-item[data-v-79bed394]{width:100%;-webkit-transform:transition3d(0,0,0);transform:transition3d(0,0,0);will-change:transform;display:block}',""]),e.exports=t},db90:function(e,t,i){"use strict";function n(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}i("a4d3"),i("e01a"),i("d28b"),i("a630"),i("d3b7"),i("3ca3"),i("ddb0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=n}}]);