<template>
	<view class="singer w-full">
		<view class="pt-4 w-full">
			<view class="d-flex sex">
				<text style="color: grey;">分类:</text>
				<view class="ml-2">
					<text :class="['ml-3','item',{active:item.id == curSex.id}]" v-for="item in sexList" @click="handleChangeSex(item)">{{item.label}}</text>
				</view>
			</view>
		</view>
		<view class="pt-4 character w-full">
			<view class="d-flex character align-center w-full">
				<view style="color: grey;white-space: nowrap;width: 14%;">首字母:</view>
				<view style="width: 86%;">
					<scroll-view scroll-x="true" class="w-full">
						<view  style="height: 60upx;line-height: 60upx;">
							<text :class="['item',{active:item.key == curCharacter.key}]" v-for="item in character" @click="handleChangeCharacter(item)">{{item.name}}</text>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
		<view class="pt-4 region w-full">
			<view class="d-flex character align-center w-full">
				<view style="color: grey;white-space: nowrap;">地区:</view>
				<view>
					<scroll-view scroll-x="true" class="w-full">
						<view class="ml-3"  style="height: 60upx;line-height: 60upx;">
							<text :class="['item',{active:item.id == curRegion.id}]" v-for="item in regionList" @click="handleChangeRegion(item)">{{item.label}}</text>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
		<scroll-view class="flex-1" style="height: calc(100% - 250upx);" scroll-y="true" @scrolltolower="loadMore">
			<view @click="handleToDetail(item)" v-for="(item,index) in singerList" class="d-flex align-center pb-2 mt-2" style="border-bottom: 2upx solid #eeeeee;">
				<!-- <u-lazy-load :image="item.img1v1Url" height="100upx" width="100upx"  border-radius="6">
					
				</u-lazy-load> -->
				<u-lazy-load
					img-mode="heightFix"
					:image="`${item.picUrl}?param=250x300`"
					height="100upx" width="100upx" border-radius="6"></u-lazy-load>
				<text class="ml-4">{{item.name}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import character from "../character.js"
	import confirm from "../../../util/confirm.js"
	export default {
		data() {
			return {
				sexList:[{label:"全部",id:-1},{label:"男歌手",id:1},{label:"女歌手",id:2},{label:"乐队",id:3}],
				curSex:{label:"全部",id:-1},
				character,
				curCharacter:{key:"",name:""},
				regionList:[{label:"全部",id:-1},{label:"华语",id:7},{label:"欧美",id:96},{label:"日本",id:8},{label:"韩国",id:16},{label:"其他",id:0}],
				curRegion:{label:"全部",id:-1},
				singerList:[],
				page:0,
				listPage:0
			}
		},
		mounted(){
			this.handleGetHotSinger()
		},
		methods: {
			handleChangeSex(item){
				if(item.id != this.curSex.id){
					this.listPage = 0;
					this.curSex = item
					this.singerList = []
					this.handGetSingerList()
				}
			},
			handleChangeCharacter(item){
				if(item.key != this.curCharacter.key){
					this.listPage = 0;
					this.curCharacter = item
					this.singerList = []
					this.handGetSingerList()
				}
			},
			handleChangeRegion(item){
				if(item.id != this.curRegion.id){
					this.listPage = 0;
					this.curRegion = item
					this.singerList = []
					this.handGetSingerList()
				}
			},
			async handleGetHotSinger(){
				uni.showLoading({
					title:"加载中",
				})
				const resp = await this.$http({url:"/music/getHotSinger",method:"get",data:{offset:this.page}})
				confirm(resp,(data)=>{
					this.singerList = [...this.singerList,...data];
					uni.hideLoading()
				})
			},
			handleToDetail(singer){
				uni.navigateTo({
					url:"/pages/music/SingerDetail/SingerDetail?id=" + singer.id,
					animationType:'pop-in',
					fail: (err) => {
						console.log(err)
					}
				})
			},
			loadMore(){
				if(this.curRegion.id!=-1 || this.curCharacter.key || this.curSex.id != -1){
					this.listPage++
					this.handGetSingerList()
				}else{
					this.page++;
					this.handleGetHotSinger()
				}
			},
			async handGetSingerList(){
				uni.showLoading({
					title:"加载中",
				})
				const data = {
					page:this.listPage,
					type:this.curSex.id,
					area:this.curRegion.id,
					initial:this.curCharacter.key.toLowerCase()
				}
				const resp = await this.$http({url:"/music/getSingerList",method:"get",data})
				confirm(resp,(data)=>{
					console.log(data)
					this.singerList = [...this.singerList,...data];
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style lang="scss">
.singer{
	padding: 6upx;
	height: 100%;
	display: flex;
	flex-direction: column;
	.sex,.character,.region{
		.item{
			padding: 8upx 12upx;
			border: 2upx solid transparent;
		}
		.active{
			color: #d81e06;
			border: 2upx solid #d81e06;
			border-radius: 16upx;
		}
	}
}
</style>
