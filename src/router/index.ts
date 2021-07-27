import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/*',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/views/index.vue'),
    alias: ['/homes', '/page'],
  },
  { path: '/user', component: () => import('@/views/user/user.vue') },
  {
    path: '*', 
    redirect: '/404',
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
