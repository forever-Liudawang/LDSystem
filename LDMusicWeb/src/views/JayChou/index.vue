<template>
  <div class="jayChou">
    <div class="title">
      <h1 style="text-shadow: 1px 2px 2px #8b8b8b;">JayChou</h1>
    </div>
    <div class="main">
      <div style="padding-right: 20px;">
        <el-table :data="tableData" size="small" stripe style="width: 100%" :height="500">
          <el-table-column prop="artist" label="歌手" width="150"></el-table-column>
          <el-table-column prop="name" label="歌曲" width="150"></el-table-column>
          <el-table-column prop="cover" label="封面"  width="150">
            <template slot-scope="scope">
              <el-image
                style="width: 20px;"
                :src="scope.row.cover"
                fit="cover"></el-image>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="播放" width="180">
            <template slot-scope="scope">
              <div v-if="showPlaying(scope.row)">
                  <div class="audio-icon">
                      <div class="column" style="animation-delay: -1.2s;"></div>
                      <div class="column"></div>
                      <div class="column" style="animation-delay: -1.5s;"></div>
                      <div class="column" style="animation-delay: -0.9s;"></div>
                      <div class="column" style="animation-delay: -0.6s;"></div>
                  </div>
                  <!-- <i :class="playIcon(scope)" @click="currentSong(item)"></i> -->
              </div>
              <el-button v-else type="danger" icon="el-icon-video-play" size="small" circle @click="handlePlay(scope)"></el-button>
            </template>
          </el-table-column>
          <div slot="append" v-if="!loadFinsh" class="loadMore" @click="handleLoadMore">点击加载更多</div>
          <div slot="append" v-else class="loadMore">没有了</div>
        </el-table>
      <!-- <el-pagination  @current-change="handlePageChange" :page-size="5" layout="prev, pager, next" :total="34">
      </el-pagination> -->
      </div>
      <div>
        <Detail :musicModel="musicModel"/>
      </div>
    </div>
  </div>
</template>

<script>
import { jayZhouList, jayZhouPath } from '../../config'
import Detail from './detail.vue'
import { mapMutations, mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {
      tableData: [],
      pagation: {
        pageIndex: 1,
        pageSize: 8
      },
      musicModel: {},
      loadFinsh: false
    }
  },
  components: {
    Detail
  },
  mounted () {
    this.initData()
  },
  computed: {
    ...mapState(['jayChouList', 'jayChouPlayIndex', 'jayChouPlayStatus']),
    ...mapGetters(['curJayChouMusic']),
    playIcon () {
        const self = this
        return (item) => {
            return ['iconfont', 'playicon', this.isPlajayChouPlayStatusyed && (item.url === self.musicModel.url) ? 'icon-pause' : 'icon-play']
        }
    },
    showPlaying () {
      return function (curMusic) {
        return curMusic.url === this.curJayChouMusic.url
      }
    }
  },
  methods: {
    ...mapMutations(['setJayChouList', 'setJayChouPlayIndex']),
    handlePageChange (curPage) {
      this.pagation.pageIndex = curPage
      this.initData()
    },
    handleLoadMore () {
      if (this.loadFinsh) return
      this.pagation.pageIndex = this.pagation.pageIndex + 1
      this.initData()
    },
    initData () {
      const list1 = jayZhouList.slice(
        (this.pagation.pageIndex - 1) * this.pagation.pageSize,
        (this.pagation.pageIndex - 1) * this.pagation.pageSize + this.pagation.pageSize
      )
      if (list1 < 5) {
        this.loadFinsh = true
      }
      const list = list1.map(item => {
        return {
          name: item,
          artist: '周杰伦',
          url: `${jayZhouPath}/${item}.mp3`,
          cover: `${jayZhouPath}/${item}.jpg`,
          lrc: `${jayZhouPath}/${item}.lrc`
        }
      })
      this.tableData = [...this.tableData, ...list]
      this.setJayChouList(this.tableData)
    },
    handlePlay (item) {
      // this.musicModel = item.row
      this.setJayChouPlayIndex(item.$index)
    }
  }
}
</script>

<style lang="less" scoped>
.jayChou {
  padding: 0 6%;
  .title {
    font-size: 30px;
    padding: 20px 0;
    font-weight: bold;
    text-align: center;
  }
  .main {
    display: flex;
    width: 100%;
    .audio-icon{
      display: flex;
      .column{
        width: 2px;
        height: 100%;
        margin-left: 2px;
        background-color: #ff4c21;
        -webkit-animation: music 0.9s linear infinite alternate;
        animation: music 0.9s linear infinite alternate;
      }
      @-webkit-keyframes music {
          0% {
              transform: translateY(0);
          }
          to {
              transform: translateY(75%);
          }
          }
    }
    .loadMore{
      text-align: center;
      cursor: pointer;
      padding: 10px;
    }
  }
}
</style>
