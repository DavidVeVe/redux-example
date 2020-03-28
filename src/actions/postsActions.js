import { BRING_POSTS } from "../types/postsTypes";

export const getPosts = () => async dispatch => {
  try {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const parsedPosts = await posts.json();

    dispatch({
      type: BRING_POSTS,
      payload: parsedPosts
    });
  } catch (error) {
    console.log(error.message);
  }
};
