import React from "react";
import { useState } from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = ({post, number, remove}) => {

  return (
    <div className="post">
      <div className="post_content">
        <h2>{number}. {post.title}</h2>
        <div>{post.body}</div>
      </div>
      <div>
        <MyButton  onClick={() => remove(post)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
