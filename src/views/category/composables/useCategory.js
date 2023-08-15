// 获取分类
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { getTopCategoryAPI } from '@/apis/category.js'

export function useCategory() {
  const route = useRoute()
  const topCategory = ref({})
  const getTopCategory = async (id = route.params.id) => {
    const res = await getTopCategoryAPI(id)
    topCategory.value = res.result
  }

  onMounted(() => {
    getTopCategory()
  })

  onBeforeRouteUpdate((to) => {
    getTopCategory(to.params.id)
  })

  return { topCategory }
}
