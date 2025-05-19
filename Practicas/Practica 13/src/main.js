import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

const app = createApp(App)
app.use(createPinia()) // Habilitar Pinia
app.use(router)        // Habilitar Vue Router
app.mount('#app')
