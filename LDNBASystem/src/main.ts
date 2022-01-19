import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import loadDataV from './utils/loadDataV'
const app = createApp(App)
loadDataV(app)
app.use(router).mount('#app')
