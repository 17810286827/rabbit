import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCartStore = defineStore(
  'cart',
  () => {
    const cartList = ref([])
    const addCart = (goods) => {
      console.log('添加', goods)
      const item = cartList.value.find((item) => item.skuId === goods.skuId)
      if (item) {
        item.count++
      } else {
        cartList.value.push(goods)
      }
    }

    // 删除功能
    const delCart = (skuId) => {
      const index = cartList.value.findIndex((item) => item.skuId === skuId)
      cartList.value.splice(index, 1)
    }

    // 计算件数和总价
    const allAmount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))

    return { cartList, addCart, delCart, allAmount, allPrice }
  },
  { persist: true }
)
