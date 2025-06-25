import { createSlice } from '@reduxjs/toolkit';

const subredditSlice = createSlice({
  name: 'subreddits',
  initialState: {
    selectedSubreddit: 'pics',
    subreddits: [], // placeholder if you load list from API later
  },
  reducers: {
    setSelectedSubreddit: (state, action) => {
      state.selectedSubreddit = action.payload;
    },
  },
});

export const { setSelectedSubreddit } = subredditSlice.actions;
export default subredditSlice.reducer;
