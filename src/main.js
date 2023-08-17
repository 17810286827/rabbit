import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { componentPlugin } from '@/components/index'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { useIntersectionObserver } from '@vueuse/core'

import App from './App.vue'
import router from './router'

import '@/styles/common.scss'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

app.mount('#app')
app.use(componentPlugin)

app.directive('img-lazy', {
  mounted(el, binding) {
    console.log(el, binding)
    useIntersectionObserver(el, ([{ isIntersecting }]) => {
      console.log(isIntersecting)
    })
  }
})
