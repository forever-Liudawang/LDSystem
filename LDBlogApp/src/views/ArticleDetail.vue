<script setup lang="ts">
import { getArticleById } from '@src/apis';
import { useRoute } from 'vue-router';
import {onMounted,ref,toRaw,watch} from "vue"
import {IArticleModel} from "@src/utils/types"
let route = useRoute()
const articleModel = ref<IArticleModel>()
const commentRef = ref()
const initData =async ()=>{
    const resp = await getArticleById({articleId:route.params.articleId});
    if(resp && resp.success){
      articleModel.value = resp.data?resp.data[0]:{}
    }
}
const initIframe = ()=>{
  commentRef.value.onload = function(){
      commentRef.value.height = commentRef.value.contentDocument.body && commentRef.value.contentDocument.body.scrollHeight + 100
  }
}
watch(()=>route.params.articleId,()=>{
  initIframe()
})
onMounted(()=>{
  initData()
  initIframe()
})
</script>


<template>
  <div class="articleDetail">
      <h2 style="text-align: center;">{{articleModel?.articleTitle}}</h2>
      <div v-html="articleModel?.content">
      </div>
      <iframe ref="commentRef" style="width: 100%;min-height: 300px;" :src="`/comment.html?articleId=${route.params.articleId}`" frameborder="0"></iframe>
  </div>
</template>

<style lang="scss" scoped>
.articleDetail{
  padding: 40px;
  img{
    min-width: 50%;
  }
}

</style>
