<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getRecommendArticle } from '@src/apis/index'
import Article from '@com/Article.vue'
import BScroll from '@src/components/BScroll.vue'
import Footer from '@com/Footer.vue'
import 'APlayer/dist/APlayer.min.css'
import aPlayer from 'APlayer'
import {jayZhouList,jayZhouPath} from "../config"
const recommendList = ref<any[]>([])
const audioRef = ref()
let apCtx:any = ref();
let pageIndex = ref(0)
const initData = async () => {
  const resp = await getRecommendArticle()
  if (resp && resp.success) {
    recommendList.value = resp.data
  }
}
const initAudio = () => {
  apCtx.value && apCtx.value.destroy()
  let list1 = jayZhouList.slice(pageIndex.value*5,pageIndex.value*5 + 5)
  if(list1.length < 5){
    pageIndex.value = 0;
    initAudio()
    return;
  }
  const list = list1.map(item=>{
    return {
      name: item,
      artist: '周杰伦',
      url: `${jayZhouPath}/${item}.mp3`,
      cover: `${jayZhouPath}/${item}.jpg`,
      lrc: `${jayZhouPath}/${item}.lrc`,
    }
  })
  apCtx.value = new (aPlayer as any)({
    container: audioRef.value,
    mini: false,
    autoplay: false,
    listFolded: true,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    // listMaxHeight: 90,
    lrcType: 3,
    audio: list
  })
}
const handlePrevSong = ()=>{
  apCtx.value.skipBack()
  apCtx.value.play()
}
const handleNextSong = ()=>{
  apCtx.value.skipForward()
  apCtx.value.play()

}
const handleNextPage = ()=>{
  pageIndex.value +=1;
  initAudio()
  apCtx.value.play()
}
const handlePrevPage = ()=>{
  if(pageIndex.value==0)return
  pageIndex.value -=1;
  initAudio()
}
onMounted(() => {
  initData()
  initAudio()
})
const handleScroll = (pos: any) => {
}
const handlePullingUp = () => {}
</script>

<template>
  <BScroll @scroll="handleScroll" @pullingUp="handlePullingUp">
    <div class="home">
      <div class="title">
        <span>Blog</span>
        <span class="sign">始于平淡，归于坦然</span>
        <div id="audio" >
          <div ref="audioRef"></div>
          <div style="font-size: 12px;">(Jay Chou34首)</div>
          <div style="margin-top: 10px;">
            <van-button round type="primary" size="mini" color="#ff4c21" @click="handlePrevPage">上一页</van-button>
            <van-button round type="primary" size="mini" color="#ff4c21" @click="handlePrevSong">上一首</van-button>
            <van-button round type="primary" size="mini" color="#ff4c21" @click="handleNextSong">下一首</van-button>
            <van-button round type="primary" size="mini" color="#ff4c21" @click="handleNextPage">下一页</van-button>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="recommendItem" v-for="item in recommendList">
          <div class="tagTitle">{{ item.articleCateName }}</div>
          <div class="articleBox">
            <Article v-for="article in item.data" :articleModel="article"></Article>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </BScroll>
</template>
<style lang="scss">
#audio{
    min-width: 500px;
    max-width: 80%;
    margin-top: 20px;
    .aplayer-info p{
      /* font-size: 30px; */
    }
}</style>
<style lang="scss" scoped>
.home {
  height: 100%;
  /* padding-bottom: 50px; */
  
  .title {
    height: 480px;
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
    .sign {
      padding-top: 18px;
      font-size: 30px;
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
      text-shadow: 1px 1px 0 #fff, 3px 3px 0 $theme-color, 4px 4px 0 $theme-color;
    }
    .articleBox {
    }
  }
}
</style>
