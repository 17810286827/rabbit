import http from '@/utils/html'

export function addGoodsToCartAPI({ skuId, count }) {
  return http({
    url: '/member/cart',
    method: 'post',
    data: {
      skuId,
      count
    }
  })
}

export function getCartListAPI() {
  return http({
    url: '/member/cart'
  })
}

/**
 * 删除接口
 * @param {要删除的skuid} ids
 * @returns
 */
export function delCartListAPI(ids) {
  return http({
    url: '/member/cart',
    method: 'delete',
    data: {
      ids
    }
  })
}

/**
 *合并购物车
 * @param {skuId,selected,count} data
 * @returns
 */
export function mergeCartListAPI(data) {
  return http({
    url: '/member/cart/merge',
    method: 'post',
    data
  })
}
