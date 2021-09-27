<template>
	<view class="replayComment ">
		<view class="pl-2 pr-2">
			<view class="bar">
				<u-navbar back-text="返回" title="查看回复" :is-fixed="true"></u-navbar>
			</view>
			<view class="pt-4 ">
				<Comment :model="model" :showComment="false"/>
			</view>
			<view class="pt-2 sticky bg-white pt-2 pb-2">
				<text style="font-size: 32upx;font-weight: bold;">全部回复</text>
			</view>
			<view class="">
				<Comment  v-for="(item,index) in replayCommentes" :model="item" :key="item._id"/>
			</view>
			<view class="util">
				<view style="line-height: 84upx;width: 90%;">
					<u-search placeholder="我来评论"  style="font-size: 24upx;"  class="w-full" @focus="handleOnFocus"></u-search>
				</view>
			</view>
		</view>
		<view class="commentMask" v-if="showComment">
			<view class="mask flex-1" @click="showComment = false">
				
			</view>
			<view class="bg-white  commentBox p-2 d-flex flex-column">
				<text class="" style="font-size: 24upx;">
					回复{{model.nickName}}
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
	import Comment from "../Comment/Comment.vue"
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
				model:{},
				replayCommentes:[],
				showComment:false,
				videoSrc:'',
				editorCtx:null
			}
		},
		onLoad(option){
			console.log(option)
			const {commentId,model} = option
			this.model = JSON.parse(model)
		},
		mounted(){
			this.getReplayComment();
		},
		methods: {
			async getReplayComment(){
				const resp = await this.$http({url:"/comment/getReplayComment",data:{commentId:this.model._id},method:"get"})
				confirm(resp,(data)=>{
					console.log(data)
					this.replayCommentes = data
				})
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
			handleOnFocus(){
				if(!this.$user){
					uni.showToast({
						title:"请先登陆",
						icon:"none"
					})
					return
				}
				this.showComment = true
			},
			//发表评论
			async handlePublicComment(){
				const content = this.editorCtx.getContents({
					success: async (res) => {
						const body = {
							postId:this.model._id,
							userId:this.$user._id,
							commentId:this.model._id,
							content:res.html,
							avatar:this.$user.avatar,
							nickName:this.$user.userName,
							isReplay:true
						}
						const resp = await this.$http({url:"/comment/insert",data:body})
						confirm(resp,()=>{
							uni.showToast({
								title:"发布成功",
								icon:"none"
							})
							this.showComment = false
							this.getReplayComment()
						})
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
.replayComment{
	padding-top:var(--status-bar-height);
	.sticky{
		position: sticky;
		top: 88upx;
		z-index: 1999;
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
