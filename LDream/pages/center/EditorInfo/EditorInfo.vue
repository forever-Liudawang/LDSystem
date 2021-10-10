<template>
	<view class="editInfo">
		<view class="bar">
			<u-navbar back-text="返回" title="个人资料修改" :is-fixed="true"></u-navbar>
		</view>
		<view class="">
			<u-cell-group>
				<u-cell-item icon="setting-fill" title="头像" @click="handleShowModal(1)">
					<view slot="right-icon" class="p-2 edit logout d-flex justify-center align-center">
						<u-image :src="userInfo.avatar"  width="100upx" height="100upx"  shape="circle"></u-image>
					</view>
				</u-cell-item>
				<u-cell-item  icon="setting-fill" title="用户名" :value="userInfo.userName" @click="handleShowModal(2)"></u-cell-item>
				<u-cell-item  icon="setting-fill" title="签名" :value="userInfo.sign" @click="handleShowModal(3)"></u-cell-item>
				<u-cell-item  icon="setting-fill" title="密码" @click="handleShowModal(4)"></u-cell-item>
			</u-cell-group>
		</view>
		<view>
			<u-modal v-model="showModal" @confirm="handleConfirm" @cancel="imgSrc = null" :title="title" width="86%" :show-cancel-button="true">
				<view class="slot-content p-4">
					<view class=" d-flex justify-center align-center" v-if="type==1">
						<text>选择头像</text>
						<view class="uploadImg ml-4" @click="handleUploadAvatar">
							<u-image v-if="imgSrc" class="img" :src="imgSrc"  width="200upx" height="200upx"  shape="circle"></u-image>
							<u-icon v-else class="icon" name="plus" color="#2979ff" size="28"></u-icon>
						</view>
					</view>
					<view class="" v-if="type == 2">
						<u-field
							v-model="userName"
							label="用户名"
							required
						>
						</u-field>
					</view>
					<view class="" v-if="type == 3">
						<u-field
							v-model="sign"
							label="签名"
						>
						</u-field>
					</view>
					<view class="" v-show="type == 4">
						<u-form ref="psdRef" :model="psdModel">
							<u-form-item left-icon="lock-opened-fill" label="密码" prop="psd"><u-input v-model="psdModel.psd" type="password" /></u-form-item>
							<u-form-item left-icon="lock-fill" label="确认密码" prop="confirmPsd"><u-input v-model="psdModel.confirmPsd" type="password" /></u-form-item>
						</u-form>
					</view>
				</view>
			</u-modal>
		</view>
	</view>
</template>

<script>
	import {
		BaseURL
	} from "../../../util/request.js"
	import confirm from "../../../util/confirm.js"
	import {mapMutations} from "vuex"
	export default {
		data() {
			return {
				showModal:false,
				type:1,
				imgSrc:"",
				userName:"",
				sign:"",
				userInfo:{},
				psdModel:{
					psd:"",
					confirmPsd:""
				},
				rules:{
					psd: [
						{
							required: true,
							message: '请输入密码', 
							trigger: ['blur'],
						}
					],
					confirmPsd:[
						{
							required: true,
							message: '请确认密码',
							trigger: ['blur', 'change'],
						},
						{
							validator:(rule, value, callback)=>{
								if(value!=this.psdModel.psd){
									return false
								}
								return true
							},
							message: '两次密码不一致'
						}
					]
				}
			}
		},
		computed:{
			title(){
				switch(this.type){
					case 1:
						return "头像修改";
					case 2:
						return "用户名修改";
					case 3:
						return "修改签名";
					case 4:
						return "修改密码";
					default:
						return "修改资料";
				}
			}
		},
		mounted(){
			this.getUserInfo();
			console.log(this.$refs,"refs===")
		},
		async onUnload(){
			//返回中心页重新掉一遍解耦更新数据（防止数据改动没有同步）
			if(!this.$user)return
			const resp = await this.$http({url:"/user/getUserById",data:{userId:this.$user._id},method:"get"})
			confirm(resp,data=>{
				this.login(data)
			})
		},
		methods: {
			...mapMutations(["login","logout"]),
			handleShowModal(type){
				this.showModal = true
				this.type = type
				if(type == 1){
					this.imgSrc = this.userInfo.avatar
				}else if(type == 2){
					this.userName = this.userInfo.userName
				}else if(type == 3){
					this.sign = this.userInfo.sign
				}else if(type == 4){
					this.$nextTick(()=>{
						this.$refs.psdRef.setRules(this.rules);
					})
				}
			},
			handleUploadAvatar(){
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						console.log(res);
						const imgPath = res.tempFilePaths[0]
						uni.uploadFile({
							url: BaseURL + "/post/uploadFile",
							filePath: imgPath,
							name: "file",
							success: (res) => {
								if (res && res.data) {
									const resp = JSON.parse(res.data)
									if (resp && resp.success) {
										this.imgSrc = resp.data
									}else{
										reject()
									}
								}
							}
						})
						
					}
				});
			},
			async getUserInfo(){
				const resp = await this.$http({url:"/user/getUserById",data:{userId:this.$user._id},method:"get"})
				confirm(resp,data=>{
					this.userInfo = data
				})
			},
			async handleConfirm(){
				if(this.type == 1){
					const resp = await this.$http({url:"/user/updateAvatar",data:{userId:this.$user._id,imgSrc:this.imgSrc}})
					confirm(resp,data=>{
						this.getUserInfo()
					})
				}else if(this.type == 2){
					const resp = await this.$http({url:"/user/updateUserName",data:{userId:this.$user._id,userName:this.userName}})
					confirm(resp,data=>{
						this.getUserInfo()
					})
				}else if(this.type == 3){
					const resp = await this.$http({url:"/user/updateSign",data:{userId:this.$user._id,sign:this.sign}})
					confirm(resp,data=>{
						this.getUserInfo()
					})
				}else if(this.type == 4){
					this.$refs.psdRef.validate(async valid => {
						if(valid){
							const resp = await this.$http({url:"/user/updatePsd",data:{userId:this.$user._id,psd:this.psdModel.psd}})
							confirm(resp,data=>{
								setTimeout(()=>{
									uni.switchTab({
										url:"/pages/center/index/index",
									})
								},2000)
								this.logout()
								uni.showToast({
									title:"请重新登陆",
									icon:"none"
								})
								// this.getUserInfo()
							})
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss">
.editInfo{
	/deep/ .u-form-item--left{
		width: auto !important;
		flex: none !important;
	}
	/deep/ .uni-input-placeholder{
		color: #fff !important;
	}
	.uploadImg{
		width: 200upx;
		height: 200upx;
		border-radius: 50%;
		border: 2upx dashed rgb(41, 121, 255);
		position: relative;
		.icon,.img{
			position: absolute;
			left:50%;
			top:50%;
			transform: translate(-50%,-50%);
		}
	}
}
</style>
