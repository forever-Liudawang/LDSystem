<template>
	<view class="center h-full bg-grey">
		<!-- <Login/> -->
		<view class="header pos-rel">
			<view v-if="isLogined" class="d-flex flex-column justify-center align-center">
				<view class="d-flex align-center ">
					<view class="p-2 edit logout d-flex justify-center align-center" @click="showLogout = true">
						<u-image src="/static/logout.png"  width="52upx" height="52upx"  shape="circle"></u-image>
					</view>
					<u-image :src="userInfo.avatar"  width="180upx" height="180upx"  shape="circle" @click="handlePreviewImg"></u-image>
					<view class="p-2 edit d-flex justify-center align-center" @click="handleEditInfo">
						<u-icon name="edit-pen" color="#fffbf4" size="40" ></u-icon>
					</view>
				</view>
				<u-modal v-model="showLogout" :zoom="false" content="是否退出登陆" :show-cancel-button="true" confirm-color="#d81e06" @confirm="handleLogout">
				</u-modal>
				<text class="u-font-sm color-black mt-4">{{userInfo.userName}}</text>
				<text class="u-font-md color-black mt-2">加入社区<text class="color-dec pl-1 pr-1">{{dateDistance(userInfo.created)[0]}}</text>{{dateDistance(userInfo.created)[1]}}</text>
			</view>
			<view v-else class="d-flex flex-column justify-center align-center">
				<text class="font-md" @click="handleShowLogin">登录论坛</text>
				<view >
					<u-checkbox-group>
						<u-checkbox v-model="checkAgree">
							<text class="color-white">我已阅读并同意
								<text style="color: #007AFF;">用户协议</text>
								以及
								<text style="color: #007AFF;">隐私政策</text>
							</text>
						</u-checkbox>
					</u-checkbox-group>
				</view>
			</view>
			<view class="notice bg-white pos-abs">
				 <u-notice-bar type="error" :list="list"></u-notice-bar>
			</view>
		</view>
		<view class="content mt-6 p-2">
			<view class=" bg-white card">
				<text class="title">帖子服务</text>
				<view class="d-flex justify-around mt-2 p-2">
					<view class="d-flex flex-column align-center" v-if="isLogined" @click="handleToMyPost">
						<u-image src="/static/myPost.png"  width="48upx" height="48upx"  shape="circle"></u-image>
						<text class="mt-2">我的发帖</text>
					</view>
					<view class="d-flex flex-column align-center" @click="handleToMyRecommend">
						<u-image src="/static/recommentRecord.png"  width="48upx" height="48upx"  shape="circle"></u-image>
						<text class="mt-2">我的推荐</text>
					</view>
					<view class="d-flex flex-column align-center" @click="handleToMyFollow">
						<u-image src="/static/history.png"  width="48upx" height="48upx"  shape="circle"></u-image>
						<text class="mt-2">我的关注</text>
					</view>
				</view>
			</view>
			<view class=" bg-white card mt-3">
				<text class="title">音乐中心</text>
				<view class="d-flex justify-around mt-2 p-2">
					<view class="d-flex flex-column align-center">
						<u-image src="/static/myPost.png"  width="48upx" height="48upx"  shape="circle"></u-image>
						<text class="mt-2">我的喜欢</text>
					</view>
					<view class="d-flex flex-column align-center">
						<u-image src="/static/history.png"  width="48upx" height="48upx"  shape="circle"></u-image>
						<text class="mt-2">收听历史</text>
					</view>
				</view>
			</view>
		</view>
		<u-popup v-model="isShowLogin" mode="bottom" height="60%" border-radius="14" closeable>
			<Login/>
		</u-popup>
	</view>
</template>

<script>
	import Login from "../Login/Login.vue"
	import {mapState,mapMutations} from "vuex"
	import {dateDistance} from "../../../util/time.js"
	export default {
		components:{
			Login
		},
		data() {
			return {
				isLogin:false,
				checkAgree:true,
				showLogin:false,
				dateDistance,
				list: [
					'寒雨连江夜入吴',
					'平明送客楚山孤',
					'洛阳亲友如相问',
					'一片冰心在玉壶'
				],
				showLogout:false
			}
		},
		computed:{
			...mapState(["userInfo","isLogined"]),
			isShowLogin:{
				get(){
					return !this.isLogined && this.showLogin
				},
				set(){
					
				}
			}
		},
		mounted(){
			this.handleIsLogined()
		},
		methods: {
			...mapMutations(["login","logout"]),
			handleLogin(){
				
			},
			handleIsLogined(){
				const userInfo = uni.getStorageSync("userInfo")
				if(userInfo){
					this.login(userInfo)
				}
			},
			handleShowLogin(){
				this.showLogin = true
			},
			handleLogout(){
				this.logout();
			},
			handlePreviewImg(){
				const userInfo = this.userInfo
				uni.previewImage({
					urls: [userInfo.avatar],
					indicator:"number",
					loop:true,
					longPressActions: {
						itemList: ['保存图片'],
						success: (data)=>{
							console.log(data)
							uni.saveImageToPhotosAlbum({
								filePath:userInfo.avatar,
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
			handleToMyPost(){
				uni.navigateTo({
					url:"/pages/center/MyPost/MyPost",
					animationType: 'slide-in-bottom',
				})
			},
			handleToMyRecommend(){
				uni.navigateTo({
					url:"/pages/center/MyRecommend/MyRecommend",
					animationType: 'slide-in-bottom',
				})
			},
			handleToMyFollow(){
				uni.navigateTo({
					url:"/pages/center/MyFollow/MyFollow",
					animationType: 'slide-in-bottom',
				})
			},
			handleEditInfo(){
				uni.navigateTo({
					url:"/pages/center/EditorInfo/EditorInfo",
					animationType: 'slide-in-bottom',
				})
			}
		}
	}
</script>

<style lang="scss">
.center{
	//刘海屏适配
	padding-top:var(--status-bar-height);
	.header{
		height: 35%;
		background-image:url("../../../static/centerBg.png");
		background-size: 100%;
		background-size: cover;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.notice{
			padding: 20upx;
			width: 80%;
			bottom: -12%;
			left: 50%;
			border-radius: 8upx;
			transform: translateX(-50%);
			box-shadow: 0 0 10upx 4upx #e8e8e8;
		}
		.edit{
			border-radius: 50%;
			position: absolute;
			right: 120upx;
			width: 80upx;
			height: 80upx;
			background: #23150b;
			box-shadow: 0 0 16upx 12upx #8d8d8d
		}
		.logout{
			left:120upx;
		}
	}
	.content{
		.card{
			border-radius: 4upx;
			padding: 8upx;
			padding-left: 14upx;
			padding-right: 14upx;
			.title{
				padding-left: 20upx;
				font-size: 32upx;
				font-weight: bold;
				letter-spacing: 4upx;
			}
		}
	}
	
}
</style>
