<script setup lang="ts">
import {ref, defineExpose } from 'vue'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
import {sideBarNevList} from "@src/config"
const show = ref(false)
const router = useRouter()
let route = useRoute()
const handleSwitch = () => {
  show.value = !show.value
}
const handleHide = () => {
  show.value = false
}
const handleTo = (nav:any) =>{
  router.push({
    path:`/articleCate/${nav.cateId}`
  })
  handleHide()
}
onBeforeRouteUpdate((to)=>{
    route = to
})
defineExpose({
  handleSwitch,
  handleHide
})
</script>

<template>
  <div :class="['sideBar', show ? 'show' : 'hide']" >
    <div class="item left">
      <div class="d-flex justify-center avatar">
        <van-image round width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div class="sign d-flex justify-center">
        <span>AndyLiu</span>
        <span>记忆最深处的是回忆</span>
      </div>
      <div class="nav">
        <ul>
          <li v-for="item in sideBarNevList" :class="route.params.cateId ==item.cateId ?'active':''" @click="handleTo(item)">
            <span>{{item.title}}</span>
            <van-icon name="arrow" size="28" />
          </li>
        </ul>
      </div>
    </div>
    <div class="item right" @click="handleHide"></div>
  </div>
</template>

<style lang="scss" scoped>
.sideBar {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: $headerHeight;
  display: flex;
  justify-content: center;
  overflow: hidden;
  z-index: 1000000;
  &.show {
    transform: translateX(0);
    transition:.2s transform cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }
  &.hide {
    transform: translateX(-100vw);
    transition:.2s transform cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }
  .item {
    height: 100%;
  }
  .left {
    flex: 1;
    padding: 20px 10px;
    background-color: #fff;
    .sign{
      padding-top: 20px;
      font-size: 32px;
      font-weight: bold;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      span:first-child{
        font-size: 28px;
        color: #999;
        padding: 10px 0;
      }
      span{
        text-align: center;
      }
    }
    .nav{
      padding-top: 30px;
      li{
        box-shadow: 0 8px 12px #ebedf0;
        padding: 20px;
        margin: 10px 0;
        font-size: 32px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .active{
        color: $theme-color;
        .van-icon-arrow{
          color: $theme-color !important;
        }
      }
    }
  }
  .right {
    width: 40%;
    background-color: #242424;
    opacity: 0.8;
  }
}
</style>
