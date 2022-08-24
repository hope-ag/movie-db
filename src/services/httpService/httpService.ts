// import { useAxios } from '@vueuse/integrations'
import { genericGetRequest } from '../genericRequest';
import type { MovieSearchType } from '~/types/movies';
//

export async function searchMovies(
  search = '',
  type: MovieSearchType,
  query: Record<any, any> = {}
) {
  const newQuery = query;
  newQuery.query = search;
  return genericGetRequest(`/search/${type}`, newQuery);
}

export async function getCertification(type: 'movie' | 'tv') {
  return genericGetRequest(`/certification/${type}/list`);
}

export async function getCollection(
  id: number,
  what?: 'details' | 'images' | 'translations'
) {
  const target = what === 'details' || !what ? '' : `/${what}`;
  return genericGetRequest(`/collection/${id}${target}`);
}

export async function getCompany(
  id: number,
  what?: 'details' | 'images' | 'alternative_names'
) {
  const target = what === 'details' || !what ? '' : `/${what}`;
  return genericGetRequest(`/company/${id}${target}`);
}

export async function getConfiguration(
  type?:
  | 'countries'
  | 'jobs'
  | 'languages'
  | 'primary_translations'
  | 'timezones'
) {
  const target = type ? `/${type}` : '';
  return genericGetRequest(`/configuration${target}`);
}

export async function getCredits(id: number) {
  return genericGetRequest(`/movie/${id}/credits`);
}

export async function getGenres(type: 'movie' | 'tv') {
  return genericGetRequest(`/genre/${type}/list`);
}

export async function getGuestRatedContent(
  sessionId: string,
  type: 'movie' | 'tv' | 'episode',
  query: { sort_by?: 'created_at.asc' | 'created_at.desc' } = {}
) {
  const suffix = type === 'episode' ? '/tv/episode' : `/${type}`;
  return genericGetRequest(`/guest_session/${sessionId}/rated${suffix}`, query);
}

export async function getKeywordDetails(keywordId: number, moviesOnly = false) {
  const suffix = moviesOnly ? '/movies' : '';
  return genericGetRequest(`/keyword/${keywordId}${suffix}`);
}