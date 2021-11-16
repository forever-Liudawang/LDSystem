<script setup lang='ts'>
import { reactive, toRefs, ref, onMounted} from 'vue'
const domRef = ref(null)
onMounted(()=>{
    console.log(domRef.value)
})
</script>

<template>
  <div class="bscroll" ref={{domRef}}>
      <slot></slot>
  </div>
</template>

<style scoped>
</style>