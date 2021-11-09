<template>
  <div>
    <!-- <Home :a="a" b="i am b" ref="child" />
    <br/>
    <Home1/>
    <br/>
    <Home2/>
    <br/>
    a*2:{{twiceA}} -->
    <Slot>
      12
    </Slot>
    <button @click="handleAdd">+ a </button>
  </div>
</template>

<script>
import { reactive, ref,toRefs, onMounted,watch,computed,provide, readonly} from 'vue'
import Home from "./views/Home.vue"
import Home1 from "./views/Home1.vue"
import Home2 from "./views/Home2.vue"
import Slot from "./views/Slot.vue"
export default {
  name: '',
  components:{
    Home,
    Home1,
    Home2,
    Slot
  },
  setup(props) {
    const a = ref(10)
    const child = ref(null)
    onMounted(() => {
      console.log(child.value)
      var childRef = child.value
      // childRef.handleConsole()
    })
    watch(a,(newVal,oldVal)=>{
    })
    provide("p1","p1")
    provide("p2","p2")
    provide("readonlyA",readonly(a))
    const handleAdd=()=>{
      a.value++
    }
    const twiceA = computed(()=>a.value*2)
    return {
      a,
      twiceA,
      handleAdd,
      child
    }
  },
}

</script>
<style scoped>
</style>