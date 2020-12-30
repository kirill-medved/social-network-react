import React from "react";
import post from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={`${post.post}`}>
      <img src="https://img.gazeta.ru/files3/723/11725723/urod-pic685-685x390-29509.jpg" />
      <div
        className={`${post.post__fullname}`}
      >{`${props.firstname} ${props.secondname}`}</div>
      <div className={`${post.post__data}`}>data</div>
      <div className={`${post.post__content}`}>{`${props.content}`}</div>
      <div className={`${post.post__info}`}>
        <span>{props.likesCount} Like</span>
      </div>
    </div>
  );
};

export default Post;
