import { http } from '@/utils/html.js'

const getapi = () => {
  return http({
    url: 'home/category/head',
  })
}

export { getapi }
