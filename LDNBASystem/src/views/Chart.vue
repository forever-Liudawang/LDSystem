<script setup lang="ts">
import { onMounted, ref, getCurrentInstance, watchEffect, watch, Ref } from 'vue'
import { getAthleteData, IParams, statType } from '@src/apis/index'
import * as echarts from 'echarts'
import Checks from '@src/components/Checks.vue'
const currentDate = ref(new Date())
const currentStat = ref<any>({ prop: 'points', label: '得分', status: true })
const map = new Map()
map.set('points', 'pointsPg')
map.set('rebounds', 'rebsPg')
map.set('assists', 'assistsPg')
map.set('blocks', 'blocksPg')
map.set('steals', 'stealsPg')
map.set('fouls', 'foulsPg')
map.set('turnovers', 'turnoversPg')
map.set('mins', 'minsPg')
map.set('efficiency', 'efficiency')
map.set('tppct', 'tppct')
map.set('ftpct', 'ftpct')
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
  initEcharts({ statType: currentStat.value ? (currentStat.value.prop as any) : 0 })
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
      yData.push(
        {
        value:data[i].statAverage[map.get(currentStat.value ? currentStat.value.prop : 'points')],
        data:data[i],
        label:{
          formatter: [
              '{a|}',
          ].join('\n'),
          rich:{
            a:{
              backgroundColor: {
                image: `https://res.nba.cn/media/img/players/head/260x190/${data[i].playerProfile.playerId}.png`
            },
            height: 36
            }
          }
        }})
    }
    option = {
      xAxis: {
        type: 'category',
        data: xData,
        name:"姓名"
      },
      yAxis: {
        type: 'value',
        name: currentStat.value?currentStat.value.label:"" ,
      },
      tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      series: [
        {
          data: yData,
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          },
          barCategoryGap:'50%',
          itemStyle: {
            borderRadius: 4
          },
          label: {
            show: true, // 开启显示
            rotate: 0, // 旋转70度
            position: 'top', // 在上方显示
            distance: 25, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。
            verticalAlign: 'middle',
          }
        }
      ]
    }
    option && myChart.setOption(option)
  }
  myChart.on('click',params=>{
    console.log('params', params)
  })
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
      <div id="mountNode" style="height: 100%; width: 100%"></div>
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
