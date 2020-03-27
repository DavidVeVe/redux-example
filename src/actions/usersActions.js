export const bringAll = () => async dispatch => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const parsedUsers = await users.json();

  dispatch({ type: "bring_users", payload: await parsedUsers });
};
