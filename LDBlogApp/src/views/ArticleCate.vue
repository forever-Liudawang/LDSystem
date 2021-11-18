<script setup lang="ts">
import { reactive, toRefs, ref, computed, onMounted } from 'vue'
import { useRoute,onBeforeRouteUpdate} from 'vue-router'
import { getArticleListByCateId, getTags } from '@src/apis'
import Article from '@src/components/Article.vue'
import formatCate from "@src/utils/formatCate"
let route = useRoute()
const articleList = ref<any[]>([])
const tagList = ref<any[]>([])
const cateName = computed(()=>formatCate(route.params.cateId))
function color16() {
  //十六进制颜色随机
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)
  var color = '#' + r.toString(16) + g.toString(16) + b.toString(16)
  return color
}
const initData = async () => {
  console.log('route :>> ', route);
  const resp = await getArticleListByCateId({ articleCateId: route.params.cateId })
  if (resp && resp.success) {
    articleList.value = resp.data
  }
}
const getTagList = async () => {
  const resp = await getTags()
  if (resp && resp.success) {
    const data = resp.data || []
    const curTagList = data.filter((item:any) => item.articleCateId == route.params.cateId)
    tagList.value = curTagList
  }
}
onBeforeRouteUpdate((to)=>{
  route = to
  initData()
  getTagList()
})
onMounted(() => {
  initData()
  getTagList()
})
</script>

<template>
  <div class="articleCate">
    <div class="title">
      {{cateName}}
    </div>
    <div class="tags">
      <van-tag type="primary" :color="color16()" size="large" v-for="item in tagList">{{ item.articleTagName }}</van-tag>
    </div>
    <div class="main">
        <Article v-for="article in articleList" :articleModel="article" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.articleCate {
    padding-top: 50px;
    padding: 40px 28px 20px;
    .title{
      font-size: 48px;
      font-weight: bold;
      text-align: center;
      padding-bottom: 20px;
    }
    .tags{
        display: flex;
        flex-wrap: wrap;
    }
    .main{
        padding-top: 60px;
    }
    .van-tag{
        margin: 0 20px;
        padding: 10px 16px;
    }
}
</style>
