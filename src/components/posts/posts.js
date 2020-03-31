import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as postsActions from "../../actions/postsActions";

import Post from "../post";

import "./posts.scss";

const Posts = props => {
  useEffect(() => {
    const fetchPosts = async () => {
      return await props.getPosts();
    };
    fetchPosts();
  }, []);

  const printPosts = () => {
    return props.posts.map(post => {
      return <Post title={post.title} body={post.body} key={post.id} />;
    });
  };

  return (
    <section className="posts">
      <p>Posts</p>
      {props.loading && <p>Loading data...</p>}
      {printPosts()}
    </section>
  );
};

const mapStateToProps = reducers => {
  return reducers.postsReducer;
};

export default connect(mapStateToProps, postsActions)(Posts);
