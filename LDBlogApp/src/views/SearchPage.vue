<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { useRoute,onBeforeRouteUpdate} from 'vue-router'
import { getSearchList } from '@src/apis'
import Article from '@src/components/Article.vue'
import BScroll from '@com/BScroll.vue'
let route = useRoute()
const articleList = ref<any[]>([])
const total = ref(0)
const initData = async () => {
  const resp = await getSearchList({ searchKey: route.query.searchKey })
  if (resp && resp.success) {
    articleList.value = resp.data
    total.value = resp.extend.total
  }
}
onBeforeRouteUpdate((to) => {
  route = to
  articleList.value = []
  initData()
})
onMounted(() => {
  initData()
})
</script>

<template>
    <BScroll>
      <div class="searchPage">
        <div>
          <h1 style="text-align: center">搜索结果</h1>
          <h3 style="text-align: center;">一共{{total}}条</h3>
        </div>
        <Article v-for="article in articleList" :articleModel="article" :refreshFlag="articleList.length" />
      </div>
    </BScroll>
</template>

<style lang="scss" scoped>
.searchPage {
  padding: 40px 28px 20px;
}
</style>
