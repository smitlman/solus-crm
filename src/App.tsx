
import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import OverviewCards from './components/OverviewCards';
import TransactionHistory from './components/TransactionHistory';
import MonthlyStatistics from './components/MonthlyStatistics';
import EmailCampaignInsights from './components/EmailCampaignInsights';

import { fetchPayments } from './services/paymentsService';
import { fetchInvoices } from './services/invoicesService';
import { getTransactions, getMonthlyStats, getEmailCampaign } from './services/dashboardMockService';
import SmartRecommendation from './components/SmartRecommendation';
import WelcomeNewClients from './components/WelcomeNewClients';
import type { Payment, Invoice } from './types/dashboard';
import './App.css';

const App: React.FC = () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([
      fetchPayments(),
      fetchInvoices()
    ])
      .then(([paymentsData, invoicesData]) => {
        setPayments(paymentsData);
        setInvoices(invoicesData);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load data from backend');
        setLoading(false);
      });
  }, []);

  // Mock/statistics
  const transactions = getTransactions();
  const monthlyStats = getMonthlyStats();
  const emailCampaign = getEmailCampaign();

  // Calculated values for overview
  const paymentsSum = payments.reduce((sum, p) => sum + p.amount, 0);
  const paymentsChange = 15; // mock
  const invoicesCount = invoices.length;
  const invoicesChange = -10; // mock

  return (
    <div className="dashboard-root">
      <Sidebar />
      <main className="dashboard-main">
        <div className="dashboard-header">
          <div className="dashboard-alert">3 clients haven't completed payment – estimated ₪2,500 <span role="img" aria-label="money">🪙</span></div>
          <div className="dashboard-user">Hello Ofek! <span className="dashboard-user__avatar">O</span></div>
        </div>
        <h1 className="dashboard-title">Overview</h1>
        <OverviewCards payments={paymentsSum} paymentsChange={paymentsChange} invoices={invoicesCount} invoicesChange={invoicesChange} />
        <div className="dashboard-row">
          <div className="dashboard-col dashboard-col--main">
            <MonthlyStatistics stats={monthlyStats} />
            <EmailCampaignInsights campaign={emailCampaign} />
            <SmartRecommendation />
            <WelcomeNewClients />
          </div>
          <div className="dashboard-col dashboard-col--side">
            <TransactionHistory transactions={transactions} />
          </div>
        </div>
        {loading && <div className="dashboard-loading">Loading...</div>}
        {error && <div className="dashboard-error">{error}</div>}
      </main>
    </div>
  );
};

export default App;
