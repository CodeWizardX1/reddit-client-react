import React from 'react';
import { useSelector } from 'react-redux';
import Comment from './Comment';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

export default function CommentList() {
  const comments = useSelector((state) => state.comments.comments);
  const isLoading = useSelector((state) => state.comments.isLoading);
  const error = useSelector((state) => state.comments.error);

  if (isLoading) return <Loading />;
  if (error) return <Error message={error} />;
  if (!comments || comments.length === 0) return <p>No comments found.</p>;

  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
