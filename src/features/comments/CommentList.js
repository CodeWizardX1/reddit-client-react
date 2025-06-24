// src/features/comments/CommentList.js
import React from 'react';
import Comment from './Comment';
import fakeComments from './fakeComments';

export default function CommentList() {
  return (
    <div className="comment-list">
      {fakeComments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
