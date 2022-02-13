<script setup lang="ts">
import { onMounted, ref, getCurrentInstance,watchEffect,watch, Ref} from 'vue'
import { getAthleteData } from '@src/apis/index'
import Card from '@src/components/Card.vue'
import * as echarts from 'echarts'
const currentDate = ref(new Date())
const status = ref(false)
watch(status,(newVal,oldVal)=>{
  console.log(newVal,oldVal)
})
const handleChange = (e:any,props:any)=>{
  // console.log(e.target.checked,props)
  status.value = e.target.checked
}
onMounted(async () => {
  const resp = await getAthleteData()
  console.log(resp, 'resp')
  type EChartsOption = echarts.EChartsOption

  var chartDom = document.getElementById('mountNode')!
  var myChart = echarts.init(chartDom)
  var option: EChartsOption
  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  }

  option && myChart.setOption(option)
})
</script>

<template>
  <div class="chart">
    <div style="display: flex;align-items: center;">
      <div class="toggle-border">
        <h3 class="label">得分</h3>
        <input id="score" type="checkbox" :checked="status" props="status"  @change="(e)=>{handleChange(e,status)}"/>
        <label for="score">
          <div class="handle"></div>
        </label>
      </div>
      <div class="toggle-border">
        <h3 class="label">篮板</h3>
        <input id="rebound" type="checkbox" />
        <label for="rebound">
          <div class="handle"></div>
        </label>
      </div>
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
  .toggle-border {
    border: 2px solid #f0ebeb;
    border-radius: 130px;
    /* margin-bottom: 45px; */
    padding: 2px 6px;
    background: linear-gradient(to bottom right, white, rgba(220, 220, 220, 0.5)), white;
    box-shadow: 0 0 0 2px #fbfbfb;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 0 10px;
    .label{
      padding-right: 30px;
    }
  }

  .toggle-border:last-child {
    margin-bottom: 0;
  }

  .toggle-border input[type='checkbox'] {
    display: none;
  }

  .toggle-border label {
    position: relative;
    display: inline-block;
    width: 65px;
    height: 20px;
    background: #d13613;
    border-radius: 80px;
    cursor: pointer;
    box-shadow: inset 0 0 16px rgba(0, 0, 0, 0.3);
    transition: background 0.5s;
  }

  .toggle-border input[type='checkbox']:checked + label {
    background: #13d162;
  }

  .handle {
    position: absolute;
    top: -8px;
    left: -10px;
    width: 35px;
    height: 35px;
    border: 1px solid #e5e5e5;
    background: repeating-radial-gradient(
        circle at 50% 50%,
        rgba(200, 200, 200, 0.2) 0%,
        rgba(200, 200, 200, 0.2) 2%,
        transparent 2%,
        transparent 3%,
        rgba(200, 200, 200, 0.2) 3%,
        transparent 3%
      ),
      conic-gradient(white 0%, silver 10%, white 35%, silver 45%, white 60%, silver 70%, white 80%, silver 95%, white 100%);
    border-radius: 50%;
    box-shadow: 3px 5px 10px 0 rgba(0, 0, 0, 0.4);
    transition: left 0.4s;
  }

  .toggle-border input[type='checkbox']:checked + label > .handle {
    left: calc(100% - 35px + 10px);
  }
}
</style>
