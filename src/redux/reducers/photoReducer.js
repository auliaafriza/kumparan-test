import {
  GET_PHOTO,
  GET_PHOTO_PENDING,
  GET_PHOTO_FULFILLED,
  GET_PHOTO_REJECTED,
  GET_RESET_PHOTO,
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
