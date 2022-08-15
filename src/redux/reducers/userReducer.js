import {
  GET_USER,
  GET_USER_PENDING,
  GET_USER_FULFILLED,
  GET_USER_REJECTED,
  GET_RESET_USER,
} from '../actions/actionTypes';

const initialstate = {
  loading: false,
  status: '',
  dataUser: [],
  error: {},
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_USER: {
      return { ...state };
    }
    case GET_USER_PENDING: {
      return { ...state, loading: true };
    }
    case GET_USER_FULFILLED: {
      return {
        ...state,
        dataUser: action.payload.data,
        loading: false,
        status: 'sukses',
      };
    }
    case GET_USER_REJECTED: {
      return {
        ...state,
        loading: false,
        dataUser: [],
        errors: action.payload.error,
        status: 'gagal',
      };
    }
    case GET_RESET_USER: {
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
