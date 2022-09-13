<template>
	<view class="publicPost d-flex flex-column">
		<view class="d-flex justify-between pl-3 pr-3">
			<text @click="handleBack" class="font-weigth-bold">取消</text>
			<text class="font-sm font-weigth-bold">发帖子</text>
			<text class="font-weigth-bold" @click="handlePublic">发布</text>
		</view>
		
		<view class="">
			<u-field label-width="80" label="标题" v-model="title" placeholder="请输入标题" />
		</view>
		<view class="mt-2">
			<u-field disabled label-width="80" label="分类" v-model="cateVal.label" placeholder="">
				<u-button slot="right" class="color-primary" :ripple="true" @click="showCate = true" size="mini"
					shape="square" ripple-bg-color="#991013">分类选择</u-button>
			</u-field>
			<u-select v-model="showCate" :list="cateList" @confirm="handleConfirm"></u-select>
		</view>
		<view class="p-2 editorSet flex-1 d-flex flex-column">
			<view class="flex-1">
				<editor id="editor" class="p-1 pl-2" style="height: 80%;" placeholder="为生活添点乐趣" @ready="onEditorReady">
				</editor>
			</view>

		</view>
		<view class="util  w-full pl-4 pr-5 pb-3">
			<view class="d-flex justify-between mt-2" style="border-top: 2upx solid #f5f5f5;">
				<view class="" @click="handleImg">
					<u-icon name="photo" :color="videoSrc?'#ccc':''" size="50"></u-icon>
				</view>
				<view @click="handleUndo">
					<u-icon name="arrow-leftward" size="50"></u-icon>
				</view>
				<view @click="handleRedo">
					<u-icon name="arrow-rightward" size="50"></u-icon>
				</view>
				<view @click="handleVideo">
					<u-icon name="play-circle-fill" size="50"></u-icon>
				</view>
			</view>

		</view>
		<view class="pos-fix videoBox" style="bottom: 20%;" v-if="videoSrc">
			<view class="deleteVideo" @click="deleteVideo">
				<u-icon name="close-circle" size="40" class="color-primary"></u-icon>
			</view>
			<video :src="videoSrc" controls class="post-rel w-full">
			</video>
		</view>
	</view>
</template>

<script>
	import {
		cateList
	} from "../../../util/config.js"
	import {
		BaseURL
	} from "../../../util/request.js"
	import confirm from "../../../util/confirm.js"
	import {mapGetters,mapState} from "vuex"
	export default {
		data() {
			return {
				title: "",
				showCate: false,
				cateList,
				cateVal: {
					value: ""
				},
				editorCtx: null,
				videoSrc: null
			}
		},
		computed:{
			...mapGetters(["userID"]),
			...mapState(["userInfo"])
		},
		mounted() {},
		methods: {
			handleBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			handleConfirm(val) {
				console.log(val)
				this.cateVal = val[0];
				console.log(val[0])
			},
			onEditorReady() {
				uni.createSelectorQuery().select('#editor').context((res) => {
					this.editorCtx = res.context;
				}).exec()
			},
			handleGetImgSrc(str) {
				const imgReg = /<img.*?(?:>|\/>)/gi;
				//匹配src属性
				const srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
				const arr = str.match(imgReg) || [];
				let arrSrc = []
				for (let i = 0; i < arr.length; i++) {
					const src = arr[i].match(srcReg)[1];
					arrSrc.push(src)
				}
				return arrSrc
			},
			handleImg() {
				if (this.videoSrc) {
					uni.showToast({
						title: "图片和视频不能同时添加!",
						icon: "none",
						duration: 1000
					})
					return
				}
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						console.log(res);
						const imgPath = res.tempFilePaths[0]
						uni.uploadFile({
							url: BaseURL + "/post/uploadImg",
							filePath: imgPath,
							name: "file",
							success: (res) => {
								if (res && res.data) {
									const resp = JSON.parse(res.data)
									if (resp && resp.success) {
										console.log(resp)
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
			handlePublic() {
				if (this.title == "") {
					uni.showToast({
						title: "请输入标题",
						icon: "none"
					})
					return
				} else if (this.cateVal.value == "") {
					uni.showToast({
						title: "请选择分类",
						icon: "none"
					})
					return
				}else if(!this.userID){
					uni.showToast({
						title:"请先登录",
						icon: "none"
					})
					return
				}
				const content = this.editorCtx.getContents({
					success: async (res) => {
						const imgs = this.handleGetImgSrc(res.html)
						const body = {
							title:this.title,
							cateId:this.cateVal.value,
							content:res.html,
							media:imgs,
							userId:this.userID,
							avatar:this.userInfo.avatar,
							userName: this.userInfo.userName
						}
						const resp = await this.$http({url:"/post/insert",data:body})
						confirm(resp,()=>{
							uni.showToast({
								title:"发布成功",
								icon:"none"
							})
							setTimeout(()=>{
								uni.navigateBack({
									delta: 1
								})
							},1500)
						})
					}
				})
			},
			handleUndo() {
				this.editorCtx.undo({

				})
			},
			handleRedo() {
				this.editorCtx.redo({

				})
			},
			handleVideo() {
				uni.chooseVideo({
					count: 1,
					sourceType: ['camera', 'album'],
					success: (res) => {
						this.videoSrc = res.tempFilePath
					}
				});
			},
			deleteVideo() {
				this.videoSrc = null;
			}
		}
	}
</script>

<style lang="scss">
	.publicPost {
		// height: 100vh;
		padding-top: var(--status-bar-height);

		.util {
			position: fixed;
			bottom: 0;
			background-color: #fff;
		}

		.videoBox {
			left: 0;
			width: 80%;

			.deleteVideo {
				position: absolute;
				top: -30upx;
				right: -30upx;
			}
		}
	}
</style>
