<script setup lang="ts">
import { ref, defineExpose } from 'vue'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
import { sideBarNevList } from '@src/config'
import warriors from "/warriors.jpg"
const show = ref(false)
const router = useRouter()
let route = useRoute()
const handleSwitch = () => {
  show.value = !show.value
}
const handleHide = () => {
  show.value = false
}
const handleTo = (nav: any) => {
  if (nav.title == 'FeedBack') {
    router.push({
      path: `/feedback/${nav.cateId}`
    })
  } else {
    router.push({
      path: `/articleCate/${nav.cateId}`
    })
  }

  handleHide()
}
onBeforeRouteUpdate((to) => {
  route = to
})
defineExpose({
  handleSwitch,
  handleHide
})
</script>

<template>
  <div class="sideBar">
    <van-popup v-model:show="show" position="left" class="custom" :style="{ width: '60%', height: '100%' ,}">
      <div class="item left">
        <div class="d-flex justify-center avatar">
          <van-image round width="100" height="100" :src="warriors" />
        </div>
        <div class="sign d-flex justify-center">
          <span>AndyLiu</span>
          <span>本无恶意，随手一记</span>
        </div>
        <div class="nav">
          <ul>
            <li v-for="item in sideBarNevList" :class="route.params.cateId == item.cateId ? 'active' : ''" @click="handleTo(item)">
              <span>{{ item.title }}</span>
              <van-icon name="arrow" size="28" />
            </li>
          </ul>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<style lang="scss">
.custom{
  padding-top: $headerHeight + 160;
}
</style>
<style lang="scss" scoped>

.sideBar {
  .item {
    height: 100%;
  }
  .left {
    padding: 0 20px;
    .sign {
      padding-top: 20px;
      font-size: 32px;
      font-weight: bold;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      span:first-child {
        font-size: 28px;
        color: #999;
        padding: 10px 0;
      }
      span {
        text-align: center;
      }
    }
    .nav {
      padding-top: 30px;
      li {
        box-shadow: 0 8px 12px #ebedf0;
        padding: 20px;
        margin: 10px 0;
        font-size: 32px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .active {
        color: $theme-color;
        .van-icon-arrow {
          color: $theme-color !important;
        }
      }
    }
  }
}
</style>
