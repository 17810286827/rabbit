import http from '@/utils/html'

export function getAdressAPI() {
  return http({
    url: '/member/order/pre'
  })
}
