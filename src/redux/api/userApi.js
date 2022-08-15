import { apiClient } from "./apiClient";

export const getUserApi = () => {
  return apiClient.get(
    `users`
  );
};

export const getPostApi = () => {
  return apiClient.get(
    `posts`
  );
};

export const getAlbumApi = () => {
  return apiClient.get(
    `albums`
  );
};


export const getPhotoApi = () => {
  return apiClient.get(
    `photos`
  );
};