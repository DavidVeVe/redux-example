import { BRING_POSTS } from "../types/postsTypes";
import { LOADING } from "../types/loadingType";
import { ERROR } from "../types/errorType";

export const getPosts = () => async dispatch => {
  dispatch({
    type: LOADING
  });
  try {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const parsedPosts = await posts.json();

    dispatch({
      type: BRING_POSTS,
      payload: parsedPosts
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};
