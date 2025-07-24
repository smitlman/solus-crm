import { createSlice } from '@reduxjs/toolkit';
// @ts-ignore - JavaScript thunk file
import { fetchInvoices } from './thunk.js';
import type { Invoice } from '../types/dashboard';

interface InvoicesState {
  data: Invoice[];
  total: number;
  change: number;
  loading: boolean;
  error: string | null;
}

const initialState: InvoicesState = {
  data: [],
  total: 0,
  change: 0,
  loading: false,
  error: null,
};

const invoicesSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      // Handle fetchInvoices from thunk.js
      .addCase(fetchInvoices.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.list || [];
        state.total = action.payload.total || 0;
        state.change = action.payload.change || 0;
      })
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch invoices';
      });
  },
});

export const { clearError } = invoicesSlice.actions;
export default invoicesSlice.reducer;
