import { LOGIN_INITIATED, LOGIN_SUCCESS, LOGIN_FAIL } from "../actionTypes";

const INITIAL_STATE = Object.freeze({
  isAuthenticated: false,
  error: null,
  loading: false,
  data: null,
});

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_INITIATED:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        data: action.payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload,
        data: null,
      };
    default:
      return state;
  }
};

export default reducer;
