// Service for fetching invoices from backend
import type { Invoice } from '../types/dashboard';

export async function fetchInvoices(): Promise<Invoice[]> {
  // Replace with real API endpoint
  const response = await fetch('/api/invoices');
  if (!response.ok) throw new Error('Failed to fetch invoices');
  return response.json();
}
