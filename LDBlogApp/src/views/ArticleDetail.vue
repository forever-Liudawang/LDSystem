<script setup lang="ts">
import { getArticleById } from '@src/apis';
import { useRoute } from 'vue-router';
import {onMounted,ref,toRaw} from "vue"
import {IArticleModel} from "@src/utils/types"
let route = useRoute()
const articleModel = ref<IArticleModel>()
console.log(toRaw(route))
const initData =async ()=>{
    const resp = await getArticleById({articleId:route.params.articleId});
    if(resp && resp.success){
      articleModel.value = resp.data?resp.data[0]:{}
    }
}
onMounted(()=>{
  initData()
})
</script>


<template>
  <div class="articleDetail">
      <h2>{{articleModel?.articleTitle}}</h2>
      <div v-html="articleModel?.content">
      </div>
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
