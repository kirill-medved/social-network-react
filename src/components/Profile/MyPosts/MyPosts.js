import React from "react";
import myPosts from "./MyPosts.module.css";
import Post from "./Post/Post";
import PostFormValidation from "./PostFormValidation/PostFormValidation";

const MyPosts = React.memo((props) => {
  let postsElements = props.postsData.map((post) => (
    <Post content={post.content} likesCount={post.likesCount} />
  ));

  let sendPost = (formData) => {
    props.addPost(formData.post);
  };

  return (
    <div className={myPosts.content}>
      <div>
        New post
        <PostFormValidation onSubmit={sendPost} />
      </div>
      <div>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
