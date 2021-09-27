<template>
	<view class="p-3 post mb-2" @click="handleTo()">
		<view class="d-flex align-center" >
			<view class=" mr-3 avatar">
				<u-image src="https://img2.baidu.com/it/u=3960470193,627689163&fm=26&fmt=auto&gp=0.jpg" width="88upx" height="88upx"  shape="circle"></u-image>
			</view>
			<view class="">
				<text class="nickname">{{postData.userName}}</text>
			</view>
		</view>
		<view class="mt-2">
			<text class="titleName">{{postData.title}}</text>
		</view>
		<view v-if="imgs.length>0" :class="['imgs','mt-2','d-flex',{'justify-between':surplusImg>=3}]" >
			<u-image :class="{'ml-2':index>=1}"  @click.native.stop="handlePreviewImg(index)" v-for="(item,index) in imgs" :src="item" width="32%" height="200upx" ></u-image>
			<view v-if="surplusImg>=3" class="imgMask" @tap.stop="handlePreviewImg(2)">
				<text class="num">+{{surplusImg-3}}</text>
			</view>
		</view>
		<view class="comment w-full p-2 mt-2" >
			<view class="d-flex justify-between">
				<u-image src="/static/hotComment.png" width="60upx" mode="widthFix"></u-image>
				<view class="d-flex align-center">
					<text class="mr-1">98</text>
					<u-image src="/static/noLight.png" height="50upx"  mode="heightFix"></u-image>
				</view>
			</view>
			<view class="hotComment">
				<text class="nickname">斯蒂芬库里</text>: &nbsp;
				<text class="commentContent">斯蒂芬库里斯蒂芬库里斯蒂芬库里斯蒂芬库里斯蒂芬库里</text>
			</view>
		</view>
		<view class=" util d-flex justify-around mt-2" @tap.stop="stop" @click="handleTo()">
			<view class="d-flex align-center" @click="handleShare">
				<u-image class="mr-1" src="/static/share.png" width="40upx" mode="widthFix"></u-image>
				<text>4</text>
			</view>
			<view class="d-flex align-center">
				<u-image class="mr-1" src="/static/comment.png" width="40upx" mode="widthFix"></u-image>
				<text>{{postData.commentNum}}</text>
			</view>
			<view class="d-flex align-center" @click="handleLight">
				<u-image  v-if="lighted" class="mr-1" src="/static/praised.png" width="40upx" mode="widthFix"></u-image>
				<u-image  v-else class="mr-1" src="/static/praise.png" width="40upx" mode="widthFix"></u-image>
				<text>{{postData.light}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import confirm from "../../util/confirm.js"
	import {mapMutations} from "vuex"
	import uniShare from '@/uni_modules/uni-share/js_sdk/uni-share.js';
	export default {
		name:"Post",
		props:{
			posts:{
				type:Object,
				required:true
			}
		},
		data() {
			return {
				currentImgIndex:0,
			};
		},
		mounted() {
		},
		computed:{
			surplusImg: function(){
				return this.posts.data.media.length
			},
			imgs:function(){
				return this.posts.data.media.slice(0,3) || []
			},
			postData:function(){
				return this.posts.data || {}
			},
			lighted:{
				get:function(){
					return this.posts.lighted || false
				},
				set:function(val){
					this.posts.lighted = val;
				}
			}
		},
		methods:{
			...mapMutations(["setCurrentPost"]),
			handlePreviewImg(index){
				// e.stopPropagation()
				uni.previewImage({
					urls: this.posts.data.media,
					current:index,
					indicator:"number",
					loop:true,
					longPressActions: {
						itemList: ['保存图片'],
						success: (data)=>{
							console.log(data)
							uni.saveImageToPhotosAlbum({
								filePath:this.imgs[data.index],
								success: (data) => {
									uni.showToast({
										title:"成功保存至相册",
										icon:"none"
									})
								}
							})
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			},
			stop(){
			},
			handleTo(){
				this.setCurrentPost(this.posts)
				uni.navigateTo({
					url:"/pages/forum/postDetail/postDetail"
				})
			},
			async handleLight(){
				if(!this.$user){
					uni.showToast({
						title:"请先登录",
						icon:"none"
					})
				}else if(!this.lighted){
					const resp = await this.$http({url:"/post/light",data:{postId:this.postData._id,userId:this.$user._id}})
					confirm(resp,()=>{
						this.lighted = true
						this.postData.light+=1
					})
				}else if(this.lighted){
					const resp = await this.$http({url:"/post/unLight",data:{postId:this.postData._id,userId:this.$user._id}})
					confirm(resp,()=>{
						this.lighted = false
						this.postData.light-=1
					})
				}
			},
			handleShare(){
				uniShare({
					content:{
						type: 0,
						href:"http://localhost:8080/#/",
						title: '标题',
						summary: '描述',
						imageUrl: '/static/logo.png'
					},
					menus:[{
						"img": "/static/wechat.png",
						"text": "微信好友",
						"share": { //当前项的分享参数配置。可覆盖公共的配置如下：分享到微信小程序，配置了type=5
							"provider": "weixin",
							"scene": "WXSceneSession"
						}
					}],
					cancelText: "取消分享",
				})
			}
		}
	}
</script>

<style lang="scss">
	.post{
		background-color: #fff;
		.avatar{
			width: 10%;
			border-radius: 50%;
		}
		.nickname{
			color: #7a7d82;
		}
		.titleName{
			letter-spacing: 2upx;
			font-size: 32upx;
		}
		.imgs{
			position: relative;
			/deep/ .u-image__image{
				border-radius: 12upx !important;
			}
			.imgMask{
				background-color: rgba(50,50,45,.52);
				// opacity: .9;
				position: absolute;
				right: 0;
				width:32%;
				height:200upx;
				border-radius: 12upx !important;
				display: flex;
				justify-content: center;
				align-items: center;
				.num{
					color: #fff;
					font-size: 38upx;
				}
			}
		}
		.comment{
			background: #f8f8fc;
			border-radius: 10upx;
		}
		.hotComment{
			.nickname{
				color: #939393;
			}
			.commentContent{
				
			}
		}
		.util{
			color: #939393;
		}
	}
</style>
