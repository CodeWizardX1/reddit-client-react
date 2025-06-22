import React from "react";
import fakePosts from "./fakePosts";
import Post from "./Post";


export default function PostList() {
  return (
    <div className="post-list">
      {/* TODO: Map over post data and render post components */}
      {fakePosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
