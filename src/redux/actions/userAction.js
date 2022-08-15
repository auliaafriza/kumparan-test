import { getUserApi } from "../api/userApi";
import { GET_USER, GET_RESET_USER } from "./actionTypes";

export const getUser = () => {
  return (dispatch) => {
    return dispatch({
      type: GET_USER,
      payload: getUserApi(),
    });
  };
};

export const getResetUser = () => {
  return (dispatch) => {
    return dispatch({
      type: GET_RESET_USER,
    });
  };
};