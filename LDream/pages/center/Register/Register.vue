<template>
	<view class="register">
		<view class="top w-full  pt-4 pl-2">
			<view class="" @click="goBack">
				<u-icon name="arrow-left" color="#bebebe" size="28"></u-icon>
				取消
			</view>
		</view>
		<view class="logo">
			<u-image src="/static/feture.jpg" width="220upx" height="220upx"  shape="circle"></u-image>
		</view>
		<u-form ref="registerRef" :model="registerModel">
			<u-form-item left-icon="account" label="账号" prop="account"><u-input v-model="registerModel.account" @blur/></u-form-item>
			<u-form-item left-icon="lock-opened-fill" label="密码" prop="password"><u-input v-model="registerModel.password" type="password" /></u-form-item>
			<u-form-item left-icon="lock-fill" label="确认密码" prop="confirmPassword"><u-input v-model="registerModel.confirmPassword" type="password" /></u-form-item>
			<u-button plain class="btn mt-4" shape="circle" :hairLine="false" @click="register">注册</u-button>
		</u-form>
	</view>
</template>

<script>
	import confirm from "../../../util/confirm.js"
	export default {
		data() {
			return {
				registerModel:{
					account:"",
					password:"",
					confirmPassword:""
				},
				rules: {
					account: [
						{ 
							required: true, 
							message: '请输入昵称', 
							trigger: ['blur'],
						},
						{
							min: 5,
							message: '昵称不能少于五位字符',
							trigger: 'blur'
						},
						{
							asyncValidator: (rule, value, callback) => {
								console.log(value)
								this.$http({url:"/user/userNameIsRepeat",method:"get",data:{userName:value}}).then(res=>{
									console.log(res,"res")
									confirm(res,(data)=>{
										if(data.length>0){
											callback(new Error("该用户已存在"))
										}
										callback()
									},()=>{
										callback(new Error("该用户已存在"))
									})
								})
							},
							trigger: ['blur'],
						}
					],
					password: [
						{
							required: true,
							message: '请输入密码', 
							trigger: ['blur'],
						}
					],
					confirmPassword:[
						{
							required: true,
							message: '请确认密码',
							trigger: ['blur', 'change'],
						},
						{
							validator:(rule, value, callback)=>{
								if(value!=this.registerModel.password){
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
		mounted() {
			this.$refs.registerRef.setRules(this.rules);
		},
		methods: {
			register(){
				this.$refs.registerRef.validate(async valid => {
					if (valid) {
						const data = {userName:this.registerModel.account,passWord:this.registerModel.password}
						const resp = await this.$http({url:"/user/insert",data})
						confirm(resp,()=>{
							uni.showToast({
								title:"注册成功"
							})
						},()=>{
							uni.showToast({
								title:"注册失败"
							})
						})
						console.log(resp)
					} else {
						console.log('验证失败');
					}
				});
			},
			goBack(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss">
.register{
	height: 100vh;
	padding-top: 10upx;
	background-image: url(../../../static/registerBg.jpg);
	background-size: 100%;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.top{
		position: absolute;
		top: 0;
		color: #fff;
	}
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
	/deep/ .uni-input-placeholder{
		color: #fff !important;
	}
}
</style>
