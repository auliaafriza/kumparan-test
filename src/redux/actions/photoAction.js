import { getPhotoApi } from "../api/userApi";
import { GET_PHOTO, GET_RESET_PHOTO } from "./actionTypes";

export const getPhoto = () => {
  return (dispatch) => {
    return dispatch({
      type: GET_PHOTO,
      payload: getPhotoApi(),
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