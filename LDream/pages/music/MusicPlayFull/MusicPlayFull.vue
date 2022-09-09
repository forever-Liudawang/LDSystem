<template>
	<view class="musicFull h-full d-flex flex-column">
		<view class="bg"
			style="background: url(https://p1.music.126.net/e5cvcdgeosDKTDrkTfZXnQ==/109951166155165682.jpg?param=400x400);">
		</view>
		<view class="main pl-4 pr-4 pt-3 pos-rel h-full">
			<view class="header d-flex justify-between align-start">
				<u-icon name="arrow-down" color="#fff" size="48" @click="handleBack"></u-icon>
				<view class="d-flex flex-column text-center">
					<text class="color-white u-font-md" style="font-weight: bold;">{{currentPlayMusic.name}}</text>
					<text style="color: ;">{{getName(currentPlayMusic.ar)}}</text>
				</view>
				<view class="">
				</view>
			</view>
			<view class="w-full d-flex justify-center needleBox ">
				<u-image src="/static/needle.png" :class="['needle',{'playing':!!playing}]" width="28%" mode="widthFix">
				</u-image>
			</view>
			<view class="cd mt-4 ">
				<u-image :class="['avatar','musicActive',{musicStop:!playing}]"
					:src="currentPlayMusic.al.picUrl + '?param=400x400'" shape="circle" width="384upx" height="384upx">
				</u-image>
			</view>
		</view>
		<view class="util">
			<view class="progress w-full d-flex align-center pl-3 pr-3">
				<text>{{playTime}}</text>
				<canvas class="ml-1 mr-1" style="height: 20upx;" canvas-id="lineCanvas" id="lineCanvas"
					@touchmove="handleMove" @touchstart="handleTouch"></canvas>
				<text>{{musicTime}}</text>
			</view>
			<view class="d-flex w-full justify-between pl-5 pr-5 pt-4 align-center">
				<view class="" @click="handleChangeMode">
					<u-image v-if="playMode == 1" src="/static/randomWhite.png" width="48upx" mode="widthFix"></u-image>
					<u-image v-if="playMode == 2" src="/static/listWhile.png" width="48upx" mode="widthFix"></u-image>
					<u-image v-if="playMode == 3" src="/static/oneWhile.png" width="48upx" mode="widthFix"></u-image>
				</view>
				<view class="d-flex justify-between">
					<u-icon name="skip-back-left" color="#fff" size="48" @click="handlePlayPrev"></u-icon>
					<view class="" @click="handleChangePlay">
						<u-image v-show="playing" class="ml-6 mr-6" src="/static/stopMusic.png" width="96upx"
							mode="widthFix"></u-image>
						<u-image v-show="!playing" class="ml-6 mr-6" src="/static/playMusic.png" width="96upx"
							mode="widthFix"></u-image>
					</view>
					<u-icon name="skip-forward-right" color="#fff" size="48" @click="handlePlayNext"></u-icon>
				</view>
				<u-image src="/static/list.png" width="48upx" mode="widthFix" @click="showMusicList = true"></u-image>
			</view>
		</view>
		<u-popup class="w-full" v-model="showMusicList" mode="bottom" height="65%" border-radius="14">
			<MusicList />
		</u-popup>
	</view>
</template>

<script>
	import {
		mapState,
		mapGetters,
		mapMutations
	} from "vuex"
	import {
		getName
	} from "../../../util/config.js"
	import {
		formatPlayTime
	} from "../../../util/time.js"
	import MusicList from "../../../components/MusicList.vue"
	export default {
		components: {
			MusicList
		},
		data() {
			return {
				canvasWidth: null,
				formatPlayTime,
				getName,
				showMusicList: false
			}
		},
		computed: {
			...mapState([
				"currentPlayMusic",
				"playing",
				"percent",
				"audioContext",
				"currentPlayMusic",
				"playMode",
				"currentPlayIndex"
			]),
			...mapGetters(["musicPlayListLength"]),
			playTime() {
				return this.formatPlayTime(this.currentPlayMusic.dt * this.percent / 1000)
			},
			musicTime() {
				return this.formatPlayTime(this.currentPlayMusic.dt / 1000)
			}
		},
		mounted() {
			this.initProgress(this.percent)
		},
		watch: {
			percent(newVal) {
				this.initProgress(newVal)
			}
		},
		methods: {
			...mapMutations(["changePercent", "changeCurrentPlayIndex", "changePlayStatus", "changePlayMode"]),
			handleBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			handleChangeMode() {
				if (this.playMode == 1) {
					this.changePlayMode(2)
					uni.showToast({
						title: '列表循环',
						duration: 2000,
						icon: "none"
					});
				} else if (this.playMode == 2) {
					this.changePlayMode(3)
					uni.showToast({
						title: '单曲循环',
						duration: 2000,
						icon: "none"
					});
				} else {
					this.changePlayMode(1)
					uni.showToast({
						title: '随机播放',
						duration: 2000,
						icon: "none"
					});
				}
			},
			handlePlayNext() {
				if (this.playMode == 1) {
					const randomIndex = Math.floor(Math.random() * this.musicPlayListLength)
					this.changeCurrentPlayIndex(randomIndex)
				} else {
					const newIndex = this.currentPlayIndex + 1;
					this.changeCurrentPlayIndex(newIndex)
				}
				this.changePercent(0)
				this.changePlayStatus(true)
			},
			handlePlayPrev() {
				if (this.playMode == 1) {
					const randomIndex = Math.floor(Math.random() * this.musicPlayListLength)
					this.changeCurrentPlayIndex(randomIndex)
				} else {
					const newIndex = this.currentPlayIndex - 1
					this.changeCurrentPlayIndex(newIndex)
				}
				this.changePercent(0)
				this.changePlayStatus(true)
			},
			handleChangePlay() {
				if (this.playing) {
					this.audioContext.pause()
				} else {
					this.audioContext.play()
				}
				this.changePlayStatus(!this.playing)
			},
			handleMove(e) {
				const {
					touches
				} = e
				let {
					x,
					y
				} = touches[0]
				if (x < 0) {
					x = 0
				} else if (x * 2.5 > this.canvasWidth) {
					x = this.canvasWidth
				}
				const percent = x * 2.5 / this.canvasWidth
				this.audioContext.seek(this.currentPlayMusic.dt * percent / 1000)
				this.changePercent(percent)
			},
			handleTouch(e) {
				const {
					touches
				} = e
				let {
					x,
					y
				} = touches[0]
				console.log(x, y)
				if (x * 2.5 < 0) {
					x = 0
				} else if (x * 2.5 > this.canvasWidth) {
					x = this.canvasWidth
				}
				const percent = x * 2.5 / this.canvasWidth;
				this.audioContext.seek(this.currentPlayMusic.dt * percent / 1000)
				this.changePercent(percent)
			},
			initProgress(percent = 0) {
				if (!this.canvasWidth) {
					const dom = uni.createSelectorQuery().select("#lineCanvas")
					dom.boundingClientRect(data => {
						console.log(data, "data.width")
						this.canvasWidth = Math.floor(data.width) - 10
						this.drawProgress(percent, this.canvasWidth)
					}).exec()
				} else {
					this.drawProgress(percent, this.canvasWidth)
				}
			},
			drawProgress(percent, canvasWidth) {
				const ctx = uni.createCanvasContext('lineCanvas')
				ctx.clearRect(0, 0, this.canvasWidth, 10)
				//画底线
				ctx.beginPath()
				ctx.lineWidth = 4
				ctx.setStrokeStyle("#ccc")
				ctx.setLineCap("round")
				ctx.moveTo(0, 5)
				ctx.lineTo(canvasWidth, 5)
				ctx.stroke()
				ctx.closePath()

				//进度条线
				const progress = percent * canvasWidth / 2.5
				ctx.beginPath()
				ctx.lineWidth = 4
				ctx.setStrokeStyle("#d81e06")
				ctx.setLineCap("round")
				ctx.moveTo(0, 5)
				ctx.lineTo(progress, 5)
				ctx.stroke()
				ctx.closePath()

				//画圆
				ctx.beginPath()
				ctx.setStrokeStyle("#fff")
				ctx.setFillStyle("#fff")
				ctx.setLineWidth(1)
				ctx.arc(progress + 4, 5, 4, 0, Math.PI * 2)
				ctx.fill()
				ctx.stroke()
				ctx.closePath()
				ctx.draw()
			}
		},

	}
</script>

<style lang="scss" scoped>
	.musicFull {
		padding-top: var(--status-bar-height);
		position: relative;
		overflow: hidden;

		.bg {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
			opacity: 0.6;
			filter: blur(40upx);
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center center;
		}

		.main {
			animation: slide-in-blurred-bl .6s cubic-bezier(.23, 1.000, .32, 1.000) both;
		}

		.needleBox {
			position: absolute;
			left: 60%;
			top: 10%;
			transform: translate(-50%);
			z-index: 100;

		}

		.needle {
			transform-origin: 30upx 30upx;
			transform: rotateZ(-20deg);
			transition: transform 1s !important;

			&.playing {
				transform: rotateZ(0deg);
			}
		}

		.cd {
			width: 75%;
			height: 560upx;
			position: absolute;
			background: url("../../../static/disc.png") no-repeat center;
			background-size: cover;
			left: 50%;
			top: 52%;
			transform: translate(-50%, -50%);

			.avatar {
				position: absolute;
				left: 94upx;
				top: 84upx;
			}

			.musicActive {
				animation: musicAnimation 20s linear infinite;
			}

			.musicStop {
				animation-play-state: paused;
			}

			@keyframes musicAnimation {
				0% {
					transform: rotate(0);
				}

				50% {
					transform: rotate(180deg);
				}

				100% {
					transform: rotate(360deg);
				}
			}
		}

		.musicStop {
			animation-play-state: paused;
		}

		.util {
			height: 25%;
			width: 100%;
			animation: slide-in-blurred-left 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
		}

		@-webkit-keyframes slide-in-blurred-left {
			0% {
				-webkit-transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
				transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
				-webkit-transform-origin: 100% 50%;
				transform-origin: 100% 50%;
				-webkit-filter: blur(40px);
				filter: blur(40px);
				opacity: 0;
			}

			100% {
				-webkit-transform: translateX(0) scaleY(1) scaleX(1);
				transform: translateX(0) scaleY(1) scaleX(1);
				-webkit-transform-origin: 50% 50%;
				transform-origin: 50% 50%;
				-webkit-filter: blur(0);
				filter: blur(0);
				opacity: 1;
			}
		}

		@keyframes slide-in-blurred-bl {
			0% {
				transform: translateY(1000px) scaleY(2.5) scaleX(.2);
				transform-origin: 50% 100%;
				filter: blur(40px);
				opacity: 0
			}

			100% {
				transform: translateY(0) scaleY(1) scaleX(1);
				transform-origin: 50% 50%;
				filter: blur(0);
				opacity: 1
			}
		}
	}
</style>
