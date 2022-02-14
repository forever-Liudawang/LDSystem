<script setup lang='ts'>
import { reactive, ref, onMounted,toRaw,defineProps} from 'vue'
import Check from "@src/components/Check.vue"
const {list,handleChange} = defineProps({
    list: {
        type: Array as ()=>Array<any>,
        required: true,
        default: ()=>[]
    },
    handleChange: {
        type: Function,
        required: true,
    }
})
</script>

<template>
  <div style="display:flex;">
      <Check v-for="item in list" 
      :key="item.prop" 
      :label="item.label" 
      :prop="item.prop" 
      :status="item.status" 
      :handleChange="handleChange"/>
  </div>
</template>

<style scoped>
</style>