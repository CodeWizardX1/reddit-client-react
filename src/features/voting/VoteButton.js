import React, { useState } from "react";
import "./VoteButton.css";

export default function VoteButton({ ups }) {
  const [vote, setVote] = useState(0); //1 for upvote, -1 for downvote, 0 is neutral

  function handleUpvote() {
    setVote((prev) => (prev === 1 ? 0 : 1));
  }

  function handleDownvote() {
    setVote((prev) => (prev === -1 ? 0 : -1));
  }

  const voteCount = ups + vote;

  return (
    <div className="vote-buttons">
      <button
        onClick={handleUpvote}
        className={vote === 1 ? "vote-up" : "vote-neutral"}
      >
        ▲
      </button>
      <div
        className={`vote-count ${
          vote === 1 ? "vote-up" : vote === -1 ? "vote-down" : "vote-neutral"
        }`}
      >
        {voteCount.toLocaleString()}
      </div>
      <button
        onClick={handleDownvote}
        className={vote === -1 ? "vote-down" : "vote-neutral"}
      >
        ▼
      </button>
    </div>
  );
}
