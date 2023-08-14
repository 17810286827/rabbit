import http from '@/utils/html'

export function getTopCategoryAPI(id) {
  return http({
    url: '/category',
    params: {
      id,
    },
  })
}
