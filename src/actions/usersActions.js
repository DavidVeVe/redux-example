import { BRING_USERS } from "../types/usersTypes";
import { LOADING } from "../types/loadingType";
// import { ERROR } from "../types/errorType";

export const bringAll = () => async dispatch => {
  dispatch({
    type: LOADING
  });
  try {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const parsedUsers = await users.json();

    dispatch({ type: BRING_USERS, payload: parsedUsers });
  } catch (error) {
    console.log(error);
    // dispatch({
    //   type: ERROR,
    //   payload: error.message
    // });
  }
};
