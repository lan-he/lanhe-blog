import Vue from 'vue'
import Router from 'vue-router'
// import userRoutes from './home'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/page/index')
    },
    // ...userRoutes,
    { path: '*', redirect: '/home' }
  ]
})
