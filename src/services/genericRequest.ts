import { useAxios } from '@vueuse/integrations/useAxios'
import { axiosInstance } from './instance';
import { i18nConfig } from '~/modules/i18n';
const { locale } = i18nConfig.global;

const sessionId = ''

export async function genericGetRequest(
  path: string,
  query: Record<any, any> = {},
  withAuth = false
) {
  const newQuery: any = { ...query, language: locale.value };
  if (withAuth)
    newQuery.session_id = sessionId;
  return useAxios(path, { params: newQuery }, axiosInstance)
}

export async function genericPostRequest(
  path: string,
  query: Record<any, any> = {},
  body: Record<any, any> = {},
  withAuth = false
) {
  const newQuery: any = { ...query, language: locale.value };
  if (withAuth)
    newQuery.session_id = sessionId;
  return useAxios(
    path,
    { params: newQuery, method: 'POST', data: body },
    axiosInstance
  )
}

export async function genericDeleteRequest(
  path: string,
  query: Record<any, any> = {},
  withAuth = false
) {
  const newQuery: any = { ...query, language: locale.value };
  if (withAuth)
    newQuery.session_id = sessionId;
  return useAxios(
    path,
    { method: 'DELETE' },
    axiosInstance
  )
}

export async function genericPutRequest(
  path: string,
  query: Record<any, any> = {},
  body: Record<any, any> = {},
  withAuth = false
) {
  const newQuery: any = { ...query, language: locale.value };
  if (withAuth)
    newQuery.session_id = sessionId;
  return useAxios(
    path,
    { params: newQuery, method: 'PUT', data: body },
    axiosInstance
  )
}

export async function genericPatchRequest(
  path: string,
  query: Record<any, any> = {},
  body: Record<any, any> = {},
  withAuth = false
) {
  const newQuery: any = { ...query, language: locale.value };
  if (withAuth)
    newQuery.session_id = sessionId;
  return useAxios(
    path,
    { params: newQuery, method: 'PATCH', data: body },
    axiosInstance
  )
}
