import { useState } from "react";
import React from "react";

const Post = () => {
  // Returns a stateful value (isLiked), and a function (setIsLiked) to update it.

  const [isLiked, setIsLiked] = useState(false);

  //   <span role="img" aria-label="thumbs-up">
  //   👍
  // </span>
  // Add onClick inline handler
  // JSX allows us to include Ternary operation (like we are in a JS script file)
  // in html
  return (
    <div>
      <h1>My Post</h1>
      <p>Today's post is about ...</p>

      <button
        onClick={(e) => setIsLiked(!isLiked)}
        style={{ backgroundColor: "blue" }}
      >
        Like me
      </button>
      {isLiked ? (
        <span role='img' aria-label='thumbs-up'>
          👍{" "}
        </span>
      ) : null}
    </div>
  );
};

export default Post;
