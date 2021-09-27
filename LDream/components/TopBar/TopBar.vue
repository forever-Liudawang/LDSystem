<template>
	<view class="pl-2 pr-2 d-flex justify-between align-center">
		<view class="">
			<u-image src="/static/logo.png" height="80upx" mode="heightFix"></u-image>
		</view>
		<view class="">
			<u-search placeholder="搜索" v-model="keyword" @search="handleSearch"></u-search>
		</view>
		<view class="">
			<u-button @click="handleToPublic" shape="square" :ripple="true" ripple-bg-color="#991013" size="mini" class="color-primary">发布</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		name:"TopBar",
		data() {
			return {
				keyword:""
			};
		},
		methods:{
			handleSearch(val){
				console.log(val)
			},
			handleToPublic(){
				console.log(111)
				uni.navigateTo({
					url:"/pages/forum/publicPost/publicPost",
					animationType:"slide-in-right"
				})
			}
		}
	}
</script>

<style>

</style>
