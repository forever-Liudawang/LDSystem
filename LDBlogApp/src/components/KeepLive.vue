<script setup lang='ts'>
import {Component} from "vue"
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="in-out">
      <keep-alive v-if="$route.meta.keepAlive">
        <component :is="Component" />
      </keep-alive>
      <component :is="Component" v-else-if="!$route.meta.keepAlive" />
    </transition>
  </router-view>
</template>

<style scoped>
.fade-enter {
  opacity: 0;
}

.fade-leave {
  opacity: 1;
}

.fade-enter-active {
  transition: opacity 0.3s;
}

.fade-leave-active {
  opacity: 0;
  transition: opacity 0.3s;
}
</style>