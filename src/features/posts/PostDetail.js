import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments } from "../comments/commentSlice";
import CommentList from "../comments/CommentList";
import "./PostDetail.css";

import { useNavigate } from "react-router-dom";
import { useSelector as useGlobalSelector } from "react-redux";

export default function PostDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get post from posts state (could also fetch fresh if needed)
  const post = useGlobalSelector((state) =>
    state.posts.posts.find((p) => p.id === id || p.id === parseInt(id))
  );
  const hasImage = post.image && /\.(jpg|jpeg|png|gif)$/i.test(post.image);

  useEffect(() => {
    if (post?.permalink) {
      dispatch(fetchComments(post.permalink));
    }
  }, [dispatch, post]);

  if (!post) {
    return (
      <div className="post-detail">
        <p>Post not found.</p>
        <button onClick={() => navigate(-1)}>← Back</button>
      </div>
    );
  }

  return (
    <div>
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="post-detail">
        <h2 className="post-detail-title">{post.title}</h2>
        {hasImage && (
          <img className="post-image" src={post.image} alt={post.title} />
        )}
        <p className="post-detail-author">Posted by u/{post.author}</p>
        <p className="post-detail-comments-count">
          {post.num_comments} comments
        </p>
        <hr />
        <CommentList />
      </div>
    </div>
  );
}
