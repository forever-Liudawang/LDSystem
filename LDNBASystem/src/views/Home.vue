<script setup lang="ts">
import { onMounted, ref, getCurrentInstance } from 'vue'
import { getRecommendArticle,test} from '@src/apis/index'
const G2 = getCurrentInstance()?.appContext.config.globalProperties.$G2
const currentDate = ref(new Date())
const resp = await test()
console.log(resp,'resp')
onMounted(() => {
//   const data = [
//     { genre: 'Sports', sold: 275 },
//     { genre: 'Strategy', sold: 115 },
//     { genre: 'Action', sold: 120 },
//     { genre: 'Shooter', sold: 350 },
//     { genre: 'Other', sold: 150 }
//   ] // G2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
//   // Step 1: 创建 Chart 对象
//   const chart = new G2.Chart({
//     container: 'c1', // 指定图表容器 ID
//     width: 600, // 指定图表宽度
//     height: 300 // 指定图表高度
//   })
//   console.log(chart, 'chart')
//   // Step 2: 载入数据源
//   chart.source(data)
//   // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
//   chart.interval().position('genre*sold').color('genre')
//   // Step 4: 渲染图表
//   chart.render()
})
</script>

<template>
  <!-- <div id="c1" :style="{ boxShadow: `var(--el-box-shadow-light)` }"></div> -->
  <div>
    <el-row>
      <el-col v-for="(o, index) in 2" :key="o" :span="8" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }" shadow="always">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image w-full" />
          <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped></style>
