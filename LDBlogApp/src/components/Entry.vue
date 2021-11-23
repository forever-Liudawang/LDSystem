<script setup lang="ts">
import { reactive, ref,onMounted} from 'vue'
import {onBeforeRouteUpdate,useRoute} from "vue-router"
const showEntry = ref(true)
const route = useRoute()
onBeforeRouteUpdate((to)=>{
})
onMounted(()=>{
  setTimeout(()=>{
    showEntry.value = false
  },800)
})
</script>

<template>
  <div class="entryCover" v-if="showEntry">
    <div class="sword">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="title">
        嘿，您来了
    </div>
  </div>
</template>

<style lang="scss" scoped>
.entryCover {
  width: 100vw;
  height: 100vh;
  background-color: #000;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000;
  .sword {
    top: 40%;
    left: 50%;
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    z-index: 40;
    transform: translate(-50%,-50%);
    span {
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }

    & :first-child {
      left: 0%;
      top: 0%;
      border-bottom: 6px solid $theme-color;
      animation: sword-one 1.5s linear infinite;
    }

    & :nth-child(2) {
      right: 0%;
      top: 0%;
      animation: sword-two 1.5s linear infinite;
      border-right: 6px solid $theme-color;
    }

    & :last-child {
      right: 0%;
      bottom: 0%;
      animation: sword-three 1.5s linear infinite;
      border-top: 6px solid $theme-color;
    }

    @keyframes sword-one {
      0% {
        transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
      }

      100% {
        transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
      }
    }

    @keyframes sword-two {
      0% {
        transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
      }

      100% {
        transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
      }
    }

    @keyframes sword-three {
      0% {
        transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
      }

      100% {
        transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
      }
    }
  }
  .title{
      position: absolute;
      font-size: 48px;
      bottom: 40%;
      left: 50%;
      color: #fff;
      transform: translateX(-50%);
  }
}
</style>
