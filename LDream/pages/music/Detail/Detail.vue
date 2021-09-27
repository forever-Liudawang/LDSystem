<template>
	<view class="musicDetail" >
		<view class="" style="background-color: transparent;">
			<u-sticky offset-top="0" style="background-color: transparent;">
				<view class=" p-2  d-flex justify-between nav">
					<view class="" @click="handleBack" >
						<u-icon name="arrow-left" size="46"></u-icon>
					</view>
				</view>
			</u-sticky>
		</view>
		<view class="flex-1" v-if="model">
			<view class="bg" :style="{backgroundImage:`url(${bgImg})`}"></view>
			<view class="mt-4" style="height: 24%;">
				<view class="d-flex justify-center align-center">
					<view class="d-flex" style="width: 32%;">
						<u-image :src="bgImg" width="100%" mode="widthFix" border-radius="6"></u-image>
					</view>
					<view class="ml-4 d-flex flex-column justify-around">
						<view class="" style="font-size: 32upx;color: #fff;font-weight: bold;">
							{{model.playlist.name}}
						</view>
						<view class="d-flex align-center mt-5">
							<u-image shape="circle" :src="model.playlist.creator.avatarUrl" width="14%" mode="widthFix" border-radius="6"></u-image>
							<text style="color: #bba8a8;" class="ml-1">{{model.playlist.creator.nickname}}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="musicList">
				<view class="d-flex align-center pl-3" style="border-bottom: 2upx solid #e4e4e4;">
					<view class="d-flex flex-1  align-center">
						<u-image shape="circle" src="/static/play.png" width="10%" mode="widthFix" border-radius="6"></u-image>
						<text class="ml-4 mr-2">播放全部</text>
						<text style="color: #bba8a8;font-size: 24upx;">共 (10) 首</text>
					</view>
					<view class="color-white pl-2 pt-3 pb-3" style="width: 30%;background-color: #d81e06;border-radius: 6upx;">
						<u-icon class="mr-2" name="plus" color="#fff" size="28"></u-icon>
						收藏
					</view>
				</view>
				<view class="d-flex align-center" v-for="(item,index) in model.playlist.tracks" @click="handlePlay(item,index)">
					<text class="p-5">{{index+1}}</text>
					<view class="d-flex flex-column justify-around flex-1 pt-3 pb-3" style="border-bottom: 2upx solid #e4e4e4;">
						<text style="font-size: 32upx;">{{item.name}}</text>
						<text style="font-size: 24upx;color: #bba8a8;" class="mt-2" v-for="singer in item.ar">{{singer.name}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="pos-fix w-full" style="bottom: 0;">
			<MusicPlay/>
		</view>
	</view>
</template>

<script>
	import confirm from "../../../util/confirm.js"
	import {mapMutations,mapState} from "vuex"
	import MusicPlay from  "../MusicPlay/MusicPlay.vue"
	export default {
		components:{
			MusicPlay
		},
		data() {
			return {
				id:"",
				model:null,
				bgImg:null
			}
		},
		onLoad(option){
			console.log(option)
			const {id} = option
			this.id = id;
		},
		mounted(){
			this.handleGetMusicList()
		},
		computed:{
			...mapState(["curentPlayMusic"])
		},
		methods:{
			...mapMutations(["changeCurrentPlayMusic"]),
			handleBack(){
				uni.navigateBack({
					delta:1
				})
			},
			async handleGetMusicList(){
				uni.showLoading({
					title:"加载中...."
				})
				const resp = await this.$http({
					url: "/music/getRecommendMusicList",
					method: "get",
					data:{id:this.id}
				})
				confirm(resp,(data)=>{
					uni.hideLoading()
					this.model = data
					this.bgImg = data.playlist.coverImgUrl
				})
				console.log(resp)
			},
			handlePlay(item,index){
				this.changeCurrentPlayMusic(item)
				this.$store.commit("changePlayStatus",true)
				this.$store.commit("changeCurrentPlayIndex",index)
				this.$store.commit("changeCurrentPlayList",this.model.playlist.tracks)
				
			}
		}
	}
</script>

<style lang="scss">
.musicDetail{
	padding-top: var(--status-bar-height);
	position: relative;
	height: 100%;
	display: flex;
	flex-direction: column;
	/deep/.u-sticky-wrap{
		background-color: transparent !important;
	}
	.nav{
		background-color: transparent;
	}
	.bg{
		position: absolute;
		top: 0;
		z-index: -1;
		background-position: 0 0;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		width: 100%;
		height: 38%;
		filter: blur(40px);
	}
	.musicList{
		background-color: #fff;
		border-top-left-radius: 12upx;
		border-top-right-radius: 12upx;
	}
}
</style>
