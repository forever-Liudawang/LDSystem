import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    // redirect: '/dashboard',
    meta: { title: '系统管理', icon: 'dashboard' },
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '系统管理', icon: 'dashboard' }
    },
    {
      path: 'sysSetting',
      name: 'sysSetting',
      component: () => import('@/views/articleTag/index'),
      meta: { title: '文章标签', icon: 'dashboard' }
    }
    ]
  },
  {
    path: '/articleC',
    component: Layout,
    redirect: '/createArticle',
    children: [{
      path: 'createArticle',
      name: 'createArticle',
      component: () => import('@/views/createArticle/index'),
      meta: { title: '创建文章', icon: 'createArticle' }
    }]
  },
  {
    path: '/articleL',
    component: Layout,
    redirect: '/articleList',
    children: [{
      path: 'articleList',
      name: 'articleList',
      component: () => import('@/views/articleList/index'),
      meta: { title: '文章列表', icon: 'articleList' }
    },
    {
      path: 'articleDetail/:id',
      name: 'articleDetail',
      component: () => import('@/views/articleDetail/index'),
      meta: { title: '文章列表-文章详情', icon: 'articleDetail', activeMenu: '/articleL/articleList' },
      hidden: true
    }]
  },
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'http://110.42.186.20/app#/app',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
