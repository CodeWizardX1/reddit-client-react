import React from "react";
import VoteButtons from "../voting/VoteButton";
import { FaCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Post.css";

export default function Post({ post }) {
  return (
    <div className="post">
      <VoteButtons ups={post.ups} />
      <div className="post-content">
        <Link to={`/post/${post.id}`} className="post-link">
          <h3 className="post-title">{post.title}</h3>
          <img className="post-image" src={post.image} alt={post.title} />
        </Link>
        <div className="post-footer">
          <p className="post-author">Posted by u/{post.author}</p>
          <div className="comments-section">
            <FaCommentAlt className="comment-icon" />
            <span className="comment-count">{post.num_comments} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
