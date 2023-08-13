import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/index.vue'
import category from '@/views/category/index.vue'
import Layout from '@/views/Layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/category',
      component: category,
    },
    {
      path: '/category',
      component: category,
    },
  ],
})

export default router
