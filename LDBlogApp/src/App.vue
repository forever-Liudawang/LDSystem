<script setup lang="ts">
import {RouterView} from "vue-router"
import {KeepAlive} from "vue"
import Header from "@src/components/Header.vue";

</script>

<template>
  <Header></Header>
  <div class="main">
    <!-- <KeepAlive> -->
      <router-view></router-view>
    <!-- </KeepAlive> -->
  </div>
</template>

<style lang="scss" scoped>
.main{
  padding-top: $headerHeight;
  height: calc(100vh - $headerHeight);
  overflow-x: auto;
  background: url("/bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
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
