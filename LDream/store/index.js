import Vuex from "vuex"
import Vue from "vue"

/*
	playMode: 1 随机播放 2 列表循环 3单曲循环
**/
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		userInfo:{userName:"lmy"},
		isLogined:false,
		currentPlayList:[],
		currentPlayIndex:0,
		currentPlayMusic:{},
		playing:false,
		percent:0,
		audioContext:null,
		showMusicList:false,
		playMode:1,
		curPost:{}
	},
	getters:{
		userID:state=>{
			if(state.isLogined){
				return state.userInfo._id
			}else{
				return null
			}
		},
		musicPlayListLength:state=>{
			return state.currentPlayList.length
		}
	},
	mutations:{
		login(state,userInfo){
			state.userInfo = userInfo
			state.isLogined = true
			uni.setStorage({
				key:"userInfo",
				data:userInfo
			})
			Vue.prototype.$user = userInfo
		},
		logout(state){
			state.userInfo = null;
			state.isLogined = false;
			uni.removeStorage({
				key:"userInfo"
			})
			Vue.prototype.$user = null;
		},
		changeCurrentPlayList(state,newList){
			state.currentPlayList = newList
		},
		changeCurrentPlayMusic(state,newMusic){
			state.currentPlayMusic = newMusic
		},
		changePlayStatus(state,newStatus){
			state.playing = newStatus
		},
		changeCurrentPlayIndex(state,index){
			let newIndex = 0
			if(index>=state.currentPlayList.length || index<0){
				newIndex = 0
			}else{
				newIndex = index
			}
			state.currentPlayIndex = newIndex
			if(state.currentPlayList && state.currentPlayList.length>0){
				state.currentPlayMusic = state.currentPlayList[newIndex]
			}
		},
		changePercent(state,newPercent){
			state.percent = newPercent
		},
		setAudioContext(state,ctx){
			state.audioContext = ctx
		},
		changeShowMusicList(state,newState){
			state.showMusicList = newState
		},
		changePlayMode(state,newMode){
			//是否单曲循环
			if(newMode == 3){
				state.audioContext.loop = true
			}else{
				state.audioContext.loop = false
			}
			state.playMode = newMode
		},
		setCurrentPost(state,newPost){
			state.curPost = newPost
		}
	}
})
export default store