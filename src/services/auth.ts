import { useLocalStorage } from '@vueuse/core'

const apiKey = import.meta.env.VITE_APP_API_KEY
const key = useLocalStorage('token', apiKey)
export const auth = {
  getHeaders(setToken?: string) {
    const token = setToken || key.value
    // const { settings = {} } = store.getters["getUserActiveAccount"];
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json;charset=utf-8'
      // 'Access-Control-Allow-Origin': '*'
      // "Accept-Language": settings.language_preference || 'en',
    }
  },
}
