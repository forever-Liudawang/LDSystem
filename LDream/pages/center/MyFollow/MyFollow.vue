<template>
	<view>
		<view class="bar">
			<u-navbar back-text="返回" title="我的关注" :is-fixed="true"></u-navbar>
		</view>
		<uni-list>
			<uni-list-item :title="item.userName" v-for="item in list" clickable :note="item.sign" :thumb="item.avatar"
			     thumb-size="lg" rightText="" @click="handleToUserDetail(item)">
					<template slot="footer">
						<view class="">
							<u-button class="bg-primary" style="color:white" size="mini" @click="cancelFollow(item)">
								取消关注
							</u-button>
						</view>
					</template>
			</uni-list-item>
		</uni-list>
		<u-modal v-model="showConfirm" :zoom="false" content="是否取消关注" :show-cancel-button="true" confirm-color="#d81e06" @confirm="handleCancelFollow">
		</u-modal>
	</view>
</template>

<script>
	import confirm from "../../../util/confirm.js"
	export default {
		data() {
			return {
				list:[],
				showConfirm:false,
				currentFollow:null
			}
		},
		mounted(){
			this.getFollowList()
		},
		methods: {
			async getFollowList(){
				const resp = await this.$http({url:"/follow/getFollow",data:{userId:this.$user._id},method:"get"})
				confirm(resp,(data)=>{
					console.log(data,"data")
					this.list = data;
				})
			},
			async cancelFollow(item){
				this.currentFollow = item
				this.showConfirm = true
			},
			async handleCancelFollow(){
				if(this.currentFollow){
					const resp = await this.$http({url:"/follow/unFollowing",data:{userId:this.$user._id,tId:this.currentFollow._id}})
					confirm(resp,data=>{
						if(data){
							this.getFollowList()
						}
					})
				}
			},
			handleToUserDetail(item){
				uni.navigateTo({
					url:"/pages/center/FollowPage/FollowPage"
				})
			}
		}
	}
</script>

<style>

</style>
