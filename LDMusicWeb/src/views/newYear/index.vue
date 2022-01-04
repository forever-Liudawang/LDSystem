<template>
  <div id="app"  style="display:flex;justify-content:center">
    <div id="countdown">
      <svg :width="size" :height="size">
        <circle
          fill="transparent"
          :stroke-width="stroke"
          stroke="#270B58"
          :r="radius"
          :cx="circleOffset"
          :cy="circleOffset"
        ></circle>
        <circle
          class="circle"
          fill="transparent"
          :stroke-width="stroke"
          stroke="#F36F21"
          :r="radius"
          :cx="circleOffset"
          :cy="circleOffset"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="progress"
          stroke-linecap="round"
        ></circle>
      </svg>
      <span class="time">{{ timeStr }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      size: 600,
      stroke: 30,
      percentage: 100,
      timer: null,
      timer1: null,
      seconds: 100,
      timeStr: ''
    }
  },
  beforeDestroy () {
    this.timer1 && clearInterval(this.timer1)
  },
  mounted () {
    this.timer1 = setInterval(() => {
      this.time('2022/1/1')
    })
    var nowtime = new Date().getTime() // 现在时间转换为时间戳
    var futruetime = new Date('2022/1/1').getTime() // 未来时间转换为时间戳
    var msec = futruetime - nowtime // 毫秒 未来时间-现在时间
    var time = (msec / 1000) // 毫秒/1000
    var day = parseInt(time / 86400) // 天  24*60*60*1000
    var hour = parseInt(time / 3600) - 24 * day // 小时 60*60 总小时数-过去的小时数=现在的小时数
    var minute = parseInt(time % 3600 / 60) // 分 -(day*24) 以60秒为一整份 取余 剩下秒数 秒数/60 就是分钟数
    var second = parseInt(time % 60) // 以60秒为一整份 取余 剩下秒数
    this.seconds = hour * 60 * 60 + minute * 60 + second
    this.animate()
  },
  computed: {
    radius () {
      return this.size / 2 - this.stroke / 2
    },
    circleOffset () {
      return this.size / 2
    },
    circumference () {
      return this.radius * 2 * Math.PI
    },
    progress () {
      return this.circumference - (this.circumference * this.percentage) / 100
    },
    countdown () {
      return Math.ceil((this.seconds * this.percentage) / 100)
    }
  },
  methods: {
    animate () {
      this.timer = setInterval(() => {
        this.percentage -= 1 / 10

        if (this.percentage <= 0) {
          clearInterval(this.timer)
          this.percentage = 100
        }
      }, (this.seconds * 1000) / 100 / 10)
    },
    time (futimg) {
      var nowtime = new Date().getTime() // 现在时间转换为时间戳
      var futruetime = new Date(futimg).getTime() // 未来时间转换为时间戳
      var msec = futruetime - nowtime // 毫秒 未来时间-现在时间
      var time = (msec / 1000) // 毫秒/1000
      var day = parseInt(time / 86400) // 天  24*60*60*1000
      var hour = parseInt(time / 3600) - 24 * day // 小时 60*60 总小时数-过去的小时数=现在的小时数
      var minute = parseInt(time % 3600 / 60) // 分 -(day*24) 以60秒为一整份 取余 剩下秒数 秒数/60 就是分钟数
      var second = parseInt(time % 60) // 以60秒为一整份 取余 剩下秒数
      this.timeStr = hour + '小时' + minute + '分' + second + '秒'
      return true
    }
  }
}
</script>

<style scoped>
.circle {
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

#countdown {
  display: inline-block;
  position: relative;
}

span {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 500px;
  font-family: monospace;
  color: #f36f21;
}
.time{
  font-size: 24px;
}
</style>
