import React, { Fragment, useEffect, useState } from "react";

import User from "../user";

import "./listUsers.scss";

const ListUsers = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const users = await fetch("https://jsonplaceholder.typicode.com/users");
      const parsedUsers = await users.json();
      setUserData(parsedUsers);
    };
    getUsers();
  }, []);

  return (
    <Fragment>
      <div>List</div>
      {userData.map(user => {
        return (
          <User
            name={user.name}
            username={user.username}
            email={user.email}
            key={user.id}
          />
        );
      })}
    </Fragment>
  );
};

export default ListUsers;
