import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import loadDataV from './utils/loadDataV'
import * as echarts from 'echarts'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.config.globalProperties.$echarts = echarts;
app.use(ElementPlus)
loadDataV(app)
app.use(router).mount('#app')
