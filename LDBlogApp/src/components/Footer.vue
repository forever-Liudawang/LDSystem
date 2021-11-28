<script setup lang="ts">
import { reactive, ref, toRefs } from 'vue'
</script>

<template>
  <div class="footer">
    <div>Design By AndyLiu 🐂</div>
    <div>湘ICP备2021017961号</div>
    <div>本网站内容仅供个人学习参考，无其他商业用途；</div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  padding: 10px;
  border-top: 1px solid #ececec;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  color: #fff;
  background-color: #000;
  font-size: 24px;
  width: 100%;
  /* margin-top: 20px; */
}
</style>
