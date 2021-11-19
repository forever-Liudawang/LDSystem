<script setup lang="ts">
import { RouterView, useRoute} from 'vue-router'
import { KeepAlive, watch,toRaw} from 'vue'
import Header from '@src/components/Header.vue'
const route = useRoute()
watch(route,(to,from)=>{
  console.log(toRaw(to),toRaw(from))
})
</script>

<template>
  <Header></Header>
  <div class="main">
    <transition name="slide-left" mode="out-in">
      <KeepAlive>
        <router-view></router-view>
      </KeepAlive>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.main {
  padding-top: $headerHeight;
  height: calc(100vh - $headerHeight);
  overflow-x: auto;
  background: url('/bg.svg');
  background-repeat: no-repeat;
  background-size: cover;
}

.slide-left-enter-from {
  transform: translateX(20px);
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute; //这里的定位使用relative可以解决切换时页面残影
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
