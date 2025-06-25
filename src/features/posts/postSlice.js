// src/features/posts/postSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// ✅ Thunk to fetch posts from r/pics
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (subreddit = 'pics', thunkAPI) => {
    try {
      const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
      const json = await response.json();
      return json.data.children.map((child) => child.data);
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch posts');
    }
  }
);


const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Unknown error';
      });
  },
});

export default postSlice.reducer;
