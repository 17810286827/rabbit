import http from '@/utils/html'

export function getBannerAPI() {
  return http({
    url: '/home/banner',
  })
}
