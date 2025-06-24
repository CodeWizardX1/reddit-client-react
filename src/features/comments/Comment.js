import React from 'react';
import './Comment.css';

export default function Comment({ comment }) {
  return (
    <div className="comment">
      <p className="comment-author">u/{comment.author} · <span className="comment-timestamp">{comment.timestamp}</span></p>
      <p className="comment-body">{comment.body}</p>
    </div>
  );
}
