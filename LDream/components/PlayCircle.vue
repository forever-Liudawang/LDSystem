<template>
		<view class="pos-rel playCircle" style="display: inline-block;">
			<view class="circle">
				<canvas style="width: 90upx; height: 90upx;" canvas-id="canvas" id="canvas"></canvas>
			</view>
			<u-icon class="musicIcon" name="pause" color="#d81e06" size="28" v-show="playing"></u-icon>
			<u-icon class="musicIcon" name="play-right" color="#d81e06" size="28" v-show="!playing"></u-icon>
		</view>
</template>
<script>
	import {mapState} from "vuex"
	export default {
		name: "PlayCircle",
		props: ["radius"],
		data() {
			return {
				dashArray: Math.PI * 90,
			};
		},
		computed: {
			...mapState(["currentPlayMusic","playing","percent"]),
		},
		watch:{
			percent(newVal,oldVal){
				this.initCanvas(newVal)
			}
		},
		methods:{
			initCanvas(progress = 0){
				const ctx = uni.createCanvasContext('canvas')
				ctx.clearRect(0,0,90,90)
				ctx.setStrokeStyle("rgba(212, 68, 57, .5)")
				ctx.setLineWidth(3)
				ctx.arc(22,22, 16, 0, 2 * Math.PI) // 2 * Math.PI === 360 度 最后一个参数代表的是圆的弧度
				ctx.stroke() // 至此大圆画完
				ctx.beginPath()
				ctx.setLineCap("round")
				ctx.setStrokeStyle("#d81e06")
				ctx.setLineWidth(3)
				const range = progress * Math.PI *2
				ctx.arc(22,22, 16, 0, range) 
				ctx.stroke() 
				ctx.closePath()
				ctx.draw()
			}
		},
		mounted(){
			this.$nextTick(()=>{
				this.initCanvas(this.percent || 0)
			})
		}
	}
</script>

<style lang="scss" scoped>
	.playCircle {
		circle {
			stroke-width: 8px;
			transform-origin: center;
		}
		.progress-background {
			transform: scale(0.9);
			stroke: rgba(212, 68, 57, .5);
		}

		.progress-bar {
			transform: scale(0.9) rotate(-90deg);
			stroke: #d81e06;
		}
		#canvas{
			transform: rotate(-90deg);
		}
		.circle{
			width: 94upx;
			height: 94upx;
			position: relative;
			.outer,.inner{
				width: 100%;
				height: 100%;
				position: absolute;
				border-radius: 50%;
				border:6upx solid rgba(212, 68, 57, .5);
				top: 0;
			}
			.inner{
				border:6upx solid #d81e06;
			}
		}
	}
	.musicIcon{
		position: absolute;
		left: 48%;
		top: 50%;
		transform: translate(-50%,-50%);
		&.icon-play {
			left: 9px
		}
	}
	
</style>
