// Dashboard types for strong typing and reusability

export interface Payment {
  id: string;
  amount: number;
  date: string;
  status: 'pending' | 'completed';
  client: string;
}

export interface Invoice {
  id: string;
  number: string;
  amount: number;
  date: string;
  status: 'paid' | 'unpaid';
  client: string;
}

export interface Transaction {
  id: string;
  title: string;
  subtitle: string;
  amount: number;
  type: 'income' | 'expense';
}

export interface MonthlyStats {
  week: string;
  proposals: number;
  income: number;
  payment: number;
}

export interface EmailCampaign {
  openRate: number;
  sent: number;
  opened: number;
  clicked: number;
  converted: number;
}
