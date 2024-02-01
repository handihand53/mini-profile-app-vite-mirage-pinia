import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { mockServer } from './api-mock'
import router from './router'
import { createPinia } from 'pinia'

// create mock only if on development state
if (process.env.NODE_ENV === 'development') {
  mockServer()
}

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app')
