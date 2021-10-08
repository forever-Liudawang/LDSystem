<template>
	<view class="forumIndex d-flex flex-column" @touchmove.stop="()=>{}"  @touch.stop="()=>{}">
		<!-- <u-sticky :offset-top="0" :index="122" bg-color="#fff"> -->
			<view class="header" style="background-color: #fff;">
				<view>
					<TopBar />
				</view>
				<view class="w-full pt-2 pb-2 mt-3 cate">
					<scroll-view class="w-full scroll-container" scroll-x="true" scroll-with-animation="true">
						<view class=" d-flex w-full justify-between pl-2 pr-2">
							<view v-for="item in forumCate" :class="['item',{'active':curCate.id == item.id}]" @click="handleSelectCate(item)">{{item.value}}</view>
						</view>
					</scroll-view>
				</view>
			</view>
		<!-- </u-sticky> -->
		<<!-- scroll-view class="comments flex-1"  
			scroll-y="true" 
			@scrolltolower="loadMore" 
			@refresherrefresh="handleRefresh" 
			refresher-enabled="true"
			refresher-default-style="black"
			:refresher-threshold="20"
			:refresher-triggered="triggered">
			
			<Post v-for="item in posts" :posts="item"/>
		</scroll-view> -->
		<view class="comments flex-1"  @touchmove.stop="()=>{}"  @touch.stop="()=>{}">
				<view class="">
					<Post v-for="item in posts" :posts="item"/>
				</view>
		</view>
	</view>
</template>
<script>
	import TopBar from "../../../components/TopBar/TopBar.vue"
	import {forumCate} from "../../../util/config.js"
	import Post from "../../../components/Post/Post.vue"
	import confirm from "../../../util/confirm.js"
	import {mapState,mapGetters} from "vuex"
	export default {
		components: {
			TopBar,
			Post,
		},
		mounted(){
			this.getData()
		},
		data() {
			return {
				forumCate,
				curCate:{id:1,cateId:1,value:"校园",label:"校园"},
				posts:[],
				triggered: false
			}
		},
		computed:{
			...mapGetters(["userID"])
		},
		onPageScroll(pos) {
		},
		onPullDownRefresh(){
			console.log("refresh")
			this.getData(()=>{
				uni.showToast({
					title:"刷新成功",
					icon:"none"
				})
				uni.stopPullDownRefresh()
			})
		},
		methods: {
			handleSelectCate(val){
				this.curCate = val
				this.getData()
			},
			async getData(cb){
				const data = {
					userId: this.userID,
					cateId:this.curCate.cateId
				}
				const resp = await this.$http({url:"/post/getPost",method:"get",data})
				confirm(resp,(data)=>{
					console.log(data,"data==>>")
					this.posts = data || []
					cb && cb();
				})
			},
			stopMove(){},
			handleRefresh(){
				setTimeout(()=>{
					this.triggered = false
				},2000)
			},
			loadMore(){
				
			}
		}
	}
</script>

<style lang="scss">
	.forumIndex{
		padding-top:var(--status-bar-height);
		// height: 100vh;
		overflow: auto;
		box-sizing: border-box;
		position: relative;
		padding-bottom: 100upx;
		.cate{
			box-shadow:0px 6upx 6upx #ccc;
		}
		.header{
			padding-top:var(--status-bar-height);
			position: fixed;
			width: 100%;
			top: 0;
			z-index: 10002;
		}
		.scroll-container {
			width: 100%;
			height: 60upx;
			white-space: nowrap;
			position: relative;
			.item {
				font-size: 34upx;
				display: inline-block;
				color: #9a9a9a;
				height: 40upx;
				font-weight: 600;
			}
			.active {
				color: #d81e06;
			}
		}
		.comments{
			background: #f5f5f5;
			margin-top: 224upx;
		}
	}
</style>
