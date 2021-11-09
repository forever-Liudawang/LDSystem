<template>
  <div>
    <h1>Home1</h1>
    <h4>p1:{{p1}}</h4>
    <h4>readonlyA:{{readonlyA}}</h4>
    <button @click="changeA">change a</button>
  </div>
  -------------------------------------------------
</template>

<script>
import { reactive, toRefs, onMounted,inject} from 'vue'
export default {
  name: '',
  setup() {
    const data = reactive({})
    const p1 = inject("p1")
    const readonlyA = inject("readonlyA")
    onMounted(() => {
      console.log(`p1`, p1)
    })
    const changeA = ()=>{
      readonlyA.value ++
    }
    return {
      p1,
      readonlyA,
      changeA
    }
  },
}

</script>
<style scoped>
</style>