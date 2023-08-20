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

export const getLikeListAPI = ({ limit = 4 }) => {
  return http({
    url: '/goods/relevant',
    params: {
      limit
    }
  })
}
