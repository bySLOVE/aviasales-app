import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selected: 'Самый дешевый',
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort(state, action) {
      state.selected = action.payload;
    },
  },
});

export const { setSort } = sortSlice.actions;
export default sortSlice.reducer;
