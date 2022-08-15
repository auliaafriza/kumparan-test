import {
  GET_POSTS,
  GET_POSTS_PENDING,
  GET_POSTS_FULFILLED,
  GET_POSTS_REJECTED,
  GET_RESET_POST,
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
