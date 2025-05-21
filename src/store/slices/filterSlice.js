import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  all: true,
  transfers: {
    0: true,
    1: true,
    2: true,
    3: true,
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleAll(state) {
      const newValue = !state.all;
      state.all = newValue;
      for (const key in state.transfers) {
        state.transfers[key] = newValue;
      }
    },
    toggleTransfer(state, action) {
      const key = action.payload;
      state.transfers[key] = !state.transfers[key];

      const allSelected = Object.values(state.transfers).every(Boolean);
      state.all = allSelected;
    },
  },
});

export const { toggleAll, toggleTransfer } = filterSlice.actions;
export default filterSlice.reducer;
