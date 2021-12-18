<template>
  <div class="back" v-show="showBack">
    <el-button title="返回" circle icon="el-icon-back" @click="back" style="background:#ff4c21;color:#fff"></el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      notShowList: ['/index', '/rank', '/playlist', '/mvlist', '/artist', '/my', '/feedback', 'jayChou']
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  },
  computed: {
    showBack () {
      console.log(this.$route)
      const { path } = this.$route
      return !this.notShowList.includes(path)
    }
  }
}
</script>

<style lang="less">
.back{
  position: fixed;
  left: 2%;
  top: 50%;
}
</style>
