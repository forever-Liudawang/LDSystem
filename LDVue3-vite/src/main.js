import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App)
// app.config.optionMergeStrategies.custom = (toval,fromVal)=>{
    
// }
//每个组件都会运行

// app.mixin({
//     created(){
//         console.log(`global mixin`, this.$options)
//     }
// })
app.mount('#app')
