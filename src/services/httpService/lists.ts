import { genericDeleteRequest, genericGetRequest, genericPostRequest } from '../genericRequest';

export async function getListDetails(listId: number) {
  return genericGetRequest(`/list/${listId}`);
}

export async function getListItemStatus(listId: number, query: { movie_id: number }) {
  return genericGetRequest(`/list/${listId}/item_status`, query);
}

export async function createList(query: { name: string; description?: string }) {
  return genericPostRequest('/list', {}, query, true);
}

export async function deleteList(listId: number) {
  return genericDeleteRequest(`/list/${listId}`, {}, true);
}

export async function addMovieToList(
  listId: number,
  body: { media_id: number }
) {
  return genericPostRequest(`/list/${listId}/add_item`, body, {}, true);
}

export async function removeMovieFromList(
  listId: number,
  body: { media_id: number }
) {
  return genericPostRequest(`/list/${listId}/remove_item`, {}, body, true);
}

export async function clearList(listId: number) {
  return genericPostRequest(`/list/${listId}/clear`, { confirm: true }, {}, true);
}