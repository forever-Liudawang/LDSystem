<template>
	<view class="musicPlay pl-4 d-flex justify-between pr-6 pt-2 pb-2" v-if="showCom">
		<view class="d-flex flex-1" @click="handleShowFull">
			<view :class="['h-full','musicActive',{musicStop:!playing}]">
				<u-image :src="currentPlayMusic.al.picUrl" width="80upx" height="80upx" border-radius="6" shape="circle"></u-image>
			</view>
			<view class=" d-flex flex-column justify-center ml-4 flex-1">
				<view class="w-full">{{currentPlayMusic.name}}</view>
				<view class="w-full" style="font-size: 24upx;color: #bba8a8;">{{getName(currentPlayMusic.ar)}}</view>
			</view>
		</view>
		<view class="d-flex align-center">
			<PlayCircle :radius="32"  @click.native="handleChangePlay">
			</PlayCircle>
			<view class=" ml-4" @click="handleShowMusicList">
				<u-icon class="musicIcon" name="list" color="#d81e06" size="40"></u-icon>		
			</view>
		</view>
		<!-- <u-popup  class="w-full" v-model="showMusicList" mode="bottom" height="800upx" border-radius="14">
			<MusicList/> 
		</u-popup> -->
		<uni-popup ref="popup" type="bottom" background-color="#fff" style="height: 100vh;" class="">底部弹出 Popup</uni-popup>
	</view>
</template>

<script>
	import PlayCircle from "../../../components/PlayCircle.vue"
	import {songUrl} from "../../../util/config.js"
	import {mapState,mapGetters,mapMutations} from "vuex"
	import {getName} from "../../../util/config.js"
	import MusicList from "../../../components/MusicList.vue"
	export default {
		components:{
			PlayCircle,
			MusicList
		},
		props:{
			
		},
		data() {
			return {
				innerAudioContext:null,
				getName,
				duration:0,
				showMusicList:false
			}
		},
		computed:{
			...mapState(["currentPlayMusic","playing","currentPlayIndex","currentPlayList","percent","playMode"]),
			...mapGetters(["musicPlayListLength"]),
			songUrl(){
				return this.currentPlayMusic? songUrl(this.currentPlayMusic.id || ""):""
			},
			showCom(){
				return this.currentPlayMusic && Object.keys(this.currentPlayMusic).length>0
			},
		},
		watch:{
			songUrl(newVal,oldVal){
				this.innerAudioContext.src = this.songUrl
			}
		},
		mounted(){
			this.initAudio()
		},
		methods: {
			...mapMutations(["changePercent","setAudioContext","changeShowMusicList"]),
			initAudio(){
				const innerAudioContext = uni.createInnerAudioContext();
				this.innerAudioContext = innerAudioContext
				this.innerAudioContext.autoplay = true;
				this.innerAudioContext.src = "";
				this.innerAudioContext.onPlay((data) => {
				  console.log(data);
				});
				this.innerAudioContext.onError((res) => {
				  console.log(res);
				});
				// const node = this.innerAudioContext.createAnalyser()
				// node.fftSize = 256
				// this.innerAudioContext
				this.innerAudioContext.onEnded((res) => {
					if(this.playMode == 1){
						const randomIndex = Math.floor(Math.random()*this.musicPlayListLength)
						this.$store.commit("changeCurrentPlayIndex",randomIndex)
					}else if(this.playMode == 2){
						const newIndex = this.currentPlayIndex+1;
						this.$store.commit("changeCurrentPlayIndex",newIndex)
					}
					this.changePercent(0)
				})
				this.innerAudioContext.onCanplay((res) => {
					this.duration = this.innerAudioContext.duration
				})
				this.innerAudioContext.onTimeUpdate(res=>{
					const percent = isNaN(this.innerAudioContext.currentTime / this.duration) ? 0 : this.innerAudioContext.currentTime / this.duration;
					this.changePercent(percent)
				})
				this.setAudioContext(innerAudioContext)
				
			},
			handleChangePlay(){
				if(this.playing){
					this.innerAudioContext.pause()
				}else{
					this.innerAudioContext.play()
				}
				this.$store.commit("changePlayStatus",!this.playing)
			},
			handleShowFull(){
				uni.navigateTo({
					url:"/pages/music/MusicPlayFull/MusicPlayFull",
					animationType:"slide-in-bottom"
				})
			},
			handleShowMusicList(){
				// this.changeShowMusicList(true)
				this.$refs.popup.open('top')
			}
		}
	}
</script>

<style lang="scss" scoped>
.musicPlay{
	width: 100%;
	box-shadow: 2px -2px 8px #ccc;
	bottom: 0;
	background-color: #fff;
	display: flex;
	align-items: center;
	animation:slide-in-fwd-center .4s cubic-bezier(.25,.46,.45,.94) both;
	.musicActive{
		animation: musicAnimation 10s linear infinite;
	}
	.musicStop{
		animation-play-state: paused;
	}
	@keyframes musicAnimation {
		  0%{
		    transform: rotate(0);
		  }
		  50%{
			  transform: rotate(180deg);
		  }
		  100%{
		    transform: rotate(360deg);
		  }
	}
	@keyframes slide-in-fwd-center{
		0%{
			transform:translateZ(-1400px);
			opacity:0
		}
		100%{
			transform:translateZ(0);
			opacity:1}
		}
}
</style>
