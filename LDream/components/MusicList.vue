<template>
	<view class="musicList pl-3 pr-3 pt-4">
		<view class=" d-flex justify-between align-center util">
			<view class="d-flex">
				<u-image src="/static/random.png" width="42upx" mode="widthFix" border-radius="6"></u-image>
				<text class="ml-2">随机播放</text>
			</view>
			<view class="">
				<u-image src="/static/remove.png" width="42upx" mode="widthFix" border-radius="6"></u-image>
			</view>
			
		</view>
		<scroll-view scroll-y="true" class="list pt-7" style="height: calc(100% - 24upx);">
			<view class=" d-flex justify-between mb-3" v-for="(item,index) in currentPlayList" :key="item.id">
				<view class="d-flex align-end" @click="handleChangePlayMusic(item,index)">
					<u-image v-if="isPlaying(item)" class="mr-2" src="/static/isPlaying.png" width="36upx" mode="widthFix" border-radius="6"></u-image>
					<text :style="{color: isPlaying(item)?'#d81e06':'#bba8a8'}">{{item.name}} - {{getName(item.ar)}}</text>
				</view>
				<view class="d-flex">
					<u-image @click="handleRemovePlay(item,index)" class="ml-4" src="/static/removeMusic.png" width="42upx" mode="widthFix" border-radius="6"></u-image>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {mapState,mapMutations,mapGetters} from "vuex"
	import {getName} from "../util/config.js"
	export default {
		name:"MusicList",
		data() {
			return {
				mode:[
					{name:"随机播放",icon:"/"}
				],
				getName
			};
		},
		computed:{
			...mapState(["currentPlayList","currentPlayMusic"]),
			...mapGetters(["musicPlayListLength"]),
			isPlaying(){
				return function(curMusic){
					return this.currentPlayMusic && this.currentPlayMusic.id == curMusic.id
				}
			}
		},
		methods:{
			...mapMutations(["changeCurrentPlayMusic","changeCurrentPlayIndex","changePlayStatus","changeCurrentPlayList"]),
			handleChangePlayMusic(curMusic,index){
				if(this.currentPlayMusic && this.currentPlayMusic.id == curMusic.id)return
				this.changeCurrentPlayMusic(curMusic)
				this.changeCurrentPlayIndex(index)
			},
			handleRemovePlay(curMusic,index){
				if(this.currentPlayList.length == 1){
					this.changeCurrentPlayIndex(0)
					this.changePlayStatus(false)
					this.changeCurrentPlayMusic(null)
				}
				if(this.currentPlayMusic && this.currentPlayMusic.id == curMusic.id){
					if(this.musicPlayListLength-1 == index){
						this.changeCurrentPlayIndex(0)
					}else{
						this.changeCurrentPlayIndex(index+1)
					}
					this.changePlayStatus(true)
				}
				const newList = this.currentPlayList.filter(item=>{
					return item.id != curMusic.id
				})
				this.changeCurrentPlayList(newList)
			}
		}
	}
</script>

<style lang="scss" scoped>
.musicList{
	overflow: hidden;
	touch-action: none;
	position: relative;
	height: 100%;
	overflow: hidden;
	.util{
		position: absolute;
		top: 10upx;
		width: 100%;
		background-color: #fff;
		padding: 10upx 20upx;
		padding-right: 46upx;
	}
	.list{
		padding-top: 30upx;
	}
}
</style>
