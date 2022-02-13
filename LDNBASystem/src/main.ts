import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import "lib-flexible"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./reset.css"
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')