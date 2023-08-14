import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { useIntersectionObserver } from '@vueuse/core'

import App from './App.vue'
import router from './router'

import '@/styles/common.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

app.directive('img-lazy', {
  mounted(el, binding) {
    console.log(el, binding)
    useIntersectionObserver(el, ([{ isIntersecting }]) => {
      console.log(isIntersecting)
    })
  },
})
