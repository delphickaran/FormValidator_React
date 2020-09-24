import {
  REGISTRATION_INITIATED,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAIL,
} from "../actionTypes";

const INITIAL_STATE = Object.freeze({
  error: null,
  loading: false,
  data: null,
});

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTRATION_INITIATED:
      return { ...state, loading: true };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case REGISTRATION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null,
      };
    default:
      return state;
  }
};

export default reducer;
