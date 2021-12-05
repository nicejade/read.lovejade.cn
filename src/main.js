import { createApp } from 'vue'
import App from './App.vue'
import { Toast, Icon } from "@nutui/nutui"
import "@nutui/nutui/dist/packages/toast/index.scss"
import './assets/styles/index.css'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(Toast)
app.use(Icon)
app.mount('#app')
