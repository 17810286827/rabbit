import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { addGoodsToCartAPI, getCartListAPI, delCartListAPI } from '@/apis/cartList.js'

export const useCartStore = defineStore(
  'cart',
  () => {
    const userStore = useUserStore()
    const cartList = ref([])

    // 更新购物车列表
    const updataCart = async () => {
      const res = await getCartListAPI()
      cartList.value = res.result
    }
    // 添加到购物车
    const addCart = async (goods) => {
      const { skuId, count } = goods
      const isToken = computed(() => userStore.userInfo.token)

      console.log(goods)

      if (isToken.value) {
        // 用户已登录
        await addGoodsToCartAPI({ skuId, count })
        updataCart()
      } else {
        // 用户未登录
        // 寻找待添加商品购物车内是否存在
        const item = cartList.value.find((item) => item.skuId === goods.skuId)
        if (item) {
          item.count++
        } else {
          cartList.value.push(goods)
        }
      }
    }

    // 删除功能
    const delCart = async (skuId) => {
      const isToken = computed(() => userStore.userInfo.token)
      if (isToken.value) {
        await delCartListAPI([skuId])
        updataCart()
      } else {
        const index = cartList.value.findIndex((item) => item.skuId === skuId)
        cartList.value.splice(index, 1)
      }
    }

    // 清除购物车
    const clearCart = () => {
      cartList.value = []
    }

    // 计算件数和总价
    const allAmount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))

    // 单选框
    const singchecked = (skuId, selected) => {
      const item = cartList.value.find((item) => item.skuId === skuId)
      item.select = selected
    }

    const isAll = computed(() => cartList.value.every((item) => item.select))

    const allCheck = (selected) => cartList.value.forEach((item) => (item.select = selected))

    // 已选商品和总价
    const allCount = computed(() =>
      cartList.value.filter((item) => item.select).reduce((a, c) => a + c.count, 0)
    )
    const allSelectPrice = computed(() =>
      cartList.value.filter((item) => item.select).reduce((a, c) => a + c.count * c.price, 0)
    )

    return {
      cartList,
      allAmount,
      allPrice,
      isAll,
      allCount,
      allSelectPrice,
      updataCart,
      clearCart,
      addCart,
      delCart,
      singchecked,
      allCheck
    }
  },
  { persist: true }
)
