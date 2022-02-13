<script setup lang="ts">
import { reactive, ref, toRefs, onMounted } from 'vue'
import { getMathchProcess } from '@src/apis/index'
import MatchList from '../components/MatchList.vue'
import { useRouter } from 'vue-router'
const matchList = ref<any[]>([])
const router = useRouter()
onMounted(async () => {
  function handleData(data: any[] = []) {
    let list: any[] = []
    console.log('data', data)
    for (let i = 0; i < data.length; i++) {
      const temp: any = {}
      const games = data[i].games || []
      const date = new Date(+data[i].utcMillis)
      const day = date.getDate()
      const month = date.getMonth() + 1
      let week: number | string = date.getDay()
      if (week == 0) {
        week = '日'
      }
      temp['time'] = `${month}月${day}日星期${week}`
      let gameData: any[] = []
      for (let j = 0; j < games.length; j++) {
        const t = games[j]
        const game: any = {}
        const gameDate = new Date(+t.profile.utcMillis)
        game['date'] = gameDate.getHours() + ':' + (gameDate.getMinutes() > 10 ? gameDate.getMinutes() : gameDate.getMinutes() + '0')
        game['team'] = t.homeTeam.profile.displayAbbr + 'VS' + t.awayTeam.profile.displayAbbr
        game['score'] = t.boxscore.awayScore > 0 ? t.boxscore.awayScore + '-' + t.boxscore.homeScore : '-'
        game['address'] = t.profile.arenaName
        game['link'] = t.urls || []
        gameData.push(game)
      }
      temp['data'] = gameData
      list.push(temp)
    }
    matchList.value = list
  }
  const resp = await getMathchProcess()
  if (resp && resp.payload) {
    const list = resp.payload.dates || []
    handleData(list)
  }
})
</script>

<template>
  <div style="height: 100vh; width: 100vw" class="home">
    <div class="card">
      <div class="title">unstopable</div>
      <video controls="controls" src="/src/assets/bg.mp4" poster="/src/assets/bg.jpg" style="width: 100%; margin-top: 20px; border-radius: 2px" loop></video>
    </div>
    <div class="btn">
      <button class="learn-more">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <h1 class="button-text" @click="router.push('/chart')">go chart</h1>
      </button>
    </div>
    <div class="match">
      <span class="title">Schedule</span>
      <MatchList :matchList="matchList" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  position: relative;
  background-color: #ececec;
  display: flex;
  justify-content: center;
  background-image: url('../assets/bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  .card {
    position: absolute;
    left: 10%;
    top: 10%;
    width: 25%;
    height: 50%;
    border-radius: 4px;
    background: #000;
    /* background: rgb(40, 40, 55); */
    background: linear-gradient(344deg, rgba(40, 40, 55, 1) 0%, rgba(16, 16, 18, 1) 50%);
    /* box-shadow: 4px 6px 14px #2f2f42; */
    color: #f9f9f9;
    padding: 16px;
    transition: all 0.3s;
    &:hover {
      margin-top: -30px;
      cursor: pointer ;
    }
    .title {
      border-radius: 30px;
      padding: 40px 0;
      /* box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff; */
      font-size: 42px;
      text-align: center;
      font-weight: bold;
      text-transform: uppercase;
      position: relative;
      /* background-color: #333;  */
      /* color: #fefefe; */
      text-shadow: 0px 1px 0px #c0c0c0, 0px 2px 0px #b0b0b0, 0px 3px 0px #a0a0a0, 0px 4px 0px #909090, 0px 5px 10px rgba(180, 180, 180, 0.6);
    }
  }
  .btn {
    position: absolute;
    left: 39%;
    top: 35%;
    button {
      position: relative;
      display: inline-block;
      cursor: pointer;
      outline: none;
      border: 0;
      vertical-align: middle;
      text-decoration: none;
      background: transparent;
      padding: 0;
      font-size: inherit;
      font-family: inherit;
    }

    button.learn-more {
      width: 6rem;
      height: auto;
    }

    button.learn-more .circle {
      transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
      position: relative;
      display: block;
      margin: 0;
      width: 2rem;
      height: 2rem;
      background: #282936;
      border-radius: 1.625rem;
    }

    button.learn-more .circle .icon {
      transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      background: #fff;
    }

    button.learn-more .circle .icon.arrow {
      transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
      left: 0.225rem;
      width: 1.125rem;
      height: 0.125rem;
      background: none;
    }

    button.learn-more .circle .icon.arrow::before {
      position: absolute;
      content: '';
      top: -0.29rem;
      right: 0.0625rem;
      width: 0.625rem;
      height: 0.625rem;
      border-top: 0.125rem solid #fff;
      border-right: 0.125rem solid #fff;
      transform: rotate(45deg);
    }

    button.learn-more .button-text {
      transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0.75rem 0;
      margin: 0 0 0 1.85rem;
      color: #fff;
      font-weight: 700;
      line-height: 1.6;
      text-align: center;
      text-transform: uppercase;
    }

    button:hover .circle {
      width: 100%;
    }

    button:hover .circle .icon.arrow {
      background: #fff;
      transform: translate(1rem, 0);
    }

    button:hover .button-text {
      color: #fff;
    }
  }
  .sign {
    position: absolute;
    right: 18%;
    top: 10%;
    z-index: 1;
    font-size: 50px;
    transform: translate3d(0px, 0px, 1px);
    visibility: inherit;
    opacity: 1;
    font-weight: bold;
    /* font-family: "plantc", "Source Han Serif", serif; */
    color: #000;
    text-shadow: -2px -4px white, 4px 2px #bebebe;
  }
  .match {
    overflow: auto;
    .title {
      font-size: 20px;
      font-weight: bold;
    }
    position: absolute;
    padding: 24px 20px;
    right: 10%;
    bottom: 10%;
    width: 25%;
    height: 50%;
    border-radius: 4px;
    background: #fff;
    transition: all 0.3s;
    &:hover {
      margin-bottom: -30px;
      cursor: pointer ;
    }
    /* box-shadow: 5px 5px 10px #bebebe, -2px -2px 5px #ffffff; */
    &::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
      height: 1px;
    }
    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 10px;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: #fff;
    }
    &::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      background: #f7f7f7;
    }
  }
}
</style>
