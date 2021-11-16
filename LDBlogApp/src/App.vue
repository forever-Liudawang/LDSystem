<script setup lang="ts">
import {RouterView} from "vue-router"
</script>

<template>
  <router-view></router-view>
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
