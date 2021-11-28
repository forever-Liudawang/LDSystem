<template>
  <div class="jayChou">
    <div class="title">
      <h1>jayChou music</h1>
    </div>
    <div class="main">
      <div style="padding-right: 20px;">
        <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="artist" label="歌手" width="150"></el-table-column>
        <el-table-column prop="name" label="歌曲" width="150"></el-table-column>
        <el-table-column prop="cover" label="封面"  width="150">
          <template slot-scope="scope">
            <el-image
              style="width: 50px;"
              :src="scope.row.cover"
              fit="cover"></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="播放" width="180">
          <template slot-scope="scope">
            <!-- <div class="columnIndex">
                <div class="audio-icon">
                    <div class="column" style="animation-delay: -1.2s;"></div>
                    <div class="column"></div>
                    <div class="column" style="animation-delay: -1.5s;"></div>
                    <div class="column" style="animation-delay: -0.9s;"></div>
                    <div class="column" style="animation-delay: -0.6s;"></div>
                </div>
                <i :class="playIcon(scope)" @click="currentSong(item)"></i>
            </div> -->
            <el-button type="danger" icon="el-icon-video-play" circle @click="handlePlay(scope)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination  @current-change="handlePageChange" :page-size="5" layout="prev, pager, next" :total="34">
      </el-pagination>
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
import { mapMutations, mapState } from 'vuex'
export default {
  data () {
    return {
      tableData: [],
      pagation: {
        pageIndex: 0,
        pageSize: 5
      },
      musicModel: {}
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
    playIcon () {
        const self = this
        return (item) => {
            return ['iconfont', 'playicon', this.isPlajayChouPlayStatusyed && (item.url === self.musicModel.url) ? 'icon-pause' : 'icon-play']
        }
    }
  },
  methods: {
    ...mapMutations(['setJayChouList', 'setJayChouPlayIndex']),
    handlePageChange (curPage) {
      this.pagation.pageIndex = curPage
      this.initData()
    },
    initData () {
      const list1 = jayZhouList.slice(
        this.pagation.pageIndex * 5,
        this.pagation.pageIndex * 5 + 5
      )
      const list = list1.map(item => {
        return {
          name: item,
          artist: '周杰伦',
          url: `${jayZhouPath}/${item}.mp3`,
          cover: `${jayZhouPath}/${item}.jpg`,
          lrc: `${jayZhouPath}/${item}.lrc`
        }
      })
      this.tableData = list
    },
    handlePlay (item) {
      this.musicModel = item.row
      this.setJayChouList(this.tableData)
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
  }
}
</style>
