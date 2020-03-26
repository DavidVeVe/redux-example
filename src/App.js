import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar";
import ListUsers from "./components/listUsers";
import Posts from "./components/posts";

import "./app.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path={"/users"} component={ListUsers} />
      <Route path={"/posts"} component={Posts} />
    </BrowserRouter>
  );
}

export default App;
