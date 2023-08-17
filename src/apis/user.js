import http from '@/utils/html'

export function LoginAPI({ account, password }) {
  return http({
    url: '/login',
    method: 'post',
    data: {
      account,
      password
    }
  })
}
