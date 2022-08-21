import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

export const appStore = defineStore('app', () => {

  const isProd = ref(import.meta.env.PROD)
  const isDev = ref(import.meta.env.DEV)
  const appMode = ref(import.meta.env.MODE)

  return {
    isProd,
    isDev,
    appMode
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(appStore, import.meta.hot))
