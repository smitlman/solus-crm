import { createAsyncThunk } from '@reduxjs/toolkit';

// Your actual backend URL
const API_BASE_URL = 'http://localhost:5028/api';

/**
 * Fetch payments data from backend with both sum and summary
 * This thunk handles both API calls to get payments sum and percentage change
 */
export const fetchPayments = createAsyncThunk(
  'payments/fetchPayments',
  async (_, { rejectWithValue }) => {
    try {
      // Call both endpoints
      const [sumResponse, summaryResponse] = await Promise.all([
        fetch(`${API_BASE_URL}/Payment/sum`),
        fetch(`${API_BASE_URL}/Payment/summary`)
      ]);
      
      if (!sumResponse.ok || !summaryResponse.ok) {
        throw new Error(`HTTP error! Sum status: ${sumResponse.status}, Summary status: ${summaryResponse.status}`);
      }
      
      // Get the sum as text and summary as JSON
      const sumText = await sumResponse.text();
      const summaryData = await summaryResponse.json();
      
      return {
        total: parseFloat(sumText) || 0,
        change: summaryData.percentChange || 0,
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
 * Fetch invoices data from backend with both count and summary
 * This thunk handles both API calls to get invoices count and percentage change
 */
export const fetchInvoices = createAsyncThunk(
  'invoices/fetchInvoices',
  async (_, { rejectWithValue }) => {
    try {
      // Call both endpoints
      const [numResponse, summaryResponse] = await Promise.all([
        fetch(`${API_BASE_URL}/Invoice/num`),
        fetch(`${API_BASE_URL}/Invoice/summary`)
      ]);
      
      if (!numResponse.ok || !summaryResponse.ok) {
        throw new Error(`HTTP error! Num status: ${numResponse.status}, Summary status: ${summaryResponse.status}`);
      }
      
      // Get the count as text and summary as JSON
      const numText = await numResponse.text();
      const summaryData = await summaryResponse.json();
      
      return {
        total: parseInt(numText) || 0,
        change: summaryData.percentChange || 0,
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