<template>
	<view class="videoBox" @touchstart="handleMoveStart" @touchend="handleMoveEnd">
		<uni-list class="h-full">
			<uni-list-item title="" note="" class="d-flex h-full" style="width: 100vw;height: 93vh;"  v-for="(video,index) in dataList">
				<template slot="body">
					<view class="flex-1 d-flex videoItem" style="height: 93vh;box-sizing:border-box">
						<video 
							 :id="`video_${index}`" 
							 loop src="/static/1.mp4" 
							 controls
							 :show-center-play-btn="false" 
							 objectFit="fill"
							 class="w-full h-full">
						 </video>
						 <view class="util">
						 	<view class="d-flex justify-center align-center">
						 		<u-image src="/static/videoLike.png" width="60upx" mode="widthFix" shape="circle"></u-image>
						 		<text  style="font-size: 24upx;color: #fff;">2519</text>
						 	</view>
						 	<view class="d-flex justify-center align-center" style="margin: 16upx 0;">
						 		<u-image src="/static/videoComment.png" width="60upx" mode="widthFix"  shape="circle"></u-image>
						 		<text  style="font-size: 24upx;color: #fff;">523</text>
						 	</view>
						 	<view class="d-flex justify-center align-center">
						 		<u-image src="/static/videoShare.png" width="64upx" mode="widthFix"  shape="circle"></u-image>
						 		<text  style="font-size: 24upx;color: #fff;">12</text>
						 	</view>
						 </view>
						 <view class="videoDesc w-full p-2">
						 	测试测试测试测试
						 	测试测试测试测试
						 	测试测试测试测试
						 	测试测试测试测试
						 	测试测试测试测试
						 	测试测试测试测试
						 	测试测试测试测试
						 	测试测试测试测试
						 	测试测试测试测试
						 </view>
					</view>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	let startP = 0;
	let endP = 0;
	export default {
		data() {
			return {
				dataList:[1,2,3,4,5],
				index:0,
				containerH:0,
				videoContentList:[]
			}
		},
		mounted(){
			const container = uni.createSelectorQuery().select(".videoItem")
			container.boundingClientRect(data=>{
				this.containerH = data.height
			}).exec()
			this.init()
		},
		methods: {
			init(){
				this.dataList.forEach((item,index)=>{
					this.videoContentList.push(uni.createVideoContext(`video_${index}`))
				})
			},
			handleMoveStart(e){
				const {touches} = e
				startP = touches[0].clientY
			},
			handleMoveEnd(e){
				const {changedTouches} = e
				endP = changedTouches[0].clientY
				const dis = endP - startP;
				const t = Math.abs(dis)/this.containerH
				if(dis<0){
					if(t>0.4){
						this.index++
						this.videoContentList[this.index].play()
						this.videoContentList[this.index-1].pause()
					}
					uni.pageScrollTo({
						scrollTop: this.containerH*this.index,
						duration:100
					})
				}else{
					if(t>0.4){
						this.index--
						this.videoContentList[this.index].play()
						this.videoContentList[this.index+1].pause()
					}
					uni.pageScrollTo({
						scrollTop: this.containerH*this.index,
						duration:100,
					})
				}
			},
		},
		
		
	}
</script>

<style lang="scss">
.videoBox {
	padding-top: var(--status-bar-height);
	/deep/ .uni-list-item__container{
		padding: 0 !important;
		height: 100%;
	}
	/deep/.uni-video-container{
		.uni-video-bar{
			background-color: transparent;
		}
	}
	padding-bottom: 100upx;
	.videoDesc{
		position: absolute;
		bottom: 68upx;
		color: #fff;
		font-size: 28upx;
		letter-spacing:4upx;
		height: 120upx;
		overflow:auto;
	}
	.util{
		position: absolute;
		right: 20upx;
		top:40%;
		z-index:20;
	}
}
</style>
