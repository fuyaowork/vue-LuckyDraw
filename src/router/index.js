import Vue from 'vue'
import Router from 'vue-router'
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/**
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               page name
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/

// 路由表
export const routerMap = [
    { path: '/', component: () => import('@/views/home/home'), meta: { title: 'home' }},
    { path: '/rank', component: () => import('@/views/rank/rank'), meta: { title: '排行榜' } },
    { path: '/raffle', component: () => import('@/views/raffle/raffle'), meta: { title: '抽奖' } },
    // {
    //     path: '/',
    //     component: Layout,
    //     redirect: 'home',
    //     children: [
    //         { path: 'home', component: () => import('@/views/home/home'), name: 'home', meta: { title: '商城名称' } },
    //     ]
    // },
]

export default new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: routerMap
})
