<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getRecommendArticle } from '@src/apis/index'
import Article from '@com/Article.vue'
import BScroll from '@src/components/BScroll.vue'
const recommendList = ref<any[]>([])
const initData = async () => {
  const resp = await getRecommendArticle()
  if (resp && resp.success) {
    recommendList.value = resp.data
  }
}
onMounted(() => {
  initData()
})
const handleScroll = (pos: any) => {
  // console.log(`pos`, pos)
}
const handlePullingUp = () => {}
</script>

<template>
  <BScroll @scroll="handleScroll" @pullingUp="handlePullingUp" >
    <div class="home">
      <div class="title">
        <span>Andy的Blog</span>
        <span>始于平淡，归于坦然</span>
      </div>
      <div class="content">
        <div class="recommendItem" v-for="item in recommendList">
          <div class="tagTitle">{{ item.articleCateName }}</div>
          <div class="articleBox">
            <Article v-for="article in item.data" :articleModel="article"></Article>
          </div>
        </div>
      </div>
    </div>
  </BScroll>
</template>

<style lang="scss" scoped>
.home {
  height: 100%;
  padding-bottom: 50px;
  .title {
    height: 400px;
    width: 100%;
    text-align: center;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: 6px;
    span:first-child {
      font-size: 60px;
      font-weight: bold;
    }
    span:last-child {
      padding-top: 18px;
      font-size: 28px;
    }
  }
  .content {
    padding: 0 28px;
    .recommendItem {
      margin-bottom: 80px;
    }
    .tagTitle {
      font-size: 40px;
      font-weight: bold;
      text-align: left;
      color: $theme-color;
      padding: 40px 0;
      text-shadow: 1px 1px 0 #fff,3px 3px 0 $theme-color, 4px 4px 0 $theme-color
    }
    .articleBox {
    }
  }
}
</style>
