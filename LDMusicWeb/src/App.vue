<template>
  <el-container id="app" class="container">
    <el-header style="height:auto">
      <my-header></my-header>
    </el-header>
    <el-main>
      <div class="layout">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <!-- <my-footer></my-footer> -->
      <el-backtop target=".el-main" :bottom="backBottom">
        <img src="./assets/goTop.png" alt="" />
      </el-backtop>
    </el-main>
    <Login v-if="loginDialogVisible"></Login>
    <play-bar v-show="isShowPlayBar"></play-bar>
  </el-container>
</template>

<script>
import myHeader from '@components/common/header.vue'
import myFooter from '@components/common/footer.vue'
import playBar from '@components/common/play-bar.vue'
import Login from '@components/common/login.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  components: {
    myHeader,
    myFooter,
    Login,
    playBar
  },
  data () {
    // 这里存放数据
    return {
      backBottom: 80,
      oldScrollTop: 0
    }
  },
  // 监听属性 类似于data概念
  computed: {
    ...mapGetters(['isLogin', 'userInfo', 'loginDialogVisible']),
    isShowPlayBar () {
      return this.$route.path !== '/mv' && this.$route.path !== '/video'
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrolling)
  },
  // 方法集合
  methods: {
    scrolling () {
      // 滚动条距文档顶部的距离
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      // 滚动条滚动的距离
      const scrollStep = scrollTop - this.oldScrollTop
      // 更新——滚动前，滚动条距文档顶部的距离
      this.oldScrollTop = scrollTop
      if (scrollStep < 0) {
        alert('滚动条向上滚动了！')
      } else {
        alert('滚动条向下滚动了！')
      }
    }
  }
}
</script>
<style scoped>
.container {
  height: 100%;
}
.layout {
  padding: 0 12%;
  /* min-height: calc(100vh - 80px - 40px); */
}
</style>
