<template>
    <h1>Home</h1>
  <h4>a:{{a}}</h4>
  <h4>b:{{b}}</h4>
  <h4>p1:{{p1}}</h4>
  ---------------------------------------------------
</template>

<script>
import { reactive, toRefs, onMounted, h,onActivated,inject} from 'vue'
export default {
  name: '',
  props:{
      a:Number,
      b:String
  },
  setup({a,b},{expose,emit,slots,attrs}) {
    // const {a} = toRefs(props)
    console.log(`a`, a)
    const data = reactive({})
    const p1 = inject("p1")
    onMounted(() => {
        console.log(p1)
    })
    onActivated(()=>{
        console.log("onActived")
    })
    const handleConsole = ()=>{
        console.log("child function")
    }
    expose({
        handleConsole
    })
    return {
        p1
    }
  },
}

</script>
<style scoped>
</style>