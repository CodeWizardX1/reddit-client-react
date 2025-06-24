import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./features/posts/PostList";
import PostDetail from "./features/posts/PostDetail";
import Sidebar from "./features/subreddits/Sidebar";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <PostList />
                  <Sidebar />
                </>
              }
            />
            <Route path="/post/:id" element={<PostDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
