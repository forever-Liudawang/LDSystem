import {createWebHashHistory,RouteRecordRaw,createRouter} from "vue-router"

const routes:RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component:():Promise<typeof import("*.vue")> => import('@src/views/Home.vue')
        // component: ()=>import("../components/HelloWorld.vue")
    },
    {
        path:"/articleDetail",
        name:"ArticleDetail",
        component: ()=>import("@src/views/ArticleDetail.vue")
    },
    {
        path:"/articleCate/:cateId",
        name:"ArticleCate",
        component: ()=>import("@src/views/ArticleCate.vue")
    }
]
const history = createWebHashHistory()
const router = createRouter({
    history,
    scrollBehavior:()=>({top:0}),
    routes 
})
export default router