//import and register each reducer
import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postSlice";
import commentReducer from "../features/comments/commentSlice";
import subredditReducer from "../features/subreddits/subredditSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    comments: commentReducer,
    subreddits: subredditReducer,
  },
});
