import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import "lib-flexible"
const app = createApp(App)
app.use(router)
app.mount('#app')

//const win:any = window
// if (process.env.NODE_ENV === 'development') {
//     if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in win) {
//         win.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
//     }
// }