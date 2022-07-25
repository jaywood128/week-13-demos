import { useState } from "react";

const Post = () => {
  // Returns a stateful value (isLiked), and a function (setIsLiked) to update it.
  // const [, ] = useState(false);

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

      <button>Like me</button>
      {/* {Add JSX} */}
    </div>
  );
};

export default Post;
