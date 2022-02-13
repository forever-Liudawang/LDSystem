(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c92e2de"],{"3bb4":function(t,i,e){"use strict";e("cf65")},"7f63":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"video-detail"},[e("div",{staticClass:"v-video",class:[t.isNight?"active":""]},[e("div",[e("div",{staticClass:"video-main"},[t.videoOptions.sources[0].src?e("video-player",{attrs:{options:t.videoOptions},on:{play:t.onPlay,pause:t.onPause,seeking:t.onSeeking,qualityChange:t.onQualityChange}}):t._e(),e("div",{staticClass:"v-light",class:[t.isNight?"active":""],on:{click:t.toggleLight}},[e("i",{staticClass:"iconfont",class:[t.isNight?"icon-night":"icon-day"]})])],1),e("div",{staticClass:"v-info"},[e("div",{staticClass:"v-info-hd"},[e("div",{staticClass:"info-name"},[t._v(t._s(t.videoDetail.title))]),t.videoDetail.creator?e("router-link",{staticClass:"song-author",attrs:{to:{path:"/user",query:{id:t.videoDetail.creator.userId}}}},[t._v("By. "+t._s(t.videoDetail.creator.nickname))]):t._e(),e("div",{staticClass:"v-info-count"},[e("span",{staticClass:"info-count"},[t._v("播放量："+t._s(t.$utils.formartNum(t.videoDetail.playTime)))]),e("span",{staticClass:"info-time"},[t._v("发布时间："+t._s(t.$utils.formartDate(t.videoDetail.publishTime,"yyyy-MM-dd")))])])],1),e("div",{staticClass:"v-desc"},[t._v(" "+t._s(t.videoDetail.briefDesc?t.videoDetail.briefDesc:"暂无简介")+" ")])])])]),e("div",[e("div",{staticClass:"v-container"},[e("div",{staticClass:"v-main"},[e("Comments",{attrs:{type:t.type,id:t.vId}})],1),e("div",{staticClass:"v-aside"},[e("div",{staticClass:"simi-video"},[e("h3",{staticClass:"aside-title"},[t._v("相关视频")]),e("div",{staticClass:"aside-main v-main"},t._l(t.simiVideo,(function(i,s){return e("div",{key:""+i.id+s,staticClass:"item"},[e("router-link",{staticClass:"faceImg",attrs:{to:{path:i.type?"/video":"/mv",query:{id:i.vid}}}},[e("i",{staticClass:"iconfont icon-play"}),e("el-image",{attrs:{src:i.coverUrl}},[e("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[e("i",{staticClass:"iconfont icon-placeholder"})])]),e("span",{staticClass:"playCount"},[e("i",{staticClass:"iconfont icon-video"}),e("em",[t._v(t._s(t.$utils.formartNum(i.playTime)))])]),e("div",{staticClass:"v-time"},[t._v(t._s(t.$utils.formatSongTime(i.durationms)))])],1),e("div",{staticClass:"info"},[e("router-link",{staticClass:"v-name",attrs:{to:{path:"/video",query:{id:i.vid}}}},[t._v(t._s(i.title))]),t._l(i.creator,(function(i,s){return e("router-link",{key:s,staticClass:"v-author",attrs:{to:{path:"/user",query:{uid:i.userId}}}},[t._v("By. "+t._s(0!==s?" / "+i.userName:i.userName))])}))],2)],1)})),0)])])])])])},a=[],r=e("1da1"),n=e("5530"),o=(e("d3b7"),e("3ca3"),e("ddb0"),e("159b"),e("d81d"),e("96cf"),e("0de3")),c=e("09a4"),u=e("2f62"),d={name:"videoDetail",components:{videoPlayer:o["a"],Comments:c["a"]},data:function(){return{vId:this.$route.query.id,videoDetail:{},type:5,videoOptions:{sources:[{type:"",src:""}],qualityList:[],quality:{}},currentTime:0,simiVideo:[],isNight:!1}},computed:{},mounted:function(){this.init(),this.setPlayStatus(!1)},methods:Object(n["a"])(Object(n["a"])({},Object(u["d"])({setPlayStatus:"SET_PLAYSTATUS"})),{},{getVideoDetail:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){var e,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.$http.videoDetail({id:t.vId});case 2:if(e=i.sent,s=e.data,200===s.code){i.next=6;break}return i.abrupt("return",t.$msg.error("数据请求失败"));case 6:t.videoDetail=s.data,t.videoOptions.qualityList=s.data.brs,t.videoOptions.quality=s.mp;case 9:case"end":return i.stop()}}),i)})))()},getMvUrl:function(t){var i=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.$http.videoUrl({id:i.vId,r:t});case 2:if(s=e.sent,a=s.data,200===a.code){e.next=6;break}return e.abrupt("return",i.$msg.error("数据请求失败"));case 6:i.$set(i.videoOptions.sources,0,{type:"video/mp4",src:a.urls[0].url});case 7:case"end":return e.stop()}}),e)})))()},getSimiMv:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){var e,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.$http.simiVideo({id:t.vId});case 2:if(e=i.sent,s=e.data,200===s.code){i.next=6;break}return i.abrupt("return",t.$msg.error("数据请求失败"));case 6:t.simiVideo=s.data;case 7:case"end":return i.stop()}}),i)})))()},init:function(){var t=this,i=this.$http.videoDetail({id:this.vId}),e=this.$http.videoUrl({id:this.vId});this.currentTime=0,Promise.all([i,e]).then((function(i){i.forEach((function(i,e){var s=i.data;if(0===e){if(200!==s.code)return t.$msg.error("数据请求失败");t.videoDetail=s.data,t.videoOptions.qualityList=s.data.resolutions.map((function(t){var i={};return i.br=t.resolution,i.size=t.size,i}))}else{if(200!==s.code)return t.$msg.error("数据请求失败");t.$set(t.videoOptions.sources,0,{type:"video/mp4",src:s.urls[0].url}),t.videoOptions.quality={br:s.urls[0].r}}}))})),this.getSimiMv()},onPlay:function(t){t.currentTime(this.currentTime)},onSeeking:function(t){this.currentTime=t.currentTime()},onPause:function(t){this.currentTime=t.currentTime(),t.pause()},onQualityChange:function(t){this.onPause(t),this.currentTime=t.currentTime(),this.getMvUrl(t.quality.val)},toggleLight:function(){this.isNight=!this.isNight}}),watch:{$route:function(t,i){this.vId=this.$route.query.id,this.vId&&this.init()}}},l=d,v=(e("3bb4"),e("2877")),m=Object(v["a"])(l,s,a,!1,null,"c295cfc2",null);i["default"]=m.exports},cf65:function(t,i,e){}}]);
//# sourceMappingURL=chunk-2c92e2de.58ca7151.js.map