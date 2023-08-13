import http from '@/utils/html'

export function getCategoryAPI() {
  return http({
    url: '/home/category/head',
  })
}
