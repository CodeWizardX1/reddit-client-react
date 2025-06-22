// src/features/posts/Post.js
import React from 'react';
import VoteButton from '../voting/VoteButton';
import './Post.css';

export default function Post({ post }) {
  return (
    <div className="post">
      <VoteButton ups={post.ups} />
      <div className="post-content">
        <h3 className="post-title">{post.title}</h3>
        <img className="post-image" src={post.image} alt={post.title} />
        <p className="post-author">Posted by u/{post.author}</p>
      </div>
    </div>
  );
}
