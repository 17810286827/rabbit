import http from '@/utils/html'

export function submitOrderAPI(data) {
  return http({
    url: '/member/order',
    method: 'post',
    data
  })
}

export function getOrderAPI(id) {
  return http({
    url: `/member/order/${id}`
  })
}
