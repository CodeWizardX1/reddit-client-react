import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSubreddit } from "./subredditSlice";
import fakeSubreddits from "./fakeSubreddits";
import "./Sidebar.css";

export default function Sidebar() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.subreddits.selectedSubreddit);

  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">Subreddits</h3>
      <ul className="subreddit-list">
        {fakeSubreddits.map((subreddit) => {
          const isActive = selected === subreddit.name;
          return (
            <li
              key={subreddit.id}
              className={`subreddit-item ${isActive ? "active" : ""}`}
              onClick={() => dispatch(setSelectedSubreddit(subreddit.name))}
            >
              <div
                className="subreddit-icon"
                style={{
                  backgroundColor: subreddit.color,
                  opacity: isActive ? 1 : 0.6,
                }}
              >
                {subreddit.icon}
              </div>
              <span className="subreddit-name">{subreddit.name}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
