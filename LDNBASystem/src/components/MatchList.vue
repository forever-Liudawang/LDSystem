<script setup lang="ts">
import { reactive, ref, toRefs, defineProps} from 'vue'
type IMatch = {
  data: Array<any>,
  time: string
}
const {matchList} = defineProps({
  matchList:{
    type:  Array as () => Array<IMatch>,
    required: true,
    default: ()=>[]
  }
})

</script>

<template>
  <div>
    <div class="matchBox" v-for="item in matchList">
      <el-tag type="success">{{item.time}}</el-tag>
      <el-table :data="item.data" border style="width: 100%" size="mini">
        <el-table-column label="时间" prop="date" width="50"/>
        <el-table-column label="球队" prop="team"/>
        <el-table-column label="比分" prop="score" width="70"/>
        <el-table-column label="球馆" prop="address" />
        <el-table-column label="链接" prop="link">
          <template #default="scope">
            <span v-for="link in scope.row.link">
              <el-icon :size="20">
                <edit />
              </el-icon>
              <a :href="link.value" target="_blank">
                <p>{{link.displayText}}</p>
              </a>
            </span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.matchBox {
  width: 100%;
  margin-bottom: 8px;
}
</style>
