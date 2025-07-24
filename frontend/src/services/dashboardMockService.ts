// Mock service for static dashboard data
import type { Transaction, MonthlyStats, EmailCampaign } from '../types/dashboard';

export function getTransactions(): Transaction[] {
  return [
    { id: '1', title: 'Central Burger', subtitle: 'Cafe and Restaurant', amount: -189.36, type: 'expense' },
    { id: '2', title: 'Great Coffee', subtitle: 'Cafe and Restaurant', amount: -189.36, type: 'expense' },
    { id: '3', title: 'Grocery Delivery', subtitle: 'Food Delivery', amount: 350.00, type: 'income' },
  ];
}

export function getMonthlyStats(): MonthlyStats[] {
  return [
    { week: 'week 1', proposals: 30_000, income: 50_000, payment: 25_000 },
    { week: 'week 2', proposals: 25_000, income: 30_000, payment: 20_000 },
    { week: 'week 3', proposals: 40_000, income: 60_000, payment: 35_000 },
    { week: 'week 4', proposals: 35_000, income: 55_000, payment: 30_000 },
  ];
}

export function getEmailCampaign(): EmailCampaign {
  return {
    openRate: 0.7,
    sent: 3000,
    opened: 1820,
    clicked: 960,
    converted: 134,
  };
}
