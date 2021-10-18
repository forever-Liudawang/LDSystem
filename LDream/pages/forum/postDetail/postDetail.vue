<template>
	<view class="pt-5 postDetail d-flex flex-column">
		<view class="bar">
			<u-navbar back-text="返回" :title="cateName()" :is-fixed="true"></u-navbar>
		</view>
		<view class="flex-1 main">
			<view class="title pl-2 pr-2" style="font-weight: bold;font-size: 44upx;">
				{{curPost.data.title}}
			</view>
			<view class="p-3 d-flex align-center justify-between">
				<view class=" d-flex align-center">
					<view class="" >
						<u-image :src="curPost.data.avatar" width="88upx" height="88upx"  shape="circle"></u-image>
					</view>
					<view class="ml-3 d-flex flex-column">
						<text>{{curPost.data.userName}}</text>
						<text class="font-xs mt-1">{{time(curPost.data.updated)}}前</text>
					</view>
				</view>
				<view class="">
					<u-button type="primary" size="mini" class="bg-primary" v-if="!isFollowed" @click="handleFollow">
						<u-icon name="plus" size="20" ></u-icon>
						关注
					</u-button>
					<u-button  size="mini"  v-else @click="handleCancelFollow">
						已关注
					</u-button>
				</view>
			</view>
			<view class="content p-2 font-sm">
				<u-parse :html="curPost.data.content"></u-parse>
			</view>
			<view class="w-full bg-grey" style="height: 36upx;">
				
			</view>
			<view class="commentWrapper p-2">
				<view class="d-flex justify-between">
					<text class="font-md">评论</text>
					<view class="d-flex justify-between align-center" @click="showSortType = true">
						<u-image src="/static/sort.png" width="40upx" height="40upx"></u-image>
						<text class="ml-2">{{sortType.label}}</text>
						<u-select v-model="showSortType" :list="sortList" @confirm="handleSort" confirm-color="#d81e06" :default-value="[1]"></u-select>
					</view>
				</view>
				<view class="pt-2">
					<Comment v-for="item in commentes" :model="item" :key="item._id" @onReplay="handleReplay"/>
				</view>
			</view>
		</view>
		<view class="util">
			<view style="line-height: 84upx;width: 60%;">
				<u-search placeholder="我来评论" v-model="commentInfo" style="font-size: 24upx;"  class="w-full" @focus="handleOnFocus"></u-search>
			</view>
			<view class="flex-1 d-flex justify-around">
				<view class="d-flex flex-column align-center ">
					<text class="color-grey">{{total || 0}}</text>
					<u-image src="/static/comment.png" width="40upx" height="40upx"></u-image>
				</view>
				<view class="d-flex flex-column align-center" @click="handleLight">
					<text class="color-grey">{{curPost.data.light}}</text>
					<u-image v-if="!curPost.lighted" src="/static/praise.png" width="40upx" height="40upx" ></u-image>
					<u-image v-else src="/static/praised.png" width="40upx" height="40upx" ></u-image>
				</view>
				<view class="d-flex flex-column align-center">
					<text class="color-grey">218</text>
					<u-image src="/static/share.png" width="40upx" height="40upx" ></u-image>
				</view>
			</view>
		</view>
		<view class="commentMask" v-if="showComment">
			<view class="mask flex-1" @click="showComment = false">
				
			</view>
			<view class="bg-white  commentBox p-2 d-flex flex-column">
				<text class="" style="font-size: 24upx;">
					{{commentTitle}}
				</text>
				<view class="editorBox pt-2 flex-1" style="overflow: auto;">
					<editor id="editor" class="p-1 pl-2" style="height: 85%;" placeholder="说说你的看法..." @ready="onEditorReady"></editor>
				</view>
				<view class="d-flex justify-between p-1">
					<view class="">
						<u-icon name="photo" size="50" @click="handleImg"></u-icon>
						<u-icon name="play-circle-fill" size="50" class="ml-2" @click="handleVideo"></u-icon>
					</view>
					<view class="">
						<u-button type="primary" size="mini" class="bg-primary" shape="circle" @click="handlePublicComment">
							发表
						</u-button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from "vuex"
	import Comment from "../Comment/Comment.vue"
	import {forumCate} from "../../../util/config.js"
	import {dateDistance} from "../../../util/time.js"
	import confirm from "../../../util/confirm.js"
	import {
		BaseURL
	} from "../../../util/request.js"
	export default {
		components:{
			Comment
		},
		data() {
			return {
				commentInfo:"",
				editorCtx:null,
				showComment:false,
				forumCate,
				dateDistance,
				isFollowed:false,
				pageIndex:0,
				commentes:[],
				showSortType:false,
				sortType:{
						label: '最早回复',
						value: 2,
				},
				sortList:[
					{
						label: '最晚回复',
						value: 1,
					},
					{
						label: '最早回复',
						value: 2,
					},
					{
						label: '亮度排序',
						value: 3,
					}
				],
				isReplay:false,
				commentTitle:"发布评论",
				replyModel:null,
				total:0,
				postId:null,
				curPost:{data:{},lighted:false}
			}
		},
		computed:{
			// ...mapState(["curPost"]),
			
		},
		watch:{
			curPost(){
				console.log("changeing")
				this.hadFollowing()
			}
		},
		mounted(){
			// this.hadFollowing()
		},
		onLoad(options){
			console.log(options)
			const {postId} = options
			this.postId = postId
			console.log(postId,"postId====")
			this.getPostData(postId)
			this.handleGetComments(postId)
		},
		methods: {
			...mapMutations(["setCurrentPost"]),
			time(d){
				const t = this.dateDistance(d)
				return t[0] + t[1]
			},
			cateName(){
				for(let i = 0;i<this.forumCate.length;i++){
					if(this.forumCate[i].id == this.curPost.data.cateId){
						return this.forumCate[i].value
					}
				}
			},
			handleBack(){
				uni.navigateBack({
					delta:1
				})
			},
			handleOnFocus(){
				console.log("foucs")
				if(!this.$user){
					uni.showToast({
						title:"请先登陆",
						icon:"none"
					})
					return
				}
				this.showComment = true
			},
			onEditorReady(){
				uni.createSelectorQuery().select('#editor').context((res) => {
				    this.editorCtx = res.context
				}).exec()
			},
			handleImg(){
				if(this.videoSrc){
					uni.showToast({
						title:"图片和视频不能同时添加!",
						icon:"none",
						duration:1000
					})
					return
				}
				console.log(this.editorCtx)
				uni.chooseImage({
				    count: 6, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: (res)=>{
						const imgPath = res.tempFilePaths[0]
						uni.uploadFile({
							url: BaseURL + "/post/uploadFile",
							filePath: imgPath,
							name: "file",
							success: (res) => {
								if (res && res.data) {
									const resp = JSON.parse(res.data)
									if (resp && resp.success) {
										setTimeout(()=>{
											this.editorCtx.insertImage({
												src: resp.data,
												width: "80%",
											})
										},500)
									}else{
										reject()
									}
								}
							}
						})
					}
				});
			},
			handleVideo(){
				 uni.chooseVideo({
					count: 1,
					sourceType: ['camera', 'album'],
					success: (res)=>{
						this.videoSrc = res.tempFilePath
					}
				});
			},
			async hadFollowing(){
				if(!this.$user){
					return;
				}
				const resp = await this.$http({
					url:"/follow/isFollowed",
					data:{userId:this.$user._id,tId:this.curPost.data.userId},
				})
				confirm(resp,(data)=>{
					this.isFollowed = data
				})
			},
			async handleCancelFollow(){
				const resp = await this.$http({
					url:"/follow/unFollowing",
					data:{userId:this.$user._id,tId:this.curPost.data.userId},
				})
				confirm(resp,data=>{
					console.log(data)
					if(data){
						this.isFollowed = false
					}
				})
			},
			async handleFollow(){
				console.log(this.$user,"user")
				if(!this.$user){
					uni.showToast({
						title:"请先登录",
						icon:"none"
					})
					return
				}
				const resp = await this.$http({
					url:"/follow/following",
					data:{userId:this.$user._id,tId:this.curPost.data.userId},
				})
				confirm(resp,(data)=>{
					if(data){
						uni.showToast({
							title:"关注成功",
							icon:"none"
						})
						this.isFollowed = true
					}
				})
			},
			//发表评论
			async handlePublicComment(){
				let commentId = null
				if(this.isReplay){
					commentId = this.replyModel._id
				}
				const content = this.editorCtx.getContents({
					success: async (res) => {
						const body = {
							postId:this.curPost.data._id,
							userId:this.$user._id,
							commentId,
							content:res.html,
							avatar:this.$user.avatar,
							nickName:this.$user.userName,
							isReplay:this.isReplay
						}
						const resp = await this.$http({url:"/comment/insert",data:body})
						confirm(resp,()=>{
							uni.showToast({
								title:"发布成功",
								icon:"none"
							})
							this.handleGetComments()
							this.showComment = false
							this.isReplay = false
							this.commentTitle = "发布评论"
						})
						console.log(resp)
					}
				})
			},
			async handleGetComments(pId){
				const data = {
					postId:  pId?pId:this.curPost.data._id,
					pageIndex: this.pageIndex,
					sortType:this.sortType.value
				}
				const resp = await this.$http({url:"/comment/getComment",data,method:"get"})
				confirm(resp,(data)=>{
					console.log(data)
					if(data && data[0]){
						this.commentes = data[0].data
						this.total = data[0].total[0] && data[0].total[0].total
					}
				})
			},
			//排序
			handleSort(e){
				this.sortType = e[0]
				this.handleGetComments()
			},
			handleReplay(model){
				this.isReplay = true
				this.showComment = true
				this.commentTitle = `回复[${model.nickName}]:`
				this.replyModel = model
				console.log(model)
			},
			async handleLight(){
				if(!this.$user){
					uni.showToast({
						title:"请先登录",
						icon:"none"
					})
				}else if(!this.curPost.lighted){
					const resp = await this.$http({url:"/post/light",data:{postId:this.curPost.data._id,userId:this.$user._id}})
					confirm(resp,()=>{
						this.lighted = true
						this.getPostData()
					})
				}else if(this.curPost.lighted){
					const resp = await this.$http({url:"/post/unLight",data:{postId:this.curPost.data._id,userId:this.$user._id}})
					confirm(resp,()=>{
						this.lighted = false
						this.getPostData()
					})
				}
			},
			async getPostData(pId){ 
				const resp = await this.$http({url:"/post/getPostById",data:{postId:(pId?pId:this.postId),userId:this.$user._id},method:"get"})
				confirm(resp,(data)=>{
					console.log(data,"data")
					this.curPost = data;
					// this.setCurrentPost(data)
				})
			}
		}
	}
</script>

<style lang="scss">
	.postDetail{
		height: 100vh;
		position: relative;
		.main{
			padding-bottom: 84upx;
			.content{
				letter-spacing: 4upx;
			}
			overflow: auto;
		}
		
		.util{
			position: fixed;
			background: #fff;
			display: flex;
			bottom: 0;
			width: 100%;
			height: 84upx;
			padding: 4upx 6upx;
		}
		.commentMask{
			position: fixed;
			display: flex;
			flex-direction: column;
			z-index: 2000;
			height: 100vh;
			top: 0;
			width: 100vw;
			.mask{
				background-color: rgba(35, 35, 31, 0.5);
			}
			.commentBox{
				height: 24%;
				.editorBox{
					border-bottom: 2upx solid #efefef;
				}
				#editor{
					min-height: 80upx;
				}
			}
			
		}
	}
</style>
