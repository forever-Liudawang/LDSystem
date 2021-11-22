<script setup lang="ts">
import { ref, onMounted, watch, reactive } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { getArticleListByCateId, getTags } from '@src/apis'
import Article from '@src/components/Article.vue'
import formatCate from '@src/utils/formatCate'
import BScroll from "@com/BScroll.vue"
import { Toast } from 'vant'
let route = useRoute()
const articleList = ref<any[]>([])
const tagList = ref<any[]>([])
const loading = ref<boolean>(true);
const pagation = reactive({
  pageSize:10,
  pageIndex:0
})
const isEnd = ref(false)
const tag = ref("")
let cateName = ref(formatCate(<string>route.params.cateId))

function color16() {
  //十六进制颜色随机
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)
  var color = '#' + r.toString(16) + g.toString(16) + b.toString(16)
  return color
}
const initData = async () => {
  const resp = await getArticleListByCateId({ articleCateId: route.params.cateId,tag:tag.value,...pagation})
  if (resp && resp.success) {
    if(!resp.data || resp.data.length==0){
      isEnd.value = true
    }else{
      articleList.value = [...articleList.value,...resp.data]
    }
    loading.value = false;
  }
}
const getTagList = async () => {
  const resp = await getTags()
  if (resp && resp.success) {
    const data = resp.data || []
    const curTagList = data.filter((item: any) => item.articleCateId == route.params.cateId)
    tagList.value = curTagList
  }
}
watch(route,()=>{
    cateName.value = formatCate(<string>route.params.cateId)
})
onBeforeRouteUpdate((to) => {
  route = to
  pagation.pageIndex = 0
  tag.value = ""
  articleList.value = []
  isEnd.value = false
  initData()
  getTagList()
})
onMounted(() => {
  initData()
  getTagList()
})
const handlePullingUp = ()=>{
  if(isEnd.value){
    Toast('别拉啦，没有了！');
    return;
  }
  pagation.pageIndex += 1;
  loading.value = true;
  initData()
}
const handleSelect = (item:any)=>{
  pagation.pageIndex = 0
  tag.value = item.articleTagName || ''
  articleList.value = []
  isEnd.value = false
  initData()
}
</script>

<template>
  <BScroll @pullingUp="handlePullingUp"  :refresh="loading" :refreshFlag="articleList.length">
    <div class="articleCate">
      <div class="title">
        {{ cateName }}
      </div>
      <div class="tags">
        <van-tag type="primary" color="#fff" :class="tag == ''?'selected':''" @click="handleSelect('')"  size="large" >全部</van-tag>
        <van-tag type="primary" :class="tag == item.articleTagName?'selected':''" @click="handleSelect(item)" color="#fff" size="large" v-for="item in tagList">{{ item.articleTagName }}</van-tag>
      </div>
      <div class="main">
        <Article v-for="article in articleList" :articleModel="article" />
      </div>
      <div :class="['loading',loading?'show':'hide']">
        <van-loading size="24px">加载中...</van-loading>
      </div>
    </div>
  </BScroll>
</template>

<style scoped lang="scss">
.articleCate {
  padding-top: 50px;
  padding: 40px 28px 20px;
  .title {
    font-size: 56px;
    font-weight: bold;
    text-align: center;
    padding-bottom: 100px;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    .selected{
      transition: all ease-in .4s;
      background: $theme-color !important;
      color: #fff;
    }
  }
  .main {
    padding-top: 60px;
  }
  .van-tag {
    margin: 0 20px 20px;
    padding: 14px 20px;
    color: #000;
    box-shadow: 2px 0px 17px #ebedf0;
  }
  .loading{
    text-align: center;
    &.hide{
      visibility: hidden;
    }
    &.show{
      visibility: visible;
    }
    .van-loading{
      color: $theme-color !important;
    }
  }
}
</style>
