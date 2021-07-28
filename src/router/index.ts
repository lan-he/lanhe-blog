import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/index.vue'),
    alias: ['/homes', '/page']
  },
  { path: '/user', component: () => import('@/views/user/user.vue') },
  { path: '/404', component: () => import('@/views/currency/404-sky.vue') },
  { path: '/4041', component: () => import('@/views/currency/404-snow.vue') },
  { path: '/4042', component: () => import('@/views/currency/riluo.vue') },
  // { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/currency/404-sky.vue') },
  { path: '/:pathMatch(.*)*', name: 'NotFound', redirect: '/404' }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
