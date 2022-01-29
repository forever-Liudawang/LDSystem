import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import "lib-flexible"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as G2 from "@antv/g2"
//全局样式变量在vite配置文件中配置后无需在此处再加载
// import "./global.scss"
const app = createApp(App)
//文章内图片预览
// app.directive('click', function (el) {
//     const imgs = el.querySelectorAll('img');
//     imgs.forEach((img: HTMLImageElement) => {
//         img.addEventListener("click",()=>{
//             const imgSrc = img.getAttribute("src") || "";
//             ImagePreview([imgSrc])
//         })
//     })
// })
app.config.globalProperties.$G2 = G2
app.use(router)
app.use(ElementPlus)
app.mount('#app')