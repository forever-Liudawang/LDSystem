<template>
  <Home :a="a"/>
  <button @click="handleAdd">+ a </button>
</template>

<script>
import { reactive, ref,toRef, onMounted,watch} from 'vue'
import Home from "./views/Home.vue"
export default {
  name: '',
  components:{
    Home
  },
  setup(props) {
    const a = ref(10)
    onMounted(() => {
    })
    watch(a,(newVal,oldVal)=>{
      console.log(`newVal`, newVal,oldVal)
    })
    const handleAdd=()=>{
      console.log(`this`, this)
    }
    return {
      a,
      handleAdd
    }
  },
  methods:{
    handleAdd(){
      console.log(`this`, this)
    }
  }
}

</script>
<style scoped>
</style>