<template>
	<view class="music">
		<view class="content" ref="scroll">
			<view class="" style="height: 800upx;">
				<view class="banner">
					<u-swiper :list="bannerList" name="pic" border-radius="0"></u-swiper>
				</view>
				<view class="listBox">
					<view class="title">
						推荐歌单
					</view>
					<view class="d-flex justify-between flex-wrap mt-3 " v-if="recommendList">
						<view class="item" style="width: 32%;" v-for="recomend in recommendList">
							<view class="w-full" @click="()=>handleToDetail(recomend)">
								<u-lazy-load
									:image="`${recomend.picUrl}??param=300x300`"
									width="100%" height="238upx" border-radius="6"></u-lazy-load>
							</view>
							<view class="desc">
								{{recomend.name}}
							</view>
							<view class="listen d-flex justify-end">
								<u-image src="/static/listen.svg" width="30upx" mode="widthFix" border-radius="6">
								</u-image>
								<text style="font-size:24upx;" class="ml-1">{{playCount(recomend.playCount)}}万</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import BScroll from "better-scroll";
	import confirm from "../../../util/confirm.js"
	export default {
		data() {
			return {
				bannerList: [],
				recommendList:null
			}
		},
		computed:{
			playCount(){
				return function(val){
					return (val/100000).toFixed(2)
				}
			}
		},
		mounted() {
			this.handleGetBanner()
			this.handleGetRecomendList()
		},
		methods: {
			handleSelect(item) {
				this.curCate = item
			},
			async handleGetBanner() {
				const resp = await this.$http({
					url: "/music/getBannerList",
					method: "get"
				})
				confirm(resp, (data) => {
					this.bannerList = data.banners
				})
			},
			async handleGetRecomendList(){
				uni.showLoading({
					title:"加载中...."
				})
				const resp = await this.$http({
					url: "/music/getRecommendList",
					method: "get",
					data:{
						pageIndex:0,
						pageSize:9
					}
				})
				confirm(resp,(data)=>{
					uni.hideLoading()
					this.recommendList = data || []
				})
			},
			handleToDetail(recomend){
				uni.navigateTo({
					url:"/pages/music/Detail/Detail?id=" + recomend.id,
					animationType:'pop-in',
					fail: (err) => {
						console.log(err)
					}
				})
			},
			initScroll() {
				const scroll = new BScroll(this.$refs.scroll.$el, {
					scrollX: false,
					scrollY: true,
					probeType: 3,
				})
			}
		}
	}
</script>

<style lang="scss">
	.music {
		padding-top: var(--status-bar-height);
		height: 100%;
		display: flex;
		flex-direction: column;
		.header {
			height: 8%;
			width: 100%;
			background: #d81e06;
			display: flex;
			justify-content: space-around;
			align-items: center;
			color: #fff;
			font-size: 30rpx;
			font-weight: bold;

			.cate {
				border-bottom: 4rpx solid transparent;
			}

			.active {
				border-bottom: 4rpx solid #fff;
			}
		}

		.content {
			flex: 1;
			overflow: auto;

			.listBox {
				padding: 10upx 6upx;

				.title {
					font-size: 32upx;
					font-weight: bold;
				}

				.desc {
					overflow: hidden;
					margin-top: 2px;
					padding: 0 2px;
					height: 50px;
					text-align: left;
					font-size: 24upx;
					line-height: 1.4;
					color: #2E3030;
				}

				.item {
					position: relative;
				}

				.listen {
					position: absolute;
					top: 4upx;
					right: 10upx;
					color: #e7e7e7;
				}
			}
		}
	}
</style>
