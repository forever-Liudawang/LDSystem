(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d64ed6f0"],{"039b":function(t,e,s){"use strict";s("4bbd")},"11b3":function(t,e,s){t.exports=s.p+"img/woman.ed3f49f9.svg"},"127c":function(t,e,s){"use strict";s("d6b7")},2253:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"album"},t._l(t.albumList,(function(e){return s("router-link",{key:e.id,staticClass:"item",attrs:{to:{path:"/album",query:{id:e.id}}}},[s("div",{staticClass:"faceImg"},[s("el-image",{attrs:{src:e.picUrl+"?param=120y120"}},[s("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[s("i",{staticClass:"iconfont icon-placeholder"})])])],1),s("div",{staticClass:"info"},[s("div",{staticClass:"album-type"},[t._v(t._s(e.type))]),e.name?s("div",{staticClass:"album-name"},[t._v(t._s(e.name))]):t._e(),e.artist?s("div",{staticClass:"artist-name"},[t._v(t._s(e.artist.name))]):t._e()])])})),1)},i=[],r={components:{},props:["albumList"],data:function(){return{}},computed:{},methods:{}},n=r,l=(s("7121"),s("2877")),c=Object(l["a"])(n,a,i,!1,null,"7e1d0986",null);e["a"]=c.exports},"2fd5":function(t,e,s){"use strict";s("e38d")},"37b0":function(t,e,s){},4281:function(t,e,s){"use strict";s("af08")},"4bbd":function(t,e,s){},"57b7":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mv"},t._l(t.mvList,(function(e,a){return s("div",{key:""+e.id+a,staticClass:"item"},[s("router-link",{staticClass:"faceImg",attrs:{to:{path:"/mv",query:{id:e.id}}}},[s("i",{staticClass:"iconfont icon-play"}),s("el-image",{attrs:{src:e.cover||e.imgurl}},[s("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[s("i",{staticClass:"iconfont icon-placeholder"})])])],1),s("div",{staticClass:"info"},[s("router-link",{staticClass:"mv-name",attrs:{to:{path:"/mv",query:{id:e.id}}}},[t._v(t._s(e.name))]),e.publishTime?t._e():s("router-link",{staticClass:"mv-author",attrs:{to:{path:"/singer",query:{id:e.artistId}}}},[t._v(t._s(e.artistName))]),s("div",{staticClass:"mv-playCount"},[s("i",{staticClass:"iconfont icon-video"}),t._v(" "+t._s(t.$utils.formartNum(e.playCount)))]),e.publishTime?s("div",{staticClass:"mv-time"},[t._v("发布时间："+t._s(e.publishTime))]):t._e()],1)],1)})),0)},i=[],r={components:{},props:["mvList"],data:function(){return{}},computed:{},methods:{}},n=r,l=(s("127c"),s("2877")),c=Object(l["a"])(n,a,i,!1,null,"05b0808c",null);e["a"]=c.exports},"6ffe":function(t,e,s){},7121:function(t,e,s){"use strict";s("727c")},"727c":function(t,e,s){},"7a0b":function(t,e,s){t.exports=s.p+"img/man.7b2f7d65.svg"},af08:function(t,e,s){},cc08:function(t,e,s){"use strict";s("6ffe")},d5a6:function(t,e,s){"use strict";s("37b0")},d6b7:function(t,e,s){},dfd5:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"playlist"},t._l(t.playList,(function(e){return s("div",{key:e.id,staticClass:"item"},[s("router-link",{staticClass:"faceImg",attrs:{to:{path:"playlist/detail",query:{id:e.id}}}},[s("el-image",{attrs:{src:e.coverImgUrl,lazy:""}},[s("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[s("i",{staticClass:"iconfont icon-placeholder"})])]),s("span",{staticClass:"playCount"},[s("i",{staticClass:"iconfont icon-playnum"}),s("em",[t._v(t._s(t.$utils.formartNum(e.playCount)))])])],1),s("div",{staticClass:"info"},[s("router-link",{staticClass:"info_name",attrs:{to:{path:"playlist/detail",query:{id:e.id}}}},[t._v(t._s(e.name)+" ")]),s("div",{staticClass:"tags"},t._l(e.tags,(function(e,a){return s("router-link",{key:a,staticClass:"tag",attrs:{to:{path:"/playlist",query:{cat:e}}}},[t._v("#"+t._s(e)+" ")])})),1)],1)],1)})),0)},i=[],r={components:{},props:["playList"],data:function(){return{}},computed:{},methods:{}},n=r,l=(s("039b"),s("2877")),c=Object(l["a"])(n,a,i,!1,null,"38a64e19",null);e["a"]=c.exports},e38d:function(t,e,s){},efe3:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search"},[s("div",{staticClass:"search-hd"},[s("div",[s("div",{staticClass:"search-box"},[s("el-popover",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:t.handleClose,expression:"handleClose"}],ref:"popover",attrs:{placement:"bottom-start",trigger:"manual",width:"626","visible-arrow":"false"},model:{value:t.isShowSearch,callback:function(e){t.isShowSearch=e},expression:"isShowSearch"}},[s("el-input",{staticClass:"search-inp",attrs:{slot:"reference",placeholder:"请输入歌名/歌词/歌手/用户或专辑",clearable:""},on:{focus:t.getListHandle,input:t.getListHandle},slot:"reference",model:{value:t.keyVal,callback:function(e){t.keyVal=e},expression:"keyVal"}}),[s("div",{staticClass:"search-key-list"},t._l(t.suggestInfo.order,(function(e,a){return s("div",{key:a,staticClass:"search-item"},[s("h6",[t._v(t._s(t.listType[e]))]),s("div",{staticClass:"item-main"},t._l(t.suggestInfo[e],(function(a,i){return s("div",{key:i,staticClass:"list",on:{click:function(s){return t.jumpPage(a,e)}}},[t._v(" "+t._s(a.name)+" "),"songs"===e?[t._v(" -"),t._l(a.artists,(function(e,a){return s("span",{key:a},[t._v(t._s(e.name+(0!==a?" / ":"")))])}))]:"albums"===e?[t._v(" -"),s("span",[t._v(t._s(a.artist.name))])]:t._e()],2)})),0)])})),0)]],2),s("i",{staticClass:"iconfont icon-search",attrs:{slot:"suffix"},on:{click:function(e){return e.stopPropagation(),t.jumpSearch(t.keyVal)}},slot:"suffix"}),t.history.length?s("div",{staticClass:"search-history"},[s("span",[t._v("历史搜索：")])]):t._e()],1)])]),s("div",[s("div",{staticClass:"search-main"},[s("div",{staticClass:"search-tab"},[s("h2",[t._v("搜索结果"),s("em",[t._v("("+t._s(t.searchInfo)+")")])]),s("div",{staticClass:"type"},[s("span",{class:"1"===t.type?"active":"",on:{click:function(e){return t.selectType("1")}}},[t._v("单曲")]),s("span",{class:"10"===t.type?"active":"",on:{click:function(e){return t.selectType("10")}}},[t._v("专辑")]),s("span",{class:"100"===t.type?"active":"",on:{click:function(e){return t.selectType("100")}}},[t._v("歌手")]),s("span",{class:"1000"===t.type?"active":"",on:{click:function(e){return t.selectType("1000")}}},[t._v("歌单")]),s("span",{class:"1002"===t.type?"active":"",on:{click:function(e){return t.selectType("1002")}}},[t._v("用户")]),s("span",{class:"1004"===t.type?"active":"",on:{click:function(e){return t.selectType("1004")}}},[t._v("MV")]),s("span",{class:"1014"===t.type?"active":"",on:{click:function(e){return t.selectType("1014")}}},[t._v("视频")])])]),s("div",{staticClass:"search-list"},["1"===t.type?s("song-list",{attrs:{songList:t.list,stripe:!0,offset:t.offset}}):t._e(),"10"===t.type?s("album-list",{attrs:{albumList:t.list}}):t._e(),"100"===t.type?s("artist-list",{attrs:{artistList:t.list}}):t._e(),"1000"===t.type?s("play-list",{attrs:{playList:t.list}}):t._e(),"1004"===t.type?s("mv-list",{attrs:{mvList:t.list}}):t._e(),"1014"===t.type?s("video-list",{attrs:{videoList:t.list}}):t._e(),"1002"===t.type?s("user-list",{attrs:{userList:t.list,offset:t.offset,currentpage:t.currentpage,limit:t.limit}}):t._e()],1),s("div",{staticClass:"pagination"},[s("el-pagination",{attrs:{background:"","current-page":t.currentpage,"page-size":t.limit,layout:"prev, pager, next",total:t.total},on:{"current-change":t.currentChange}})],1)])])])},i=[],r=s("1da1"),n=(s("d81d"),s("b0c0"),s("96cf"),s("18fd")),l=s("2253"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"artist"},t._l(t.artistList,(function(e){return s("router-link",{key:e.id,staticClass:"item",attrs:{to:{path:"/singer",query:{id:e.id}}}},[s("div",{staticClass:"faceImg"},[s("el-image",{attrs:{src:e.picUrl+"?param=120y120"}},[s("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[s("i",{staticClass:"iconfont icon-placeholder"})])])],1),s("div",{staticClass:"info"},[s("div",{staticClass:"name"},[t._v(t._s(e.name))]),s("div",{staticClass:"albumSize"},[t._v("专辑："+t._s(e.albumSize))])])])})),1)},o=[],u={components:{},props:["artistList"],data:function(){return{}},computed:{},methods:{}},p=u,d=(s("2fd5"),s("2877")),m=Object(d["a"])(p,c,o,!1,null,"e9bf8726",null),h=m.exports,f=s("dfd5"),v=s("57b7"),y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"video"},t._l(t.videoList,(function(e,a){return s("div",{key:""+e.id+a,staticClass:"item"},[s("router-link",{staticClass:"faceImg",attrs:{to:{path:e.type?"/video":"/mv",query:{id:e.vid}}}},[s("i",{staticClass:"iconfont icon-play"}),s("el-image",{attrs:{src:e.coverUrl}},[s("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[s("i",{staticClass:"iconfont icon-placeholder"})])]),s("span",{staticClass:"playCount"},[s("i",{staticClass:"iconfont icon-video"}),s("em",[t._v(t._s(t.$utils.formartNum(e.playTime)))])]),s("div",{staticClass:"v-time"},[t._v(t._s(t.$utils.formatSongTime(e.durationms)))])],1),s("div",{staticClass:"info"},[s("router-link",{staticClass:"v-name",attrs:{to:{path:"/video",query:{id:e.vid}}}},[t._v(t._s(e.title))]),t._l(e.creator,(function(e,a){return s("router-link",{key:a,staticClass:"v-author",attrs:{to:{path:"/user",query:{uid:e.userId}}}},[t._v("By. "+t._s(0!==a?" / "+e.userName:e.userName))])}))],2)],1)})),0)},g=[],_={components:{},props:["videoList"],data:function(){return{}},computed:{},methods:{}},C=_,b=(s("4281"),Object(d["a"])(C,y,g,!1,null,"ecf46e38",null)),k=b.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"users-list-main"},[t._m(0),t._l(t.userList,(function(e,i){return a("div",{key:e.userId,staticClass:"itemBox"},[a("div",{staticClass:"userItem"},[a("div",{staticClass:"columnIndex"},[t._v(" "+t._s(t.getIndex(i))+" ")]),a("div",{staticClass:"columnName userItem_name",on:{click:function(s){return t.handleToUserDetail(e)}}},[a("el-image",{staticStyle:{width:"40px"},attrs:{src:e.avatarUrl+"?param=120y120"}}),a("span",{staticClass:"userName"},[t._v(t._s(e.nickname)+" ")]),1==e.gender?a("img",{attrs:{src:s("7a0b"),alt:""}}):a("img",{attrs:{src:s("11b3"),alt:""}})],1),a("div",{staticClass:"columnIsFollow"},[e.followed?a("el-button",{attrs:{type:"warning",icon:"el-icon-check",circle:"",title:"已关注"},on:{click:function(s){return t.handleFollow("0",e)}}}):a("el-button",{attrs:{type:"success",icon:"el-icon-plus",circle:"",title:"关注"},on:{click:function(s){return t.handleFollow("1",e)}}})],1),a("div",{staticClass:"columnAlbumNum"},[t._v(" "+t._s(e.playlistCount)+" ")]),a("div",{staticClass:"columnFollows"},[t._v(" "+t._s(e.followeds)+" ")])])])}))],2)},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list-header flex"},[s("div",{staticClass:"columnIndex"},[t._v("序号")]),s("div",{staticClass:"columnName"},[t._v("歌手名字")]),s("div",{staticClass:"columnIsFollow"},[t._v("关注")]),s("div",{staticClass:"columnAlbumNum"},[t._v("歌单数量")]),s("div",{staticClass:"columnFollows"},[t._v("粉丝数量")])])}],x=s("5530"),S=(s("a9e3"),s("2f62")),L={name:"userList",props:{userList:{type:Array,default:[]},offset:{type:Number,default:0},currentpage:{type:Number,default:0},limit:{type:Number,default:0}},computed:{},created:function(){console.log("this.offset",this.offset)},data:function(){return{}},methods:Object(x["a"])(Object(x["a"])({},Object(S["d"])(["setCurrentUserInfo"])),{},{getIndex:function(t){return this.offset+t+1},handleFollow:function(t,e){var s=this;console.log(t),this.$store.state.isLogin?1==t?this.$msgBox.confirm("是否关注该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",center:!0}).then(Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.$http.followUser(e.userId);case 2:a=t.sent,console.log(a,"resp==>>>>"),a&&200==a.data.code&&(s.$msg.success("关注成功!"),s.$parent.getSerachMatch());case 5:case"end":return t.stop()}}),t)})))).catch((function(){})):this.$msgBox.confirm("是否取消关注","提示",{confirmButtonText:"确定",cancelButtonText:"取消",center:!0}).then(Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.$http.followUser(e.userId,0);case 2:a=t.sent,a&&200==a.data.code&&(s.$msg.success("取消成功!"),s.$parent.getSerachMatch());case 4:case"end":return t.stop()}}),t)})))).catch((function(t){s.$msg.error(t)})):this.$msg.warning("请先登录!")},handleToUserDetail:function(t){this.setCurrentUserInfo(t),this.$router.push({path:"/user"})}})},I=L,T=(s("cc08"),Object(d["a"])(I,w,$,!1,null,"cbb82278",null)),q=T.exports,j={name:"search",components:{songList:n["a"],albumList:l["a"],artistList:h,playList:f["a"],mvList:v["a"],videoList:k,userList:q},data:function(){return{keyVal:this.$route.query.key,suggestInfo:{},listType:{songs:"单曲",artists:"歌手",albums:"专辑",playlists:"歌单"},type:this.$route.query.type||"1",history:[],list:[],total:0,offset:0,limit:30,currentpage:0,isShowSearch:!1}},computed:{searchInfo:function(){var t={1:"首单曲",10:"张专辑",100:"个歌手",1e3:"个歌单",1002:"个用户",1004:"个MV",1014:"个视频",1018:"个"};return this.total+t[this.type]}},mounted:function(){this.getSerachMatch()},methods:{getSerachSuggest:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.serachSuggest({keywords:t.keyVal});case 2:if(s=e.sent,a=s.data,200===a.code){e.next=6;break}return e.abrupt("return",t.$msg.error("数据请求失败"));case 6:t.suggestInfo=a.result;case 7:case"end":return e.stop()}}),e)})))()},getSerachMatch:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.cloudsearch({keywords:t.keyVal,type:t.type,limit:t.limit,offset:t.offset});case 2:if(s=e.sent,a=s.data,200===a.code){e.next=6;break}return e.abrupt("return",t.$msg.error("数据请求失败"));case 6:"1"===t.type?(t.list=a.result.songs.map((function(e){return{id:String(e.id),name:e.name,mvId:e.mv,singer:e.ar,album:e.al,alia:e.alia,vip:1===e.fee,license:e.license,duration:t.$utils.formatSongTime(e.dt),url:"https://music.163.com/song/media/outer/url?id=".concat(e.id,".mp3"),publishTime:t.$utils.formatMsgTime(e.publishTime)}})),t.total=a.result.songCount):"10"===t.type?(t.list=a.result.albums,t.total=a.result.albumCount):"100"===t.type?(t.list=a.result.artists,t.total=a.result.artistCount):"1000"===t.type?(t.list=a.result.playlists,t.total=a.result.playlistCount):"1004"===t.type?(t.list=a.result.mvs,t.total=a.result.mvCount):"1014"===t.type?(t.list=a.result.videos,t.total=a.result.videoCount):"1002"===t.type&&(t.list=a.result.userprofiles,t.totle=a.result.userprofileCount,console.log("res.result.userprofileCount",a.result.userprofileCount));case 7:case"end":return e.stop()}}),e)})))()},jumpSearch:function(t){t&&(this.keyVal&&this.keyVal!==this.$route.query.key?(this.$router.push({path:"/search",query:{key:t,type:this.type}}),this.isShowSearch=!1):(this.list=[],this.getSerachMatch()))},jumpPage:function(t,e){switch(this.keyVal=t.name,e){case"songs":this.$router.push({path:"/song",query:{id:t.id}});break;case"artists":this.$router.push({path:"/singer",query:{id:t.id}});break;case"albums":this.$router.push({path:"/album",query:{id:t.id}});break;case"playlists":this.$router.push({path:"/playlist/detail",query:{id:t.id}});break}this.isShowSearch=!1},getListHandle:function(){this.keyVal?(this.suggestInfo={},this.getSerachSuggest(),this.isShowSearch=!0):this.isShowSearch=!1},handleClose:function(){this.isShowSearch=!1},selectType:function(t){this.type=t,this.offset=0,this.currentpage=0,this.$router.push({path:"/search",query:{key:this.keyVal,type:this.type}})},currentChange:function(t){this.offset=(t-1)*this.limit,this.currentpage=t,this.getSerachMatch()}},watch:{$route:function(t,e){this.keyVal=this.$route.query.key,this.type=this.$route.query.type||"1",this.getSerachMatch()}}},N=j,V=(s("d5a6"),Object(d["a"])(N,a,i,!1,null,"4f852462",null));e["default"]=V.exports}}]);
//# sourceMappingURL=chunk-d64ed6f0.aa41ca97.js.map