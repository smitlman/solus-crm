import { createAsyncThunk } from '@reduxjs/toolkit';

// Your actual backend URL
const API_BASE_URL = 'http://localhost:5028/api';

/**
 * Fetch payments data from backend
 * This thunk handles the API call to get payments sum
 */
export const fetchPayments = createAsyncThunk(
  'payments/fetchPayments',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/Payment/sum`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Since backend returns plain text number, not JSON
      const total = await response.text();
      
      return {
        total: parseFloat(total) || 0,
        change: 0, // You can calculate this later or add another endpoint
        transactions: [] // This can come from mock data if needed
      };
    } catch (error) {
      console.warn('API call failed, using mock data:', error.message);
      
      // Fallback mock data
      return {
        total: 423967,
        change: 12.5,
        transactions: [
          { id: 1, type: 'payment', amount: 2500, date: '2025-01-20', description: 'Client Payment' },
          { id: 2, type: 'payment', amount: 1800, date: '2025-01-19', description: 'Invoice Settlement' },
          { id: 3, type: 'payment', amount: 3200, date: '2025-01-18', description: 'Project Payment' },
        ]
      };
    }
  }
);

/**
 * Fetch invoices data from backend
 * This thunk handles the API call to get invoices count
 */
export const fetchInvoices = createAsyncThunk(
  'invoices/fetchInvoices',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/Invoice/num`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Since backend returns plain text number, not JSON
      const count = await response.text();
      
      return {
        total: parseInt(count) || 0,
        change: 0, // You can calculate this later or add another endpoint
        list: [] // This can come from mock data if needed
      };
    } catch (error) {
      console.warn('API call failed, using mock data:', error.message);
      
      // Fallback mock data
      return {
        total: 1259,
        change: -2.3,
        list: [
          { id: 1, client: 'ABC Corp', amount: 5000, status: 'paid', date: '2025-01-20' },
          { id: 2, client: 'XYZ Ltd', amount: 3500, status: 'pending', date: '2025-01-19' },
          { id: 3, client: 'Tech Solutions', amount: 7200, status: 'overdue', date: '2025-01-15' },
        ]
      };
    }
  }
);
