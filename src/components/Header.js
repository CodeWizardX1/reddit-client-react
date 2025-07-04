// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaReddit } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <FaReddit className="logo-icon" />
          <span className="logo-text">RedditMinimal</span>
        </Link>
        <div className="search-container">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </div>
    </header>
  );
}
