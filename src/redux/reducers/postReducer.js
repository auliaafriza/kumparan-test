import {
  GET_POSTS,
  GET_POSTS_PENDING,
  GET_POSTS_FULFILLED,
  GET_POSTS_REJECTED,
  GET_RESET_POST,
  POST_POSTING,
  POST_POSTING_FULFILLED,
  POST_POSTING_PENDING,
  POST_POSTING_REJECTED,
  PUT_POST,
  PUT_POST_FULFILLED,
  PUT_POST_PENDING,
  PUT_POST_REJECTED,
  DELETE_POST,
  DELETE_POST_FULFILLED,
  DELETE_POST_PENDING,
  DELETE_POST_REJECTED,
} from '../actions/actionTypes';

const initialstate = {
  loading: false,
  dataPost: [],
  error: {},
  status: '',
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_POSTS: {
      return { ...state };
    }
    case GET_POSTS_PENDING: {
      return { ...state, loading: true };
    }
    case GET_POSTS_FULFILLED: {
      return {
        ...state,
        dataPost: action.payload.data,
        loading: false,
        status: 'sukses',
      };
    }
    case GET_POSTS_REJECTED: {
      return {
        ...state,
        loading: false,
        dataPost: [],
        errors: action.payload.error,
        status: 'gagal',
      };
    }

    case POST_POSTING: {
      return { ...state };
    }
    case POST_POSTING_PENDING: {
      return { ...state, loading: true };
    }
    case POST_POSTING_FULFILLED: {
      return {
        ...state,
        loading: false,
        status: 'sukses',
      };
    }
    case POST_POSTING_REJECTED: {
      return {
        ...state,
        loading: false,
        errors: action.payload.error,
        status: 'gagal',
      };
    }

    case PUT_POST: {
      return { ...state };
    }
    case PUT_POST_PENDING: {
      return { ...state, loading: true };
    }
    case PUT_POST_FULFILLED: {
      return {
        ...state,
        loading: false,
        status: 'sukses',
      };
    }
    case PUT_POST_REJECTED: {
      return {
        ...state,
        loading: false,
        errors: action.payload.error,
        status: 'gagal',
      };
    }

    case DELETE_POST: {
      return { ...state };
    }
    case DELETE_POST_PENDING: {
      return { ...state, loading: true };
    }
    case DELETE_POST_FULFILLED: {
      return {
        ...state,
        loading: false,
        status: 'sukses',
      };
    }
    case DELETE_POST_REJECTED: {
      return {
        ...state,
        loading: false,
        errors: action.payload.error,
        status: 'gagal',
      };
    }
    case GET_RESET_POST: {
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
