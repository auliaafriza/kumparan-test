import {
  GET_ALBUM,
  GET_ALBUM_PENDING,
  GET_ALBUM_FULFILLED,
  GET_ALBUM_REJECTED,
  GET_RESET_ALBUM,
} from '../actions/actionTypes';

const initialstate = {
  loading: false,
  data: [],
  error: {},
  status: '',
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_ALBUM: {
      return { ...state };
    }
    case GET_ALBUM_PENDING: {
      return { ...state, loading: true };
    }
    case GET_ALBUM_FULFILLED: {
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: 'sukses',
      };
    }
    case GET_ALBUM_REJECTED: {
      return {
        ...state,
        loading: false,
        data: [],
        errors: action.payload.error,
        status: 'gagal',
      };
    }
    case GET_RESET_ALBUM: {
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
