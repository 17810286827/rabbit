import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { componentPlugin } from '@/components/index'

import { useIntersectionObserver } from '@vueuse/core'

import App from './App.vue'
import router from './router'

import '@/styles/common.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
app.use(componentPlugin)

app.directive('img-lazy', {
  mounted(el, binding) {
    console.log(el, binding)
    useIntersectionObserver(el, ([{ isIntersecting }]) => {
      console.log(isIntersecting)
    })
  },
})
