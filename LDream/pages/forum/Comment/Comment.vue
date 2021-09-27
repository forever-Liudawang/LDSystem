<template>
	<view class="w-full d-flex mb-2">
		<view class="">
			<u-image src="https://img2.baidu.com/it/u=3960470193,627689163&fm=26&fmt=auto&gp=0.jpg" width="80upx" height="80upx"  shape="circle"></u-image>
		</view>
		<view class="ml-3 d-flex flex-column pt-2 pb-2 flex-1" style="border-bottom: 2upx solid #f7f7f7;">
			<view class=" d-flex flex-column">
				<text>{{model.nickName}}</text>
				<text class="font-xs color-grey">{{time(model.created)}}</text>
			</view>
			<view class="p-2">
				<u-parse :html="model.content"></u-parse>
			</view>
			<view class="d-flex pt-2 pr-4">
				<view class="d-flex align-center mr-5" @click="handleLight">
					<u-image class="mr-1" src="/static/noLight.png" width="40upx" mode="widthFix"></u-image>
					<text class="font-xs color-grey">亮了({{model.light}})</text>
				</view>
				<view class="d-flex align-center mr-5" v-if="model.replayNum && showComment && model.replayNum>0" @click="handleComment">
					<u-image class="mr-1" src="/static/comment.png" width="40upx" mode="widthFix"></u-image>
					<text class="font-xs color-grey" >评论({{model.replayNum || ""}})</text>
				</view>
				<view class="d-flex align-center mr-5" v-if="showComment" @click="handleReplay">
					<u-image class="mr-1" src="/static/replay.png" width="40upx" mode="widthFix"></u-image>
					<text class="font-xs color-grey">回复</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {dateDistance} from "../../../util/time.js"
	export default {
		props:{
			model:{
				type:Object,
				required:true
			},
			showComment:{
				type:Boolean,
				default:true
			}
		},
		data() {
			return {
				dateDistance,
				showReplay:false
			}
		},
		methods: {
			time(d){
				const t = this.dateDistance(d)
				console.log(t)
				if(t[0]==0){
					return "刚刚";
				}
				return t[0] + t[1] + "前"
			},
			handleLight(){},
			handleReplay(){
				console.log(122)
				this.$emit("onReplay",this.model)
			},
			handleComment(){
				console.log(this.model,"model")
				// this.showReplay = true
				uni.navigateTo({
					url:"/pages/forum/ReplayComment/ReplayComment?model=" + JSON.stringify(this.model),
					animationType: 'slide-in-bottom',
				})
			}
		}
	}
</script>

<style>

</style>
