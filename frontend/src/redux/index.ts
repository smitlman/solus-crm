import { configureStore } from '@reduxjs/toolkit';
import paymentsReducer from './paymentsSlice';
import invoicesReducer from './invoicesSlice';

export const store = configureStore({
  reducer: {
    payments: paymentsReducer,
    invoices: invoicesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
