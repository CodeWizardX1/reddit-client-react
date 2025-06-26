import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector as useGlobalSelector } from "react-redux";
import { fetchComments } from "../comments/commentSlice";
import CommentList from "../comments/CommentList";
import "./PostDetail.css";

export default function PostDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const post = useGlobalSelector((state) =>
    state.posts.posts.find((p) => p.id === id || p.id === parseInt(id))
  );

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

        {/* Conditionally render Reddit-hosted video */}
        {post.post_hint === "hosted:video" &&
          post.media?.reddit_video?.fallback_url && (
            <video
              className="post-detail-video"
              controls
              muted
              src={post.media.reddit_video.fallback_url}
            />
          )}

        {/* Conditionally render image */}
        {post.post_hint === "image" && (
          <img className="post-detail-image" src={post.url} alt={post.title} />
        )}

        {/* Conditionally render selftext */}
        {post.selftext && (
          <div className="post-detail-body">
            <p>{post.selftext}</p>
          </div>
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
