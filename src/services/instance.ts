import axios from 'axios'
import { createFetch } from '@vueuse/core'

import { auth } from '~/services/auth'

const baseUrl = import.meta.env.VITE_APP_API_URL

export const useAdvancedFetch = createFetch({
  baseUrl,
  options: {
    async beforeFetch({ options }) {
      options.headers = auth.getHeaders()
      return { options }
    }
  }
})

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: auth.getHeaders()
})
