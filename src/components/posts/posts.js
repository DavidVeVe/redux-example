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

  console.log(props);

  return (
    <section className="posts">
      {props.posts.map(post => {
        return <Post title={post.title} body={post.body} key={post.id} />;
      })}
    </section>
  );
};

const mapStateToProps = reducers => {
  return reducers.postsReducer;
};

export default connect(mapStateToProps, postsActions)(Posts);
