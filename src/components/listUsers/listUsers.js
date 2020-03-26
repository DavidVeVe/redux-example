import React, { useEffect, useState } from "react";

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
    <section className="list__users">
      <div>List of Users</div>
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
    </section>
  );
};

export default ListUsers;
