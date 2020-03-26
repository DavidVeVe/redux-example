import React, { useEffect, useState } from "react";

import Post from "../post";

import "./posts.scss";

const Posts = () => {
  const [postData, setPostData] = useState([]);

  return (
    <section className="posts">
      <Post />
    </section>
  );
};

export default Posts;
