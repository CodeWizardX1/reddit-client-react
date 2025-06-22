import { createSlice } from "@reduxjs/toolkit";

const subredditSlice = createSlice({
  name: "subreddits",
  initialState: {
    subreddits: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // TODO: Add reducers
  },
});

export default subredditSlice.reducer;
