import { createRouter, createWebHistory } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title: string,
    transition: string
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: (to, from, savePosition) => {
    console.log(savePosition)
    if (savePosition) {
      return savePosition
    } else {
      return {
        top: 500
      }
    }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/views/Login.vue'),
      meta: {
        title: '登陆页',
        transition: 'animate__fadeIn'
      }
    },
    {
      path: '/index',
      component: () => import('@/views/Index.vue'),
      meta: {
        title: '首页',
        transition: 'animate__bounceIn'
      }
    }
  ]
})

export default router
