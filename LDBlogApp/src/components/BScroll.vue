// <script setup lang="ts">
// import { reactive, toRefs, ref, onMounted, nextTick } from 'vue'
// import BScroll from 'better-scroll'
// import { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll'
// interface IProps {
//   probeType: number
//   pullUpLoad: boolean
// }
// const { probeType, pullUpLoad }:any= withDefaults(defineProps<IProps>(), {
//   probeType: 0,
//   pullUpLoad: false
// })
// const emit = defineEmits(['scroll', 'pullingUp'])
// let bs: BScrollConstructor<{}> | null = null
// const domRef = ref<any>(null)
// onMounted(() => {
//   console.log(domRef.value)
// })
// nextTick(() => {
//   bs = new BScroll(domRef.value, {
//     probeType: probeType,
//     click: true,
//     pullUpLoad,
//     // mouseWheel: true,
//   })
//   // bs.on('scroll', (option: any) => {
//   //   emit('scroll', option)
//   // })
//   // bs.on('pullingUp', () => {
//   //   emit('pullingUp')
//   //   setTimeout(() => {
//   //     bs?.finishPullUp()
//   //   }, 2000)
//   // })
// })
// </script>

// <template>
//   <div class="wrapper" ref="domRef">
//       <div>
//         <slot></slot>
//       </div>
//   </div>
// </template>

// <style scoped>
// .wrapper{
//   /* height: 100%; */
//   /* overflow: hidden; */
// }
// </style>
