import {createWebHashHistory,RouteRecordRaw,createRouter} from "vue-router"

const routes:RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component:():Promise<typeof import("*.vue")> => import('@src/views/Home.vue'),
        meta: {
            keepAlive: false //设置页面是否需要使用缓存
        },
        // component: ()=>import("../components/HelloWorld.vue")
    },
    {
        path: "/chart",
        name: "chart",
        component: ():Promise<typeof import("*.vue")> => import('@src/views/Chart.vue'),
        meta: {
            keepAlive: false //设置页面是否需要使用缓存
        },
    }
]
const history = createWebHashHistory()
const router = createRouter({
    history,
    scrollBehavior:()=>({top:0}),
    routes 
})
export default router