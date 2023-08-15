// 获取bannel组件
import { ref, onMounted } from 'vue'
import { getBannerAPI } from '@/apis/home.js'

export function useBannel() {
  const bannerList = ref([])
  const getBanner = async () => {
    const { result: data } = await getBannerAPI({
      distributionSite: '2',
    })
    bannerList.value = data
  }
  onMounted(() => {
    getBanner()
  })
  return { bannerList }
}
