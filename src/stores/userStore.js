import { defineStore } from 'pinia'
import { ref } from 'vue'
import { LoginAPI } from '@/apis/user.js'
import { useCartStore } from '@/stores/useCart'
import { mergeCartListAPI } from '@/apis/cartList'

export const useUserStore = defineStore(
  'userStore',
  () => {
    const userInfo = ref({})
    // 获取用户信息
    const getUserInfo = async ({ account, password }) => {
      const cartStore = useCartStore()
      const res = await LoginAPI({ account, password })
      userInfo.value = res.result

      await mergeCartListAPI(
        cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.select,
            count: item.count
          }
        })
      )
    }

    // 清除用户信息
    const clearUserInfo = () => {
      const cartStore = useCartStore()
      userInfo.value = {}
      cartStore.clearCart()
    }

    return { userInfo, getUserInfo, clearUserInfo }
  },
  {
    persist: true
  }
)
