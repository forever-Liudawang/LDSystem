<script setup lang="ts">
import { reactive, ref, onMounted, toRaw, getCurrentInstance } from "vue";
import { test } from "@apis/apis"
const ctx = getCurrentInstance();
const echarts: any = ctx?.appContext.config.globalProperties.$echarts;
// eslint-disable-next-line no-undef
type EChartsOption = echarts.EChartsOption;
console.log(test,'test====>>>>')
//const res = await test()
onMounted(() => {
  const chartDom = document.getElementById("chart");
  const myChart = echarts.init(chartDom);
  const option:EChartsOption = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
  };
  option && myChart.setOption(option);
});
</script>

<template>
  <div style="height: 200px; width: 400px">
    <dv-border-box-8>
      <div ref="chartDom" id="chart" style="width:100%;height:100%"></div>
    </dv-border-box-8>
  </div>
</template>

<style scoped></style>
