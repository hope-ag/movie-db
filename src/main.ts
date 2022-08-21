import { createApp } from 'vue'
import { pinia } from './modules/pinia'
import { i18nConfig } from './modules/i18n'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import '~/styles/main.scss'
// import "~/styles/element/index.scss";
import 'uno.css'

import 'element-plus/theme-chalk/src/message.scss'
import 'element-plus/theme-chalk/src/notification.scss'

import { router } from './router'

const app = createApp(App)
app.use(i18nConfig)
app.use(pinia)
app.use(router)

app.mount('#app')
