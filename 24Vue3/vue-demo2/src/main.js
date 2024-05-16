import {createApp} from 'vue'
import {createPinia} from "pinia";
import App from './App.vue'
import persist from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia.use(persist))

app.mount('#app')
