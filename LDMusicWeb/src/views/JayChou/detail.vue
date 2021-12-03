<template>
  <div class="song-container">
    <div style="display: flex" v-if="isHaveMusic">
      <div class="song-sidebar">
        <div class="sidebar" @click="handlePlay">
          <div class="cover">
            <div :class="['cover-img', jayChouPlayStatus ? 'active' : '']">
              <img src="@/assets/stylus.png" class="cover-stylus" />
              <el-image :src="curJayChouMusic.cover">
                <div slot="placeholder" class="image-slot">
                  <i class="iconfont icon-placeholder"></i>
                </div>
              </el-image>
            </div>
          </div>
        </div>
        <div>
          <canvas id="canvas" ref="canvas" width="300" height="146"></canvas>
        </div>
        <div>
          <progress-line
            style="margin-top: 20px"
            class="audioProgress"
            :progressWidth="audioProgressWidth"
            @setProgressLine="setAudioProgress"
          ></progress-line>
          <div style="text-align: right">
            <span>{{ $utils.formatSongTime(currentTime * 1000) }}</span> /
            {{ $utils.formatSongTime(totalTime * 1000) }}
          </div>
        </div>
        <div class="volume-main">
          <i
            :class="['iconfont', mutedIcon]"
            style="margin-right: 8px"
            title="音量"
            @click.stop="volumeHandler"
          ></i>
          <progress-line
            class="volumeLine"
            :progressWidth="volumeProgressWidth"
            @setProgressLine="setvolumeProgress"
          ></progress-line>
        </div>
      </div>
      <audio
        ref="audio"
        crossOrigin="anonymous"
        preload="auto"
        @canplay="canplaySong"
        @playing="playSong"
        @ended="endedSong"
        @error="errorSong"
        @timeupdate="updateSongTime"
        :src="curJayChouMusic.url"
      ></audio>
      <div class="song-main">
        <h1 class="song-name">
          {{ curJayChouMusic.name }}
          <span>
          <router-link
            :to="{ path: '/singer', query: { id: '6452' } }"
            class="song-author"
            >周杰伦</router-link
          >
        </span>
        </h1>
        <!-- <p class="song-info">
                    <span>专辑：next one </span>
                    <span>发行时间：<em>2080年01月01日</em></span>
                </p> -->
        <div class="song-oper">
          <!-- <span class="play-btn play-all"><i :class="['iconfont', playFontIcon]"></i>立即播放</span> -->
        </div>
        <div class="song-lyric">
          <Lyrics
            :lrcUrl="curJayChouMusic.lrc"
            :currentTime="currentTime"
          ></Lyrics>
        </div>
      </div>
    </div>
    <div v-else>
      <h2>暂无音乐播放</h2>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState, mapGetters } from 'vuex'
import Lyrics from '@components/common/lyrics.vue'
import ProgressLine from '@components/common/progress'
import { DwebAudioView } from './dwebaudioview'
import initAudio from './t'
export default {
  name: 'song-detail',
  props: {
    musicModel: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    Lyrics,
    ProgressLine
  },
  created () {},
  data () {
    // 这里存放数据
    return {
      cover: '',
      sId: '0',
      type: 0, // 0: 歌曲 1: mv 2: 歌单 3: 专辑  4: 电台 5: 视频 6: 动态
      simiSong: [],
      currentTime: 0,
      totalTime: 0,
      volumeNum: 0.5,
      oldVolume: 0,
      isMuted: false, // 是否禁音
      canPlay: false,
      audioview: null,
      initAudio
    }
  },
  mounted () {
    this.init()
    this.$nextTick(() => {
      this.initAudioCtx()
    })
    // window.addEventListener('scroll', this.handleScroll, true)
  },
  // 监听属性 类似于data概念
  computed: {
    ...mapGetters(['curJayChouMusic', 'jayChouMusicSize']),
    ...mapState(['jayChouPlayStatus', 'jayChouPlayIndex']),
    isCurSong () {
      return (
        this.isPlayed && this.curSongInfo && this.curSongInfo.id === this.sId
      )
    },
    // 当前播放状态
    playFontIcon () {
      return this.isCurSong ? 'icon-audio-pause' : 'icon-audio-play'
    },
    curSongInfo () {
      return this.playList[this.playIndex]
    },
    audioProgressWidth () {
      // 音频进度条长度
      return (this.currentTime / this.totalTime) * 100 + '%'
    },
    volumeProgressWidth () {
      return (this.volumeNum / 1) * 100 + '%'
    },
    // 是否静音
    mutedIcon () {
      return this.isMuted ? 'icon-volume-active' : 'icon-volume'
    },
    isHaveMusic () {
      return Object.keys(this.curJayChouMusic).length > 0
    }
  },
  // 方法集合
  methods: {
    ...mapMutations(['setJayChouPlay', 'setJayChouPlayIndex']),
    ...mapActions(['selectPlay', 'playAll']),
    async getSongDetail () {},
    init () {},
    // 解决刷新页面时候，音频准备就绪
    canplaySong (e) {
      this.canPlay = true
      if (!this.jayChouPlayStatus) {
        return
      }
      this.$refs.audio.play()
      this.setJayChouPlay(true)
    },
    // 音频播放时候 初始化状态，获取音频总时长
    playSong (e) {
      this.totalTime = e.target.duration
    },
    // 音频播放结束 自动播放下一首
    endedSong (e) {
      if (this.jayChouPlayIndex >= this.jayChouMusicSize) {
        this.setJayChouPlayIndex(0)
      } else {
        this.setJayChouPlayIndex(this.jayChouPlayIndex + 1)
      }
    },
    // 音频加载失败
    errorSong (e) {},
    // 监听音频时间， 实时更新当前播放时间
    updateSongTime (e) {
      this.currentTime = e.target.currentTime
      // this.audioview.startPlay(e.target.currentTime)
    },
    handlePlay () {
      if (!this.canPlay) return
      if (this.jayChouPlayStatus) {
        this.$refs.audio.pause()
        // this.audioview.stopPlay()
      } else {
        this.$refs.audio.play()
      }
      this.setJayChouPlay()
    },
    setAudioProgress (e) {
      this.currentTime = e.val * this.totalTime
      this.$refs.audio.currentTime = e.val * this.totalTime
    },
    volumeHandler () {
      this.isMuted = this.$refs.audio.muted = this.isMuted ? 0 : 1
      this.isMuted && (this.oldVolume = this.volumeNum)
      this.volumeNum = this.isMuted ? 0 : this.oldVolume
    },
    // 点击拖拽音量条，设置当前音量
    setvolumeProgress (params) {
      this.volumeNum = params.val
      this.oldVolume = params.val
      this.$refs.audio.volume = params.val
      this.isMuted = this.$refs.audio.muted = params.val ? 0 : 1
    },
    initAudioCtx () {
        this.audioview = new DwebAudioView(this.$refs.audio, this.$refs.canvas)
        this.audioview.initAudio()
    }
  },
  watch: {
    jayChouPlayStatus (newVal, oldVal) {
      if (newVal) {
        this.$refs.audio.play()
      } else {
        this.$refs.audio.pause()
      }
    },
    curJayChouMusic () {
      // this.initAudioCtx()
    }
  },
  beforeRouteLeave (to, from, next) {
    next()
  }
}
</script>
<style scoped lang="less">
.song-container {
  .song-sidebar {
    width: 280px;
    .volume-main {
      flex: 1;
      padding: 10px 0;
      display: flex;
      align-items: center;
    }
  }

  .song-main {
    position: relative;
    margin-left: 100px;
  }
}

.cover {
  position: relative;
}
.cover-img {
  position: relative;
  width: 190px;
  padding: 40px;
  font-size: 0;
  background: url("../../assets/disc.png") no-repeat;
  background-size: contain;
  cursor: pointer;

  .cover-stylus {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    display: inline-block;
    width: 30px;
    height: 120px;
    transition: all 0.3s;
    transform-origin: 23px 5px;
    transform: rotateZ(-30deg);
  }

  .el-image {
    width: 190px;
    height: 190px;
    border-radius: 100%;
    animation: soundPaying 15s linear infinite;
    animation-play-state: paused;
  }

  &.active {
    .cover-stylus {
      transform: rotateZ(0);
    }

    .el-image {
      animation-play-state: running;
    }
  }

  .iconfont {
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
  }
}

.cover-desc {
  h5 {
    margin-top: 40px;
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: 600;
    height: 30px;
    line-height: 30px;
  }

  p {
    width: 100%;
    font-size: 14px;
    color: #999;
    line-height: 21px;
    word-break: break-all;
  }
}

.simi-song {
  h6 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
  }
  .simi-name {
    line-height: 20px;
    font-size: 12px;
    color: #000;
  }

  .simi-author {
    font-size: 0;

    a {
      font-size: 12px;
      color: #999;
    }
  }

  .simi-item {
    display: flex;
    padding-top: 5px;
    border-bottom: 1px solid #f2f2f2;
    margin-bottom: 5px;
  }

  .simi-info {
    flex: 1;
  }

  .simi-song-status {
    line-height: 48px;

    i {
      cursor: pointer;
    }
  }
}

.song-name {
  font-size: 30px;
  line-height: 60px;
  padding-bottom: 10px;

  .iconfont {
    margin-right: 10px;
    font-size: 24px;
    color: @color-theme;
  }

  .audio-icon {
    display: inline-flex;
  }
}
.song-author {
  display: inline-block;
  font-size: 18px;
  color: #666;
  line-height: 18px;
}

.song-info {
  padding: 20px 0;
  font-size: 0;
  color: #999;

  span {
    display: inline-block;
    padding-right: 30px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  a,
  em {
    color: #333;
    font-style: normal;
  }
}

.song-oper {
  .play-btn {
    display: inline-block;
    line-height: 16px;
    align-items: center;
    border-radius: 50px;
    padding: 7px 15px;
    cursor: pointer;
    margin: 5px 15px 5px 0;
    background: #f0f0f0;
    color: #333;
  }

  .play-all {
    color: #fff;
    background: @color-theme;
    i {
      color: #fff;
    }
  }

  .disable {
    background: #ccc;
    cursor: not-allowed;
  }
}

@keyframes soundPaying {
  from {
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
  }

  to {
    -webkit-transform: rotate(370deg);
    transform: rotate(370deg);
  }
}

.song-lyric {
  margin: 30px 0 0 0;
  overflow-y: auto;
  border: 1px solid #f3f3f3;
  border-radius: 4px;
  padding: 4px 60px;
  box-shadow: 2px 10px 17px #ebedf0;
}

.song-comments {
  margin: 10px 0 30px;
}
</style>
