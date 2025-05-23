import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    visibleCount: 5,
  },
  reducers: {
    showMore(state) {
      state.visibleCount += 5;
    },
  },
});

export const { showMore } = uiSlice.actions;
export default uiSlice.reducer;
