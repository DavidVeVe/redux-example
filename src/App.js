import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar";
import ListUsers from "./components/listUsers";
import Posts from "./components/posts";

import "./app.scss";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={"/posts"} component={Posts} />
        <Route path={"/"} component={ListUsers} />
      </Switch>
    </Router>
  );
}

export default App;
