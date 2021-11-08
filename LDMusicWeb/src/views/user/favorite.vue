<template>
    <div class='favorite'>
        <div class="favorite-header">
            <h4>听歌排行</h4>
        </div>
        <div class="list-container">
            <template v-if="isLoading">
                <Loading />
            </template>
            <template v-else>
                <song-list :songList="listenList" :stripe="true"></song-list>
            </template>
        </div>
    </div>
</template>

<script>
import Loading from '@components/common/loading'
import songList from '@components/common/song-list'
import {mapState} from "vuex"
export default {
    components: {
        Loading,
        songList
    },
    data () {
        // 这里存放数据
        return {
            list: [],
            isLoading: true,
            total: 0,
            listenList:[]
        }
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapState(['currentUserInfo'])
    },
    mounted () {
        this.getListenMusic()
    },
    // 方法集合
    methods: {
       async getListenMusic() {
           const resp = await this.$http.getPlayList(this.currentUserInfo.userId)
           if(resp && resp.data.code ==200){
               const data = resp.data.weekData
               let list = []
               data.forEach(item=>{
                   const {song} = item
                   list.push(song)
               })
               this.listenList = list
               this.isLoading = false
           }
       }
    }
}
</script>
<style scoped lang="less">
.favorite-header {
    em {
        font-style: normal;
    }
}
.list-container {
    padding: 40px 0;

    .item {
        position: relative;
        display: inline-flex;
        width: 50%;
        margin: 0 0 40px;

        .el-image {
            transition: all .4s linear;
        }

        &::before {
            position: absolute;
            display: inline-block;
            content: '';
            width: 0;
            height: 100%;
            background: #fafafa;
            transition: width 0.3s ease-in-out;

            .el-image {
                transform: rotateY(180deg);
            }
        }

        &:hover {
            &::before {
                width: 100%;
            }
        }
    }

    .faceImg {
        width: 80px;
        height: 80px;
        border-radius: 4px;
        overflow: hidden;
    }

    .info {
        position: relative;
        z-index: 2;
        padding: 10px 0 0 20px;

        .name {
            line-height: 28px;
            font-size: 14px;
        }

        .size {
            color: #999;

            span {
                display: inline-block;
                padding-right: 10px;
            }
        }
    }
}
</style>
