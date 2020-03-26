import React, { useEffect, useState } from "react";

import Post from "../post";

import "./posts.scss";

const Posts = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
      const parsedPosts = await posts.json();
      setPostData(parsedPosts);
    };
    getPosts();
  }, []);

  return (
    <section className="posts">
      {postData.map(post => {
        return <Post title={post.title} body={post.body} key={post.id} />;
      })}
    </section>
  );
};

export default Posts;
