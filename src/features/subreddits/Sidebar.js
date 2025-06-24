import React from "react";
import fakeSubreddits from "./fakeSubreddits";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">Subreddits</h3>
      <ul className="subreddit-list">
        {fakeSubreddits.map((subreddit) => (
          <li key={subreddit.id} className="subreddit-item">
            <div className="subreddit-icon" style={{ backgroundColor: subreddit.color }}>
              {subreddit.icon}
            </div>
            <span className="subreddit-name">{subreddit.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
