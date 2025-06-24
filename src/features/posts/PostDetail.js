import React from "react";
import { useParams } from "react-router-dom";
import fakePosts from "./fakePosts";
import CommentList from "../comments/CommentList";
import "./PostDetail.css";

export default function PostDetail() {
  const { id } = useParams();
  const post = fakePosts.find((p) => p.id === id); // Adjust if IDs are strings

  if (!post) {
    return (
      <p style={{ padding: "2rem", textAlign: "center" }}>Post not found.</p>
    );
  }

  return (
    <div className="post-detail">
      <h2 className="post-detail-title">{post.title}</h2>
      <img className="post-detail-image" src={post.image} alt={post.title} />
      <p className="post-detail-author">Posted by u/{post.author}</p>
      <p className="post-detail-comments-count">{post.num_comments} comments</p>
      <hr />
      <CommentList />
    </div>
  );
}
