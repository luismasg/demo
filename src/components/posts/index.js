import React from "react";
import FlipMove from "react-flip-move";

const Posts = ({ posts }) => {
  const PostCopy = posts.slice(1);
  return (
    <FlipMove
      enterAnimation="accordionVertical"
      staggerDelayBy="50"
      typeName={null}
    >
      {PostCopy.map(post => (
        <div className="card postsCard" key={post.id}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
          </div>
        </div>
      ))}
    </FlipMove>
  );
};

export default Posts;
