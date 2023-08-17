import { defineStore } from 'pinia'
import { ref } from 'vue'
import { LoginAPI } from '@/apis/user.js'

export const useUserStore = defineStore(
  'userStore',
  () => {
    const userInfo = ref({})
    // 获取用户信息
    const getUserInfo = async ({ account, password }) => {
      const res = await LoginAPI({ account, password })
      userInfo.value = res.result
    }

    // 清除用户信息
    const clearUserInfo = () => {
      userInfo.value = {}
    }

    return { userInfo, getUserInfo, clearUserInfo }
  },
  {
    persist: true
  }
)
