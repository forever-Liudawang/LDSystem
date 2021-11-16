<script setup lang="ts">
import Header from "@src/components/Header.vue";
import BScroll from "@src/components/BScroll.vue";
</script>

<template>
  <div class="home">
    <Header></Header>
    <BScroll>
      <div>123</div>
    </BScroll>
  </div>
</template>

<style lang="scss" scoped>
.home{
  background-color: red;
  color: #fff;
}
</style>