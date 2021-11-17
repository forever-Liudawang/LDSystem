<script setup lang="ts">
import { reactive, ref, toRefs, defineExpose } from 'vue'
const show = ref(false)
const handleShow = () => {
  show.value = true
}
const handleHide = () => {
  show.value = false
}
defineExpose({
  handleShow,
  handleHide
})
</script>

<template>
  <div :class="['sideBar', show ? 'show' : 'hide']" v-show="show">
    <div class="item left">
      <div class="d-flex justify-center avatar">
        <van-image round width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div>
        <span></span>
        <span></span>
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
  &.show {
    -webkit-animation: scale-in-hor-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: scale-in-hor-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  &.hide {
    transform: translateX(-100%);
    transition: all cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }
  .item {
    height: 100%;
  }
  .left {
    flex: 1;
    .avatar{
      
    }
  }
  .right {
    width: 40%;
    background-color: #242424;
    opacity: 0.8;
  }
  @-webkit-keyframes scale-in-hor-left {
    0% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      opacity: 1;
    }
  }
  @keyframes scale-in-hor-left {
    0% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      opacity: 1;
    }
  }
  @-webkit-keyframes scale-out-hor-left {
    0% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      opacity: 1;
    }
  }
  @keyframes scale-out-hor-left {
    0% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      opacity: 1;
    }
  }
}
</style>
