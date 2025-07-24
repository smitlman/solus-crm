import { createSlice } from '@reduxjs/toolkit';
// @ts-ignore - JavaScript thunk file
import { fetchPayments } from './thunk.js';
import type { Payment } from '../types/dashboard';

interface PaymentsState {
  data: Payment[];
  total: number;
  change: number;
  loading: boolean;
  error: string | null;
}

const initialState: PaymentsState = {
  data: [],
  total: 0,
  change: 0,
  loading: false,
  error: null,
};

const paymentsSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      // Handle fetchPayments from thunk.js
      .addCase(fetchPayments.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPayments.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.transactions || [];
        state.total = action.payload.total || 0;
        state.change = action.payload.change || 0;
      })
      .addCase(fetchPayments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch payments';
      });
  },
});

export const { clearError } = paymentsSlice.actions;
export default paymentsSlice.reducer;
