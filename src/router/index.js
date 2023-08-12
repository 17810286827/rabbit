import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/index.vue'
import category from '@/views/category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/',
      component: category,
    },
  ],
})

export default router
