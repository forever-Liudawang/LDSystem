<script setup lang="ts">
import { onMounted, ref, useAttrs } from 'vue'

// defineProps<{ msg: string,parentFunc:Function}>()
const {msg,parentFunc} = defineProps({
  msg: String,
  parentFunc: {
    type: Function,
    required: true
  }
})
onMounted(()=>{
  console.log(msg)
  parentFunc()
})
const count = ref(0)
const add = ()=>{
  count.value++
}
</script>

<template>
  {{msg}}
  <button @click="add">{{count}}</button>
</template>

<style scoped>

</style>