import { configureStore } from '@reduxjs/toolkit';
import sortReducer from './slices/sortSlice';
import filterReducer from './slices/filterSlice';
import ticketsReducer from './slices/ticketsSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    sort: sortReducer,
    filters: filterReducer,
    ui: uiReducer,
  },
});
