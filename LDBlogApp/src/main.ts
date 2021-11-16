import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import "lib-flexible"

//全局变量在vite配置文件中配置后无需在此处再加载
// import "./global.scss"
import 'vant/lib/index.css';
import useVant from "./utils/vant"
const app = createApp(App)
app.use(router)
useVant(app)
app.mount('#app')