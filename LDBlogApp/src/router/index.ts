import {createWebHashHistory,RouteRecordRaw,createRouter} from "vue-router"

const routes:RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component:():Promise<typeof import("*.vue")> => import('@src/views/Home.vue'),
        meta: {
            keepAlive: true //设置页面是否需要使用缓存
        },
        // component: ()=>import("../components/HelloWorld.vue")
    },
    {
        path:"/articleDetail/:cateId/:articleId",
        name:"ArticleDetail",
        meta: {
            keepAlive: false //设置页面是否需要使用缓存
        },
        component: ()=>import("@src/views/ArticleDetail.vue")
    },
    {
        path:"/articleCate/:cateId",
        name:"ArticleCate",
        meta: {
            keepAlive: true //设置页面是否需要使用缓存
        },
        component: ()=>import("@src/views/ArticleCate.vue")
    },
    {
        path:"/feedback/:cateId",
        name:"FeedBack",
        meta: {
            keepAlive: true //设置页面是否需要使用缓存
        },
        component: ()=>import("@src/views/FeedBack.vue")
    },
    {
        path:"/searchPage",
        name:"SearchPage",
        meta: {
            keepAlive: false //设置页面是否需要使用缓存
        },
        component: ()=>import("@src/views/SearchPage.vue")
    }
]
const history = createWebHashHistory()
const router = createRouter({
    history,
    scrollBehavior:()=>({top:0}),
    routes 
})
export default router