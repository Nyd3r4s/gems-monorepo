import './style.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { createClient } from 'arcpay-sdk'
import { useDark } from '@vueuse/core'

createClient('algo:testnet', {
  apiKey: 'f2844771-55de-4b9d-9b6e-d957620c474e', // API key can be obtained from the arcpay dashboard
  darkMode: useDark(),
})

const app = createApp(App)

app.use(router)

app.mount('#app')
