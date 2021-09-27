<template>
	<view class="singerDetail">
		<scroll-view class="h-full" scroll-y="true" @scroll="handleScroll">
			<view class="header w-full">
				<u-sticky offset-top="0" >
					<view class=" p-2  d-flex justify-between nav">
						<view class="" @click="handleBack" >
							<u-icon name="arrow-left" size="46"></u-icon>
						</view>
					</view>
				</u-sticky>
			</view>
			<view class="h-full pos-rel d-flex flex-column" v-if="singerModel">
				<view class="imgBox" ref="$img" :style="{backgroundImage:`url(${singerModel.artist.picUrl})`}">
					
				</view>
				<view class="musicList flex-1">
					<view class="collection d-flex justify-center align-center" :style="{opacity:cptOpacity}">
						<u-icon class="mr-2" name="plus" color="#fff" size="30"></u-icon>
						收藏
					</view>
					<view class="d-flex align-center pl-3" style="border-bottom: 2upx solid #e4e4e4;">
						<view class="d-flex flex-1  align-center pt-2 pb-2">
							<u-image shape="circle" src="/static/play.png" width="8%" mode="widthFix" border-radius="6"></u-image>
							<text class="ml-4 mr-2">播放全部</text>
							<text style="color: #bba8a8;font-size: 24upx;">共 (10) 首</text>
						</view>
					</view>
					<view>
						<view class="d-flex align-center" v-for="(item,index) in singerModel.hotSongs">
							<text class="p-5">{{index+1}}</text>
							<view class="d-flex flex-column justify-around flex-1 pt-3 pb-3" style="border-bottom: 2upx solid #e4e4e4;">
								<text style="font-size: 32upx;">{{item.name}}</text>
								<text style="font-size: 24upx;color: #bba8a8;" class="mt-2" >{{musicName(item)}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-show="scrollTop>=295" @click="handleToTop">
				<u-back-top :scroll-top="scrollTop"   top="495"></u-back-top>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import confirm from "../../../util/confirm.js"
	export default {
		data() {
			return {
				imgHeight:null,
				cptOpacity:1,
				id:"",
				singerModel:null,
				scrollTop:0
			}
		},
		onPageScroll(e){
			console.log(e)
			this.scrollTop = e.scrollTop;
		},
		onLoad(option){
			const  {id} = option
			this.id = id;
		},
		mounted(){
			this.handleGetDetail()
		},
		computed:{
			musicName(){
				return (item)=>{
					const {ar,al} = item
					let str = "";
					ar.map((item, index) => {
					  str += index === 0 ? item.name : "/" + item.name;
					  return item;
					});
					return `${str} - ${al.name}`
				}
			}
		},
		methods: {
			handleBack(){
				uni.navigateBack({
					delta:1
				})
			},
			async handleGetDetail(){
				uni.showLoading({
					title:"加载中...."
				})
				const resp = await this.$http({
					url: "/music/getSingerDetail",
					method: "get",
					data:{id:this.id}
				})
				confirm(resp,(data)=>{
					this.singerModel = data
					uni.hideLoading()
				})
			},
			handleScroll(e){
				const {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY} = e.detail
				if(!this.imgHeight){
					const dom = uni.createSelectorQuery().select(".imgBox")
					dom.boundingClientRect(data=>{
						this.imgHeight = Math.floor(data.height)
					}).exec()
				}
				this.scrollTop = Math.ceil(scrollTop);
				const percent = Math.abs(scrollTop/this.imgHeight)
				this.cptOpacity = `${.95 - percent}`
			},
			handleToTop(){
				console.log(12222)
			    uni.pageScrollTo({ 
		　　　　　　scrollTop: 0, 
				   duration: 300 
		　　　　}); 
			}
		}
	}
</script>

<style lang="scss">
.singerDetail{
	padding-top:var(--status-bar-height);
	height: 100%;
	position: relative;
	.header{
		position: absolute;
		top: 0;
	}
	.imgBox{
		height: 45%;
		width: 100%;
		background: url("http://p1.music.126.net/LCWqYYKoCEZKuAC3S3lIeg==/109951165034938865.jpg") no-repeat;
		background-size: cover;
		filter: brightness(.7);
		position: fixed;
	}
	
	.musicList{
		background-color: #fff;
		border-top-left-radius: 12upx;
		border-top-right-radius: 12upx;
		position: absolute;
		width: 100%;
		top: 44%;
		.collection{
			position: absolute;
			width: 35%;
			height: 80upx;
			border-radius: 40upx;
			color:#fff;
			background-color: #d81e06;
			font-size: 32upx;
			left: 50%;
			top: -120upx;
			transform: translateX(-50%);
		}
	}
}
</style>
