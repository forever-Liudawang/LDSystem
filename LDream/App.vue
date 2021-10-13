<script>
	import {mapState,mapMutations} from "vuex"
	export default {
		methods:{
			...mapMutations(["login","logout"]),
		},
		onLaunch: function() {
			const userInfo = uni.getStorageSync("userInfo")
			if(userInfo){
				this.login(userInfo)
			}
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";
	@import "./global.scss"
</style>
