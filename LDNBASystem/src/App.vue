<script setup lang="ts">
import { RouterView, useRoute,onBeforeRouteUpdate} from 'vue-router'
import { KeepAlive, watch,toRaw,onMounted,ref} from 'vue'
const route = useRoute()
</script>

<template>
  <div class="main">
    <transition name="slide-left" mode="in-out">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" v-if="$route.meta.keepAlive" :key="$route.name"/>
        </keep-alive>
        <component :is="Component"  v-if="!$route.meta.keepAlive" :key="$route.name"/>
      </router-view> 
    </transition>
  </div>
</template>

<style lang="scss" scoped>

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
