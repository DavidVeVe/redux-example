import React from "react";

import "./post.scss";

const Post = props => {
  return (
    <section className="post">
      <h4 className="name">{props.name}</h4>
      <h6 className="username">{props.username}</h6>
      <h6 className="email">{props.email}</h6>
    </section>
  );
};

export default Post;
