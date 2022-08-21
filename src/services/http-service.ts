import { useAdvancedFetch } from './instance'
// import { useAxios } from '@vueuse/integrations'
import { i18nConfig } from '~/modules/i18n'
import type { MovieSearchType } from '~/types/movies'
//

const { locale } = i18nConfig.global

export async function searchMovies(search = '', type: MovieSearchType, query: Record<any, any> = {}) {
  const params = new URLSearchParams({
    query: encodeURIComponent(search),
    language: locale.value,
    ...query

  }).toString()
  return useAdvancedFetch(`/search/${type}?${params}`, { method: 'get' })
}
