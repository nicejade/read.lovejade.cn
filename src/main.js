import { createApp } from 'vue'
import App from './App.vue'
import { Toast, Icon, Dialog, Popup, OverLay, FixedNav, Drag } from "@nutui/nutui"
import "@nutui/nutui/dist/packages/toast/index.scss"
import "@nutui/nutui/dist/packages/dialog/index.scss"
import "@nutui/nutui/dist/packages/drag/index.scss"
import "@nutui/nutui/dist/packages/button/index.scss"
import "@nutui/nutui/dist/packages/fixednav/index.scss"
import "@nutui/nutui/dist/packages/overLay/index.scss"
import "@nutui/nutui/dist/packages/popup/index.scss"

import './assets/styles/index.css'
import './assets/styles/gradients.scss'
import router from './router'
import * as Sentry from "@sentry/vue"
import { Integrations } from "@sentry/tracing"

const app = createApp(App)
app.config.globalProperties.$reortGaEvent = (action, category, label) => {
	const gtag = window.gtag || (() => {})
	gtag('event', action, {
		event_category: category,
		event_label: label || action,
	})
}

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

router.beforeEach((to, from, next) => {
  const description = window.$currentSentenceStr
  if (description) {
    const descNode = document.querySelector('meta[name="description"]')
    descNode.setAttribute('content', description);

    const tDescNode = document.querySelector('meta[name="twitter:description"]')
    tDescNode.setAttribute('content', description);
  }
  next()
})

app.use(router)
app.use(Drag)
app.use(Dialog)
app.use(FixedNav)
app.use(Icon)
app.use(OverLay)
app.use(Popup)
app.use(Toast)

app.mount('#app')
