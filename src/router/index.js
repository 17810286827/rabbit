import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/index.vue'
import Category from '@/views/category/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import subCategory from '@/views/subCategory/index.vue'
import Detail from '@/views/detail/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'category/:id',
          component: Category
        },
        {
          path: 'category/sub/:id',
          component: subCategory
        },
        {
          path: 'detail/:id',
          component: Detail
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
