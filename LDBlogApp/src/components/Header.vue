<script setup lang="ts">
import { ref } from 'vue'
import SideBar from '@src/components/SideBar.vue'
import { useRouter } from 'vue-router'
const searchKey = ref('')
const sideRef = ref<any>(null)
const showSearch = ref(false)
const router = useRouter()
const handleShowSearch = () => {
  showSearch.value = true
}
const handleBlur = () => {
  showSearch.value = false
}
const handleShowBar = () => {
  sideRef.value.handleSwitch()
}
</script>

<template>
  <div class="header">
    <div class="search">
      <van-icon name="search" color="#999" v-show="!showSearch" size="24" @click="handleShowSearch" />
      <van-search :autofocus="showSearch" v-show="showSearch" v-model="searchKey" shape="round" @blur="handleBlur" placeholder="请输入搜索关键词" />
    </div>
    <div class="title" @click="router.push('/')">
      <img src="/me.svg" alt="" />
      <span>Andys'Blog</span>
    </div>
    <div class="nav" @click="handleShowBar">
      <van-icon name="apps-o" :color="showSearch?'#000':'#999'" size="24" />
    </div>
  </div>
  <SideBar ref="sideRef"></SideBar>
</template>

<style lang="scss" module>
.bgTheme {
  background-color: $theme-color;
  color: #fff;
}
.themeColor {
  color: $theme-color;
}
</style>
<style lang="scss" scoped>
.header {
  height: $headerHeight;
  background-color: #fff;
  line-height: $headerHeight;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  z-index: 100000;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  .nav {
    display: flex;
    align-items: center;
    &:active{
      .van-icon-apps-o{
        color: #000 !important;
      }
    }
  }
  .title {
    font-size: 36px;
    font-weight: bold;
    display: flex;
    align-items: center;
    img {
      width: 80px;
      height: 60px;
      padding: 0 20px 0 0;
    }
  }
  .search {
    display: flex;
    align-items: center;
  }
  .van-search,
  .van-icon {
    transition: all ease-in 0.3s;
    -webkit-animation: scale-in-hor-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: scale-in-hor-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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
}
</style>
