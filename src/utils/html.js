import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/userStore.js'
import router from '@/router'

// 创建axios实例
const http = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// axios请求拦截器
http.interceptors.request.use(
  (config) => {
    const useUserInfo = useUserStore()
    const token = useUserInfo.userInfo.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (e) => Promise.reject(e)
)

// axios响应式拦截器
http.interceptors.response.use(
  (res) => res.data,
  (e) => {
    const useUserInfo = useUserStore()
    ElMessage({
      type: 'warning',
      message: e.response.data.message
    })
    if (e.response.status === 401) {
      useUserInfo.clearUserInfo()
      router.replace('/login')
    }
    return Promise.reject(e)
  }
)

export default http
