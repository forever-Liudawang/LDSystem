<template>
	<view class="music">
		<view >
			<u-tabs-swiper font-size="36" style="background-color:#d81e06;font-weight: bold;" ref="uTabs" 
				active-color="#fff" 
				inactive-color="#fff" 
				:list="list" 
				:current="current" 
				@change="tabsChange" 
				:is-scroll="false"
				swiperWidth="750"
			>
			</u-tabs-swiper>
		</view>
		<swiper class="flex-1" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item h-full" >
				<scroll-view scroll-y class="h-full" style="width: 100%;" @scrolltolower="loadMoreRecommend">
					<Recommend ref="recommend"/>
				</scroll-view>
			</swiper-item>
			<swiper-item class="swiper-item h-full" >
				<scroll-view scroll-y class="h-full" style="width: 100%;" @scrolltolower="onreachBottom">
					<Singer/>
				</scroll-view>
			</swiper-item>
			<swiper-item class="swiper-item h-full" >
				<scroll-view scroll-y class="h-full" style="width: 100%;" @scrolltolower="onreachBottom">
					<RankingList/>
				</scroll-view>
			</swiper-item>
		</swiper>
		<view class="">
			<MusicPlay />
		</view>

	</view>
</template>

<script>
	import BScroll from "better-scroll";
	import confirm from "../../../util/confirm.js"
	import Recommend from "../Recommend/Recommend.vue"
	import Singer from "../Singer/Singer.vue"
	import RankingList from "../RankingList/RankingList.vue"
	import MusicPlay from  "../MusicPlay/MusicPlay.vue"
	export default {
		components:{
			Recommend,
			Singer,
			RankingList,
			MusicPlay,
		},
		data() {
			return {
				bannerList: [],
				recommendList:null,
				list: [{
					name: '推荐'
				}, {
					name: '歌手'
				}, {
					name: '排行榜',
				}],
				current: 0,
				swiperCurrent:0
			}
		},
		computed:{
			playCount(){
				return function(val){
					return (val/10000).toFixed(2)
				}
			}
		},
		mounted() {
		},
		methods: {
			handleSelect(item) {
				this.curCate = item
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
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			loadMoreRecommend(){
				this.$refs.recommend.pageIndex++
				this.$refs.recommend.handleGetRecomendList()
				console.log(this.$refs.recommend)
			},
			// scroll-view到底部加载更多
			onreachBottom() {
				console.log(1222)
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
