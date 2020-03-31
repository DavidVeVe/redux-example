import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as usersActions from "../../actions/usersActions";

import User from "../user";

import "./listUsers.scss";

const ListUsers = props => {
  useEffect(() => {
    const fetchData = async () => {
      return await props.bringAll();
    };
    fetchData();
  }, []);

  const printUsers = () => {
    return props.users.map(user => {
      return (
        <User
          name={user.name}
          username={user.username}
          email={user.email}
          key={user.id}
        />
      );
    });
  };

  return (
    <section className="list__users">
      <div>List of Users</div>
      {props.loading && <p>Loading data...</p>}
      {printUsers()}
    </section>
  );
};

const mapStateToProps = reducers => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(ListUsers);
