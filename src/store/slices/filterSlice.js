import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  all: false,
  transfers: {
    0: false,
    1: false,
    2: false,
    3: false,
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
