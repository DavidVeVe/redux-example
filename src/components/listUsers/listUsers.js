import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import User from "../user";

import "./listUsers.scss";
import usersReducer from "../../reducers/usersReducer";

const ListUsers = props => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const users = await fetch("https://jsonplaceholder.typicode.com/users");
      const parsedUsers = await users.json();
      setUserData(parsedUsers);
    };
    getUsers();
  }, []);

  console.log(props);

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

const mapStateToProps = reducers => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, {
  /*Actions*/
})(ListUsers);
