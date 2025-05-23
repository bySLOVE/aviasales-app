import { createSlice } from '@reduxjs/toolkit';

const AVAILABLE_TRANSFERS = [0, 1, 2, 3];

const initialState = {
  selected: [...AVAILABLE_TRANSFERS],
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleTransfer(state, action) {
      const value = action.payload;
      if (state.selected.includes(value)) {
        state.selected = state.selected.filter((item) => item !== value);
      } else {
        state.selected.push(value);
      }
    },
    toggleAll(state) {
      if (state.selected.length === AVAILABLE_TRANSFERS.length) {
        state.selected = [];
      } else {
        state.selected = [...AVAILABLE_TRANSFERS];
      }
    },
  },
});

export const { toggleTransfer, toggleAll } = filterSlice.actions;
export const availableTransfers = AVAILABLE_TRANSFERS;
export default filterSlice.reducer;
