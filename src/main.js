import { createApp } from 'vue'
import App from './App.vue'
import { Toast, Icon, Dialog, Popup, OverLay } from "@nutui/nutui"
import "@nutui/nutui/dist/packages/toast/index.scss"
import "@nutui/nutui/dist/packages/dialog/index.scss"
import "@nutui/nutui/dist/packages/button/index.scss"
import "@nutui/nutui/dist/packages/overLay/index.scss"
import "@nutui/nutui/dist/packages/popup/index.scss"
import './assets/styles/index.css'
import './assets/styles/gradients.scss'
import router from './router'
import * as Sentry from "@sentry/vue"
import { Integrations } from "@sentry/tracing"

const app = createApp(App)

Sentry.init({
  app,
  dsn: "https://29bb4d9d5eda491386bfff5378d08ac6@o107732.ingest.sentry.io/6109458",
  integrations: [
    new Integrations.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ["localhost", "read.lovejade.cn", /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

app.config.errorHandler = (err, vm, info) => {
  Sentry.captureException(err)
}

app.use(router)
app.use(Dialog)
app.use(Icon)
app.use(OverLay)
app.use(Popup)
app.use(Toast)
app.mount('#app')
