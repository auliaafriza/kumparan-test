import { getAlbumApi } from '../api/userApi';
import { GET_ALBUM, GET_PHOTO, GET_RESET_ALBUM } from './actionTypes';

export const getAlbum = () => {
  return (dispatch) => {
    return dispatch({
      type: GET_ALBUM,
      payload: getAlbumApi(),
    });
  };
};

export const getResetAlbum = () => {
  return (dispatch) => {
    return dispatch({
      type: GET_RESET_ALBUM,
    });
  };
};
