import { createApp } from 'vue'
import App from './App.vue'
import { Toast, Icon, Dialog, Popup, OverLay } from "@nutui/nutui"
import "@nutui/nutui/dist/packages/toast/index.scss"
import "@nutui/nutui/dist/packages/dialog/index.scss"
import "@nutui/nutui/dist/packages/button/index.scss"
import "@nutui/nutui/dist/packages/overLay/index.scss"
import "@nutui/nutui/dist/packages/popup/index.scss"
import './assets/styles/index.css'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(Dialog)
app.use(Icon)
app.use(OverLay)
app.use(Popup)
app.use(Toast)
app.mount('#app')
