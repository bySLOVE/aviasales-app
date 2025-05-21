import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (_, { rejectWithValue }) => {
  try {
    // Получаем searchId
    const searchRes = await fetch('https://aviasales-test-api.kata.academy/search');
    if (!searchRes.ok) throw new Error('Не удалось получить searchId');
    const { searchId } = await searchRes.json();

    // Получаем первую порцию билетов
    const ticketsRes = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
    if (!ticketsRes.ok) throw new Error('Не удалось получить билеты');
    const data = await ticketsRes.json();
    return data.tickets;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.tickets = action.payload;
        state.loading = false;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default ticketsSlice.reducer;
