import { BRING_POSTS } from "../types/postsTypes";
import { LOADING } from "../types/loadingType";
import { ERROR } from "../types/errorType";

const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BRING_POSTS:
      return { ...state, posts: action.payload, loading: false };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
