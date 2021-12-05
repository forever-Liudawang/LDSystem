<script setup lang="ts">
import { reactive, toRefs, ref, onMounted, nextTick, watch, onUpdated } from 'vue'
import BScroll,{BScrollInstance} from 'better-scroll'
import { onBeforeRouteUpdate, useRoute} from 'vue-router'
import toTop from "/toTop.png"
let route = useRoute()
interface IProps {
  probeType: number
  pullUpLoad: boolean
  refreshFlag: number
}
const props = withDefaults(defineProps<IProps>(), {
  probeType: 3,
  pullUpLoad: false,
  refreshFlag: 0
})
const emit = defineEmits(['scroll', 'pullingUp'])
let bs: BScrollInstance | null = null
const domRef = ref<any>(null)
let timer = ref<any>()
const showToTop = ref(false)
const handleToTop = ()=>{
  bs?.scrollTo(0,0,800)
}
const scroll = () => {
  if(bs){
    bs?.refresh()
    return
  }
  timer.value = setTimeout(() => {
    bs = new BScroll(domRef.value, <any>{
      probeType: props.probeType,
      click: true,
      scrollX:true,
      //阻止浏览器默认行为，移动端无法滚动
      preventDefault: false,
      // preventDefaultException:{tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO|CODE)$/},
      tap: true,
      mouseWheel: true,
      pullUpLoad: {
        threshold: -80
      },
      pullDownRefresh: {
        threshold: 50,
        probeType: 3
      },
      // mouseWheel: true
    })
    bs?.on('scroll', (option: any) => {
      if (Math.abs(option.y) > 600) {
        showToTop.value = true
      } else {
        showToTop.value = false
      }
    })
    bs?.on('pullingUp', () => {
      emit('pullingUp')
      bs?.finishPullUp()
    })
    bs?.on('pullingDown', () => {
      console.log('down')
    })
    bs?.on('refresh', () => {
      // console.log('refresh')
    })
  }, 1200)
}
watch(
  () => props.refreshFlag,
  (val) => {
    nextTick(() => {
      bs?.refresh()
    })
  }
)
watch(route,()=>{
  console.log(route,'route===>>>>')
  nextTick(() => {
      bs?.refresh()
  })
})
onBeforeRouteUpdate((to) => {
  scroll()
})
onMounted(() => {
  scroll()
  //延时加载 等待页面dom元素加载完毕后初始化组件，获取真实的页面高度
})
</script>

<template>
  <div class="wrapper" ref="domRef">
    <div class="content">
      <slot></slot>
    </div>
    <div :class="['toTop', showToTop ? 'show' : 'hide']" @click="handleToTop">
      <van-image cover radius="4" :src="toTop" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  overflow: hidden;
  .content{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .toTop {
    position: fixed;
    right: 5%;
    bottom: 10%;
    border-radius: 50%;
    cursor: pointer;
    z-index: 30;
    width: 80px;
    &.hide {
      -webkit-animation: scale-out-ver-top 0.45s cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
      animation: scale-out-ver-top 0.45s cubic-bezier(0.755, 0.05, 0.855, 0.06) both;

      @-webkit-keyframes scale-out-ver-top {
        0% {
          -webkit-transform: scaleY(1);
          transform: scaleY(1);
          -webkit-transform-origin: 100% 0%;
          transform-origin: 100% 0%;
          opacity: 1;
        }

        100% {
          -webkit-transform: scaleY(0);
          transform: scaleY(0);
          -webkit-transform-origin: 100% 0%;
          transform-origin: 100% 0%;
          opacity: 1;
        }
      }

      @keyframes scale-out-ver-top {
        0% {
          -webkit-transform: scaleY(1);
          transform: scaleY(1);
          -webkit-transform-origin: 100% 0%;
          transform-origin: 100% 0%;
          opacity: 1;
        }

        100% {
          -webkit-transform: scaleY(0);
          transform: scaleY(0);
          -webkit-transform-origin: 100% 0%;
          transform-origin: 100% 0%;
          opacity: 1;
        }
      }
    }
    &.show {
      -webkit-animation: scale-in-ver-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-in-ver-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

      @-webkit-keyframes scale-in-ver-top {
        0% {
          -webkit-transform: scaleY(0);
          transform: scaleY(0);
          -webkit-transform-origin: 100% 0%;
          transform-origin: 100% 0%;
          opacity: 1;
        }

        100% {
          -webkit-transform: scaleY(1);
          transform: scaleY(1);
          -webkit-transform-origin: 100% 0%;
          transform-origin: 100% 0%;
          opacity: 1;
        }
      }

      @keyframes scale-in-ver-top {
        0% {
          -webkit-transform: scaleY(0);
          transform: scaleY(0);
          -webkit-transform-origin: 100% 0%;
          transform-origin: 100% 0%;
          opacity: 1;
        }

        100% {
          -webkit-transform: scaleY(1);
          transform: scaleY(1);
          -webkit-transform-origin: 100% 0%;
          transform-origin: 100% 0%;
          opacity: 1;
        }
      }
    }
  }
  .van-image {
    width: 100%;
    /* height: 80px; */
  }
}
</style>
