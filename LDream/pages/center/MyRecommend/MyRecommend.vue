<template>
	<view>
		<view class="bar">
			<u-navbar back-text="返回" title="我的推荐" :is-fixed="true"></u-navbar>
		</view>
		<!-- <uni-list>
		    <uni-list-item clickable title="经典回顾 库里62分全场比赛录像" direction="column" v-for="item in list" @click="handleGoto(item)">
				<view slot="body" class="slot-box slot-text d-flex justify-between align-center" style="flex-direction: row;">
					<text>{{item.title}}</text>
					<text style="font-size: 24upx;" class="color-grey">来源{{cateName(item.cateId)}}</text>
				</view>
				<template slot="footer">
					<view class="d-flex align-center pt-3" style="flex-direction: row;">
						<text style="font-size: 24upx;" class="mr-2 color-grey">{{item.commentNum}}</text>
						<u-image class="mr-1" src="/static/comment.png" width="40upx" mode="widthFix"></u-image>
					</view>
				</template>
			</uni-list-item>
		</uni-list> -->
	</view>
</template>


<script>
	import confirm from "../../../util/confirm.js"
	export default {
		data() {
			return {
				redommendList:[]
			}
		},
		mounted(){
			this.handleGetMyRecommend()
		},
		methods: {
			async handleGetMyRecommend(){
				const resp = await this.$http({url:"/post/getRecommend",data:{userId:this.$user._id},method:"get"})
				confirm(resp,(data)=>{
					console.log(data,"data==>>")
				})
			}
		}
	}
</script>

<style>

</style>
