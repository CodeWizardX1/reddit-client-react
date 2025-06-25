import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 🔁 Async thunk to fetch comments for a given post
export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (permalink, thunkAPI) => {
    try {
      const response = await fetch(`https://www.reddit.com${permalink}.json`);
      const json = await response.json();
      const rawComments = json[1].data.children;

      // Return cleaned-up comment data
      return rawComments
        .filter((item) => item.kind === 't1') // Only include actual comments
        .map((item) => item.data);
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to load comments');
    }
  }
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Unknown error';
      });
  },
});

export default commentsSlice.reducer;

