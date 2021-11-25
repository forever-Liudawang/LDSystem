import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import "lib-flexible"
import 'highlight.js/styles/monokai-sublime.css'
import hljs from 'highlight.js'
//全局样式变量在vite配置文件中配置后无需在此处再加载
// import "./global.scss"
import 'vant/lib/index.css';
import useVant from "./utils/vant"

const app = createApp(App)
//自定义一个代码高亮指令
app.directive('highlight', function (el) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block: any) => {
        hljs.highlightBlock(block)
    })
})
app.use(router)
useVant(app)
app.mount('#app')