import { useLocalStorage } from '@vueuse/core';
import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'
import { getConfiguration } from '~/services/httpService'

export const useCoreStore = defineStore('core', () => {
  const isProd = ref(import.meta.env.PROD)
  const isDev = ref(import.meta.env.DEV)
  const appMode = ref(import.meta.env.MODE)
  const config = useLocalStorage('appConfig', ref({}))

  async function getAppConfig() {
    const { data } = await getConfiguration()
    config.value = data.value
  }

  return {
    isProd,
    isDev,
    appMode,
    config,
    getAppConfig
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCoreStore, import.meta.hot))
