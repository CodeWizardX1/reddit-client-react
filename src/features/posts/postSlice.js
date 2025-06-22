// src/features/posts/postSlice.js

import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // TODO: Add reducers
  },
});

export default postSlice.reducer;
