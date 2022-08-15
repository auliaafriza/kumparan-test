import { apiClient } from './apiClient';

export const getUserApi = () => {
  return apiClient.get(`users`);
};

export const getPostApi = () => {
  return apiClient.get(`posts`);
};

export const getAlbumApi = () => {
  return apiClient.get(`albums`);
};

export const getPhotoApi = () => {
  return apiClient.get(`photos`);
};

//CRUD
export const addPhotoApi = (data) => {
  return apiClient.post(`photos`, data);
};

export const editPhotoApi = (data, id) => {
  return apiClient.put(`photos/${id}`, data);
};

export const deletePhotoApi = (id) => {
  return apiClient.delete(`photos/${id}`);
};

export const addPostApi = (data) => {
  return apiClient.post(`posts`, data);
};

export const editPostApi = (data, id) => {
  return apiClient.put(`posts/${id}`, data);
};

export const deletePostApi = (id) => {
  return apiClient.delete(`posts/${id}`, );
};
