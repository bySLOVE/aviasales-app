import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllTickets = createAsyncThunk('tickets/fetchAll', async (_, { rejectWithValue, dispatch }) => {
  try {
    const searchRes = await fetch('https://aviasales-test-api.kata.academy/search');
    if (!searchRes.ok) throw new Error('Не удалось получить searchId');
    const { searchId } = await searchRes.json();

    let stop = false;

    while (!stop) {
      try {
        const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
        if (!res.ok) throw new Error('Ошибка при получении билетов');

        const data = await res.json();

        dispatch(addTickets(data.tickets));

        stop = data.stop;
      } catch (err) {
        if (err instanceof Error && err.message.includes('Ошибка')) {
          continue;
        } else {
          return rejectWithValue(err.message);
        }
      }
    }

    return;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    loading: false,
    error: null,
  },
  reducers: {
    addTickets(state, action) {
      const existingSet = new Set(state.tickets.map((t) => JSON.stringify([t.price, t.carrier, t.segments])));

      const newUniqueTickets = action.payload.filter((ticket) => {
        const signature = JSON.stringify([ticket.price, ticket.carrier, ticket.segments]);
        if (existingSet.has(signature)) return false;
        existingSet.add(signature);
        return true;
      });

      state.tickets.push(...newUniqueTickets);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTickets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllTickets.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchAllTickets.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { addTickets } = ticketsSlice.actions;
export default ticketsSlice.reducer;
