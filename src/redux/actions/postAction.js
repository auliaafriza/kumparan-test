import {
  getPostApi,
  addPostApi,
  editPostApi,
  deletePostApi,
} from '../api/userApi';
import {
  DELETE_POST,
  GET_POSTS,
  GET_RESET_POST,
  POST_POSTING,
  PUT_POST,
} from './actionTypes';

export const getPost = () => {
  return (dispatch) => {
    return dispatch({
      type: GET_POSTS,
      payload: getPostApi(),
    });
  };
};

export const addPost = (data) => {
  return (dispatch) => {
    return dispatch({
      type: POST_POSTING,
      payload: addPostApi(data),
    });
  };
};

export const editPost = (data, id) => {
  return (dispatch) => {
    return dispatch({
      type: PUT_POST,
      payload: editPostApi(data, id),
    });
  };
};

export const deletePost = (id) => {
  return (dispatch) => {
    return dispatch({
      type: DELETE_POST,
      payload: deletePostApi(id),
    });
  };
};

export const getResetPost = () => {
  return (dispatch) => {
    return dispatch({
      type: GET_RESET_POST,
    });
  };
};
