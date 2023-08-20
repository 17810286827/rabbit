import http from '@/utils/html'

export function submitOrderAPI(data) {
  return http({
    url: '/member/order',
    method: 'post',
    data
  })
}
