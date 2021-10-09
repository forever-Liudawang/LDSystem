<template>
	<view>
		<view class="bar">
			<u-navbar back-text="返回" title="我的推荐" :is-fixed="true"></u-navbar>
		</view>
		<uni-list>
		    <uni-list-item clickable title="" direction="column" v-for="item in list" @click="handleGoto(item)">
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
		</uni-list>
	</view>
</template>


<script>
	import confirm from "../../../util/confirm.js"
	import { forumCate } from "../../../util/config.js"
	import {mapMutations} from "vuex"
	export default {
		data() {
			return {
				list:[],
				forumCate
			}
		},
		computed:{
			cateName(){
				return function(cateId){
					for(let i=0;i<this.forumCate.length;i++){
						if(cateId == this.forumCate[i].cateId){
							return this.forumCate[i].value
						}
					}
				}
			}
		},
		mounted(){
			this.handleGetMyRecommend()
		},
		methods: {
			async handleGetMyRecommend(){
				const resp = await this.$http({url:"/post/getRecommend",data:{userId:this.$user._id},method:"get"})
				confirm(resp,(data)=>{
					this.list = data;
				})
			},
			handleGoto(curPost){
				uni.navigateTo({
					url:"/pages/forum/postDetail/postDetail?postId=" + curPost._id
				})
			}
		}
	}
</script>

<style>

</style>
