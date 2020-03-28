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

  return (
    <section className="list__users">
      <div>List of Users</div>
      {props.users.map(user => {
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

export default connect(mapStateToProps, usersActions)(ListUsers);
