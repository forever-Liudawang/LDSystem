<script setup lang="ts">
import { onMounted, ref, getCurrentInstance } from 'vue'
import { getRecommendArticle,test} from '@src/apis/index'
const G2 = getCurrentInstance()?.appContext.config.globalProperties.$G2
const currentDate = ref(new Date())

onMounted(async () => {
const resp = await test()
console.log(resp,'resp')
})
</script>

<template>
  <div>
    <!-- <el-row>
      <el-col v-for="(o, index) in 2" :key="o" :span="8" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }" shadow="always">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image w-full" />
          <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom">
              <el-button type="text" class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row> -->
  </div>
</template>

<style lang="scss" scoped></style>
