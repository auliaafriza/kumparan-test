import {
  GET_PHOTO,
  GET_PHOTO_PENDING,
  GET_PHOTO_FULFILLED,
  GET_PHOTO_REJECTED,
  GET_RESET_PHOTO,
  POST_PHOTO,
  POST_PHOTO_FULFILLED,
  POST_PHOTO_PENDING,
  POST_PHOTO_REJECTED,
  PUT_PHOTO,
  PUT_PHOTO_FULFILLED,
  PUT_PHOTO_PENDING,
  PUT_PHOTO_REJECTED,
  DELETE_PHOTO,
  DELETE_PHOTO_FULFILLED,
  DELETE_PHOTO_PENDING,
  DELETE_PHOTO_REJECTED,
} from '../actions/actionTypes';

const initialstate = {
  loading: false,
  data: [],
  error: {},
  status: '',
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_PHOTO: {
      return { ...state };
    }
    case GET_PHOTO_PENDING: {
      return { ...state, loading: true };
    }
    case GET_PHOTO_FULFILLED: {
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: 'sukses',
      };
    }
    case GET_PHOTO_REJECTED: {
      return {
        ...state,
        loading: false,
        data: [],
        errors: action.payload.error,
        status: 'gagal',
      };
    }

    case POST_PHOTO: {
      return { ...state };
    }
    case POST_PHOTO_PENDING: {
      return { ...state, loading: true };
    }
    case POST_PHOTO_FULFILLED: {
      return {
        ...state,
        loading: false,
        status: 'sukses',
      };
    }
    case POST_PHOTO_REJECTED: {
      return {
        ...state,
        loading: false,
        errors: action.payload.error,
        status: 'gagal',
      };
    }

    case PUT_PHOTO: {
      return { ...state };
    }
    case PUT_PHOTO_PENDING: {
      return { ...state, loading: true };
    }
    case PUT_PHOTO_FULFILLED: {
      return {
        ...state,
        loading: false,
        status: 'sukses',
      };
    }
    case PUT_PHOTO_REJECTED: {
      return {
        ...state,
        loading: false,
        errors: action.payload.error,
        status: 'gagal',
      };
    }

    case DELETE_PHOTO: {
      return { ...state };
    }
    case DELETE_PHOTO_PENDING: {
      return { ...state, loading: true };
    }
    case DELETE_PHOTO_FULFILLED: {
      return {
        ...state,
        loading: false,
        status: 'sukses',
      };
    }
    case DELETE_PHOTO_REJECTED: {
      return {
        ...state,
        loading: false,
        errors: action.payload.error,
        status: 'gagal',
      };
    }
    case GET_RESET_PHOTO: {
      return {
        ...state,
        loading: false,
        status: '',
      };
    }
    default:
      return state;
  }
};

export default reducer;
