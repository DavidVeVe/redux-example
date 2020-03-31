import { BRING_USERS } from "../types/usersTypes";
import { LOADING } from "../types/loadingType";
import { ERROR } from "../types/errorType";

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BRING_USERS:
      return { ...state, users: action.payload, loading: false };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
