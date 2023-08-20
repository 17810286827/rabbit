import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/index.vue'
import Category from '@/views/category/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import subCategory from '@/views/subCategory/index.vue'
import Detail from '@/views/detail/index.vue'
import CartList from '@/views/cartList/index.vue'
import CheckOut from '@/views/checkout/index.vue'
import Pay from '@/views/pay/index.vue'
import PayCallback from '@/views/pay/payCallback.vue'
import Member from '@/views/member/index.vue'
import MemberInfo from '@/views/member/memberInfo.vue'
import MemberOrder from '@/views/member/memberOrder.vue'

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
        },
        {
          path: 'cartlist',
          component: CartList
        },
        {
          path: 'checkout',
          component: CheckOut
        },
        {
          path: 'pay',
          component: Pay
        },
        {
          path: 'paycallback',
          component: PayCallback
        },
        {
          path: 'member',
          component: Member,
          children: [
            {
              path: 'order',
              component: MemberOrder
            },
            {
              path: '',
              component: MemberInfo
            }
          ]
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
