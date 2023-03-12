import { createApp } from 'vue'
import './style.css'
import router from './router/router.js'
import { createPinia } from 'pinia'
import { createHead } from "@vueuse/head"
import App from './App.vue'

const pinia = createPinia()
const head = createHead()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(head)

app.mount('#app')
