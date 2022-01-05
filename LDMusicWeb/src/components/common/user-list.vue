<template>
    <div class="users-list-main">
        <div class="list-header flex">
            <div class="columnIndex">序号</div>
            <div class="columnName">歌手名字</div>
            <div class="columnIsFollow">关注</div>
            <div class="columnAlbumNum">歌单数量</div>
            <div class="columnFollows">粉丝数量</div>
        </div>
        <div class="itemBox" v-for="(item,index) in userList" :key="item.userId">
            <div class="userItem">
                <div class="columnIndex">
                    {{getIndex(index)}}
                </div>
                <div class="columnName userItem_name" @click="handleToUserDetail(item)">
                    <el-image :src="item.avatarUrl + '?param=120y120'" style="width:40px"></el-image>
                    <!-- <el-image src="http://p1.music.126.net/7tpx_FGrXJvxZAMQUuwgrw==/109951163860779781.jpg?param=180y180" style="width:60px;border-radius:4px"></el-image> -->
                    <span class="userName">{{item.nickname}} </span>
                    <img src="../../assets/man.svg" alt="" v-if="item.gender == 1">
                    <img src="../../assets/woman.svg" alt="" v-else>
                </div>
                <div class="columnIsFollow">
                    <el-button type="success" icon="el-icon-plus" circle title="关注" v-if="!item.followed" @click="handleFollow('1',item)"></el-button>
                    <el-button type="warning" icon="el-icon-check" circle title="已关注" v-else @click="handleFollow('0',item)"></el-button >
                </div>
                <div class="columnAlbumNum">
                    {{item.playlistCount}}
                </div>
                <div class="columnFollows">
                    {{item.followeds}}
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'userList',
  props: {
    userList: {
      type: Array,
      default: []
    },
    offset: {
      // 若是列表有分页，偏移数量
      type: Number,
      default: 0
    },
    currentpage: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 0
    }
  },
  computed: {
    //   offset(){
    //   }
  },
  created () {
    console.log('this.offset', this.offset)
  },
  data () {
    return {}
  },
  methods: {
    ...mapMutations(['setCurrentUserInfo']),
    getIndex (index) {
      return this.offset + index + 1
    },
    // 关注或取消关注
    handleFollow (type, item) {
      console.log(type)
      if (!this.$store.state.isLogin) {
        this.$msg.warning('请先登录!')
      } else {
        if (type == 1) {
          this.$msgBox
            .confirm('是否关注该用户?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              center: true
            })
            .then(async () => {
                const resp = await this.$http.followUser(item.userId)
                console.log(resp, 'resp==>>>>')
                if (resp && resp.data.code == 200) {
                    this.$msg.success('关注成功!')
                    this.$parent.getSerachMatch()
                }
            })
            .catch(() => {})
        } else {
            this.$msgBox
            .confirm('是否取消关注', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              center: true
            })
            .then(async () => {
                const resp = await this.$http.followUser(item.userId, 0)
                if (resp && resp.data.code == 200) {
                    this.$msg.success('取消成功!')
                    this.$parent.getSerachMatch()
                }
            })
            .catch((err) => {
                    this.$msg.error(err)
            })
        }
      }
    },
    handleToUserDetail (userInfo) {
      this.setCurrentUserInfo(userInfo)
      this.$router.push({ path: '/user' })
    }
  }
}
</script>

<style lang="less" scoped>
.list-header {
  display: flex;
  line-height: 50px;
  border-bottom: 1px solid #ebeef5;
  font-weight: bold;
  color: #999;
}
.columnIndex {
  width: 80px;
  line-height: 50px;
  padding-left: 10px;
}
.columnName {
  display: flex;
  flex: 1.5;
  padding-right: 10px;
  overflow: hidden;
  align-items: center;
}
.columnIsFollow {
  display: flex;
  align-items: center;
  width: 200px;
  padding-right: 10px;
  overflow: hidden;
}
.columnAlbumNum {
  display: flex;
  align-items: center;

  width: 200px;
}
.columnFollows {
  display: flex;
  align-items: center;

  width: 200px;
  padding-right: 10px;
  text-align: right;
}
.itemBox {
  padding-top: 18px;
}
.userItem {
  display: flex;
  img {
    width: 40px;
  }
  &_name {
    display: flex;
    align-items: center;
    .userName {
      padding-left: 20px;
      font-size: 16px;
      font-weight: 600;

    }
    &:hover {
        color: @color-theme;
        cursor: pointer;
      }
    img {
      padding-left: 4px;
      width: 20px;
    }
  }
}
</style>
