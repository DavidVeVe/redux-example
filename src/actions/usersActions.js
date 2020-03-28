import { BRING_USERS } from "../types/usersTypes";

export const bringAll = () => async dispatch => {
  try {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const parsedUsers = await users.json();

    dispatch({ type: BRING_USERS, payload: parsedUsers });
  } catch (error) {
    console.log(error.message);
  }
};
