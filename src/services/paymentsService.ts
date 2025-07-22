// Service for fetching payments from backend
import type { Payment } from '../types/dashboard';

export async function fetchPayments(): Promise<Payment[]> {
  // Replace with real API endpoint
  const response = await fetch('/api/payments');
  if (!response.ok) throw new Error('Failed to fetch payments');
  return response.json();
}
