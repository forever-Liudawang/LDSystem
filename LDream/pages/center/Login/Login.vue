<template>
	<view class="login mt-7">
		<!-- <view class="logo">
			<u-image src="/static/feture.jpg" width="220upx" height="220upx"  shape="circle"></u-image>
		</view> -->
		<view class="form" style="width: 66%;">
			<u-form ref="loginRef" :model="loginModel"> 
				<u-form-item left-icon="account" label="用户名" prop="userName"><u-input v-model="loginModel.userName" /></u-form-item>
				<u-form-item left-icon="lock-fill" label="密码" prop="passWord"><u-input v-model="loginModel.passWord" /></u-form-item>
			</u-form>
			<view class="d-flex justify-between mt-6">
				<view style="color: #c5c5c5;">
					忘记密码?
				</view>
				<view style="color: #c5c5c5;" @click="goRegister">
					立即注册
				</view>
			</view>
			<u-button plain class="btn mt-4" shape="circle" :hairLine="false" @click="handleLogin">登陆</u-button>
		</view>
		<view class="d-flex flex-column align-center mt-7" >
			<u-divider fontSize="30" bg-color="transparent" color="rgb(112 106 106);">第三方登陆</u-divider>
			<view class=" d-flex justify-between mt-3" style="width: 50%;">
				<u-image src="/static/QQ.png" width="40upx" height="40upx"  shape="circle"></u-image>
				<u-image src="/static/wechat.png" class="bg-white" width="40upx" height="40upx"  shape="circle"></u-image>
				<u-image src="/static/weibo.png" width="40upx" height="40upx"  shape="circle"></u-image>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapMutations} from "vuex"
	export default {
		data() {
			return {
				loginModel:{
					userName:"",
					passWord:""
				},
				rules: {
					userName: [
						{ 
							required: true, 
							message: '请输入账号/手机号', 
							trigger: ['blur'],
						}
					],
					passWord: [
						{
							required: true,
							message: '请输入密码', 
							trigger: ['blur'],
						}
					]
				}
			}
		},
		methods: {
			...mapMutations(["login"]),
			handleLogin(){
				console.log("submit",this.$refs.loginRef)
				this.$refs.loginRef.validate(async valid => {
					if (valid) {
						console.log('验证通过');
						const resp = await this.$http({url:"/user/login",method:"post",data:this.loginModel})
						this.$confirm(resp,(data)=>{
							this.login(data)
							uni.showToast({
								title:"登陆成功"
							})
						})
						console.log(resp)
					} else {
						console.log('验证失败');
					}
				});
			},
			goRegister(){
				uni.navigateTo({
					url:"/pages/center/Register/Register",
					animationType:"slide-in-right"
				})
			}
		},
		mounted() {
			console.log("ready")
			this.$refs.loginRef.setRules(this.rules);
		}
	}
</script>

<style lang="scss" scoped>
.login{
	height: 100%;
	// background-image: url(../../../static/loginBg.png);
	// background-size: 100%;
	// background-size: cover;
	display: flex;
	flex-direction: column;
	// justify-content: center;
	align-items: center;
	.logo{
		position: absolute;
		top: 20%;
		left: 50%;
		transform: translateX(-50%);
	}
	.btn{
		color: #fff;
		background-color: #c04515;
	}
	/deep/ .u-default-plain-hover{
		color: #d81e06 !important;
		background-color:rgba(255,255,255,.5) !important;
	}
	/deep/ .u-form-item--left{
		width: auto !important;
		flex: none !important;
	}
	.activeBtn{
		color: #d81e06;
		background-color: #d89692;
	}
	/* filter: blur(4upx); */
}
</style>
