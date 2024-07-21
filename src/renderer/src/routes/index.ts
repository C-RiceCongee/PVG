import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/projectManager'
  },
  {
    path: '/projectManager',
    component: () => import('@renderer/app/ProjectManager/index.vue')
  },
  {
    path: '/projectEditor/:id',
    component: () => import('@renderer/app/ProjectEditor/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
