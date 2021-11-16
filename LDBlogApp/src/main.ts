import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import "lib-flexible"
import 'vant/lib/index.css';
import useVant from "./utils/vant"
const app = createApp(App)
app.use(router)
useVant(app)
app.mount('#app')