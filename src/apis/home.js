import http from '@/utils/html'

export function getBannerAPI() {
  return http({
    url: '/home/banner',
  })
}

export function getNewAPI() {
  return http({
    url: '/home/new',
  })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return http({
    url: '/home/goods',
  })
}
