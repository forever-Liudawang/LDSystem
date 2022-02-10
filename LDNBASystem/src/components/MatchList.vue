<script setup lang="ts">
import { reactive, ref, toRefs } from 'vue'
</script>

<template>
  <div class="matchBox">
    <div class="title">1月 31日 星期一</div>
    <div>
      <div class="header">
        <span class="time">时间</span>
        <span class="team">球队</span>
        <span class="score">比分</span>
        <span class="where">球馆</span>
        <span class="link">链接</span>
      </div>
      <div class="w-full">
        <div class="item_data w-full">
          <span class="time">2:00</span>
          <span class="team">湖人 老鹰</span>
          <span class="score">-</span>
          <span class="where">国家农业球馆</span>
          <span class="link">腾讯</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.matchBox {
  width: 100%;
  .title {
    font-size: 24px;
    font-weight: bold;
  }
  .team,
  .score,
  .where{
    width: 25%;
  }
  .time{
      width: 20%;
  }
  .link {
      width: 30%;
  }
  .header {
    display: flex;
    justify-content: space-between;
    span {
      font-weight: bold;
      font-size: 24px;
    }
  }
  .item_data{
      display: flex;
      justify-content: space-between;
      span{
          padding: 4px 0;
      }
  }
}
</style>
