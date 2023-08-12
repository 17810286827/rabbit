import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/styles/elemeny/index.scss'

import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'

import { getapi } from '@/apis/APItset'
getapi().then((res) => {
  console.log(res)
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
