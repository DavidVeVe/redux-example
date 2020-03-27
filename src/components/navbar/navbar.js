import React from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Users</Link>
      <Link to="/posts">Posts</Link>
    </nav>
  );
};

export default Navbar;
