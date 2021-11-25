<script setup lang="ts">
import { getArticleById } from '@src/apis'
import { useRoute } from 'vue-router'
import { onMounted, ref, toRaw, watch } from 'vue'
import { IArticleModel } from '@src/utils/types'
import BScroll from '@com/BScroll.vue'

// 显式加载资源为一个 URL
let route = useRoute()
const articleModel = ref<IArticleModel>()
console.log(`import.meta.env.DEV`, import.meta.env.DEV)
const commentUrl = ref('/comment.html')
if (!import.meta.env.DEV) {
  commentUrl.value = '/static/mobile/comment.html'
}
const commentRef = ref()
const initData = async () => {
  const resp = await getArticleById({ articleId: route.params.articleId })
  if (resp && resp.success) {
    articleModel.value = resp.data ? resp.data[0] : {}
  }
}
const initIframe = () => {
  commentRef.value.onload = function () {
    commentRef.value.height = commentRef.value.contentDocument.body && commentRef.value.contentDocument.body.scrollHeight + 100
  }
}
watch(
  () => route.params.articleId,
  () => {
    initIframe()
  }
)
onMounted(() => {
  initData()
  initIframe()
})
</script>

<template>
  <BScroll :refreshFlag="commentRef?commentRef.height:6">
    <div class="articleDetail">
      <h2 style="text-align: center">{{ articleModel?.articleTitle }}</h2>
      <div v-html="articleModel?.content" v-highlight></div>
      <iframe ref="commentRef" style="width: 100%; min-height: 300px" :src="`${commentUrl}?articleId=${route.params.articleId}`" frameborder="0"></iframe>
    </div>
  </BScroll>
</template>

<style lang="scss" scoped>
.articleDetail {
  padding: 40px;
  &:deep(img) {
    max-width: 100% !important;
    height: auto !important;
  }
}
</style>
