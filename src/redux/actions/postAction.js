import { getPostApi } from "../api/userApi";
import { GET_POSTS, GET_RESET_POST } from "./actionTypes";

export const getPost = () => {
  return (dispatch) => {
    return dispatch({
      type: GET_POSTS,
      payload: getPostApi(),
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