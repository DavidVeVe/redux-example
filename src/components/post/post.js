import React from "react";

import "./post.scss";

const Post = props => {
  return (
    <section className="post">
      <h4 className="title">{props.title}</h4>
      <h6 className="body">{props.body}</h6>
    </section>
  );
};

export default Post;
