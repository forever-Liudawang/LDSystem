<script setup lang="ts">
import { onMounted, ref, getCurrentInstance, watchEffect, watch, Ref } from 'vue'
import { getAthleteData, IParams, statType } from '@src/apis/index'
import * as echarts from 'echarts'
import Checks from '@src/components/Checks.vue'
const currentDate = ref(new Date())
const currentStat = ref({ prop: 'points', label: '得分', status: true })
const map = new Map()
map.set("points","pointsPg")
map.set("rebounds","rebsPg")
map.set("assists","assistsPg")
map.set("blocks","blocksPg")
map.set("steals","stealsPg")
map.set("fouls","foulsPg")
map.set("turnovers","turnoversPg")
map.set("mins","minsPg")
map.set("efficiency","efficiency")
map.set("tppct","tppct")
map.set("ftpct","ftpct")
const list = ref([
  { prop: 'points', label: '得分', status: false },
  { prop: 'rebounds', label: '篮板', status: false },
  { prop: 'assists', label: '助攻', status: false },
  { prop: 'blocks', label: '盖帽', status: false },
  { prop: 'steals', label: '抢断', status: false },
  { prop: 'fouls', label: '犯规', status: false },
  { prop: 'turnovers', label: '失误', status: false },
  { prop: 'mins', label: '时间', status: false },
  { prop: 'efficiency', label: '效率', status: false },
  { prop: 'tppct', label: '三分', status: false },
  { prop: 'ftpct', label: '罚球', status: false }
])

const handleChange = (e: any, prop: string) => {
  const val = list.value
  for (let i = 0; i < val.length; i++) {
    if (val[i].prop == prop) {
      val[i].status = !val[i].status
    } else if (val[i].status) {
      val[i].status = false
    }
  }
  list.value = val
  const stat = val.filter((item) => item.status)
  currentStat.value = stat[0]
  console.log('currentStat.value :>> ', currentStat.value);
  initEcharts({ statType: currentStat.value.prop?(currentStat.value.prop as any):0 })
}
async function initEcharts(params: IParams = { statType: 0 }) {
  const resp = await getAthleteData(params)
  let xData = []
  let yData = []
  type EChartsOption = echarts.EChartsOption
  const chartDom = document.getElementById('mountNode')!
  const myChart = echarts.init(chartDom)
  let option: EChartsOption
  if (resp && resp.payload) {
    const data: any[] = resp.payload.players || []
    for (let i = 0; i < data.length; i++) {
      xData.push(data[i].playerProfile.displayName)
      yData.push(data[i].statAverage[map.get(currentStat.value.prop)])
    }
    option = {
      xAxis: {
        type: 'category',
        data: xData
      },
      yAxis: {
        type: 'value'
      },
      tooltip:{
        show: true,
      },
      series: [
        {
          data: yData,
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    }
    option && myChart.setOption(option)
  }
}
onMounted(async () => {
  initEcharts()
})
</script>

<template>
  <div class="chart">
    <div style="display: flex; align-items: center">
      <Checks :list="list" :handleChange="handleChange" />
    </div>
    <div class="card">
      <div id="mountNode" style="width: 100%; height: 100%"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chart {
  padding: 20px;
  width: 100%;
  height: 80vh;
  box-sizing: border-box;
  .card {
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background: #f3f3f3;
    box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
    margin-top: 40px;
  }
}
</style>
