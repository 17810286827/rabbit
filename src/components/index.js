import XtxSku from './XtxSku/index.vue'
import goodsImg from './goodsImg.vue'

export const componentPlugin = {
  install(app) {
    app.component('XtxSku', XtxSku)
    app.component('goodsImg', goodsImg)
  },
}
