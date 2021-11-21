<script setup lang="ts">
import { reactive, toRefs, ref, onMounted,toRaw} from 'vue'
import dateFormat from "@src/utils/time"
import { useRouter } from 'vue-router'
const router = useRouter()
interface Props {
  articleModel?: any
}
const props = withDefaults(defineProps<Props>(),{
})
const articleModel = props.articleModel || {}
const handleToArticleDetail= ()=>{
  router.push({
    path:`/articleDetail/${articleModel.articleCate}/${articleModel._id}`
  })
}
</script>

<template>
  <div class="article" @click="handleToArticleDetail">
    <div class="avatar">
      <van-image cover radius="4" width="90" height="100%" :src="articleModel.coverImg" />
    </div>
    <div class="main">
      <div class="title">{{articleModel.articleTitle}}</div>
      <div class="detail">
        <div>
          <van-icon name="clock-o" class="icon" />
          <span>{{dateFormat(articleModel.updated)}}</span>
        </div>
        <div style="margin-left: 20px">
          <van-icon name="friends-o" class="icon" />
          <span>{{articleModel.userName}}</span>
        </div>
      </div>
      <div class="tags d-flex">
        <van-icon name="bookmark-o" class="icon" />
        <div>
          <span class="tag" v-for="item in (articleModel.articleTags || [])">{{item}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article {
  height: 200px;
  background-color: #fff;
  box-shadow: 2px 10px 17px #ebedf0;
  padding: 12px;
  border-radius: 6px;
  display: flex;
  margin-bottom: 40px;
  .avatar {
    height: 100%;
  }
  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    justify-content: space-between;
  }
  .title {
    font-size: 32px;
    font-weight: bold;
  }
  .detail {
    display: flex;
    font-size: 28px;
  }
  .icon {
    padding-right: 10px;
  }
  .tag {
    padding-right: 8px;
  }
}
</style>
