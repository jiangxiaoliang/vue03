import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/user',
    component: () => import('../components/footer.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('../components/login.vue')
      },
      {
        path: 'reg/:id',
        name: 'reg',
        component: () => import('../components/reg.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router