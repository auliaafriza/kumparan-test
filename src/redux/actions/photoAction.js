import {
  getPhotoApi,
  addPhotoApi,
  editPhotoApi,
  deletePhotoApi,
} from '../api/userApi';
import {
  GET_PHOTO,
  GET_RESET_PHOTO,
  POST_PHOTO,
  PUT_PHOTO,
  DELETE_PHOTO,
} from './actionTypes';

export const getPhoto = () => {
  return (dispatch) => {
    return dispatch({
      type: GET_PHOTO,
      payload: getPhotoApi(),
    });
  };
};

export const addPhoto = (data) => {
  return (dispatch) => {
    return dispatch({
      type: POST_PHOTO,
      payload: addPhotoApi(data),
    });
  };
};

export const editPhoto = (data, id) => {
  return (dispatch) => {
    return dispatch({
      type: PUT_PHOTO,
      payload: editPhotoApi(data, id),
    });
  };
};

export const deletePhoto = (id) => {
  return (dispatch) => {
    return dispatch({
      type: DELETE_PHOTO,
      payload: deletePhotoApi(id),
    });
  };
};

export const getResetPhoto = () => {
  return (dispatch) => {
    return dispatch({
      type: GET_RESET_PHOTO,
    });
  };
};
