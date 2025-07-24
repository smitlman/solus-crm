import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './redux/index';
// @ts-ignore - JavaScript thunk file
import { fetchPayments, fetchInvoices } from './redux/thunk.js';
import type { RootState, AppDispatch } from './redux/index';
import Sidebar from './components/Sidebar';
import OverviewCards from './components/OverviewCards';
import TransactionHistory from './components/TransactionHistory';
import MonthlyStatistics from './components/MonthlyStatistics';
import EmailCampaignInsights from './components/EmailCampaignInsights';
import AlertBar from './components/AlertBar';
import ThisMonth from './components/ThisMonth';
import SolusAssistant from './components/SolusAssistant';
import { getTransactions, getMonthlyStats, getEmailCampaign } from './services/dashboardMockService';
import SmartRecommendation from './components/SmartRecommendation';
import WelcomeNewClients from './components/WelcomeNewClients';
import './App.css';

const DashboardContent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { total: paymentsSum, change: paymentsChange } = useSelector((state: RootState) => state.payments);
  const { total: invoicesCount, change: invoicesChange } = useSelector((state: RootState) => state.invoices);

  // Mock data (static data as requested)
  const transactions = getTransactions();
  const monthlyStats = getMonthlyStats();
  const emailCampaign = getEmailCampaign();

  useEffect(() => {
    // Fetch real data for payments and invoices from backend
    dispatch(fetchPayments());
    dispatch(fetchInvoices());
  }, [dispatch]);

  return (
    <div className="dashboard-root">
      <Sidebar />
      <main className="dashboard-main">
        <AlertBar />
        <h1 className="dashboard-title">Overview</h1>
        <div className="dashboard-content">
          <div className="dashboard-left">
            <OverviewCards payments={paymentsSum} paymentsChange={paymentsChange} invoices={invoicesCount} invoicesChange={invoicesChange} />
            <ThisMonth proposals={305} income={259} collectionRate={80} />
            <div className="dashboard-row dashboard-row--charts">
              <div className="dashboard-col dashboard-col--chart-left">
                <MonthlyStatistics stats={monthlyStats} />
              </div>
              <div className="dashboard-col dashboard-col--chart-middle">
                <EmailCampaignInsights campaign={emailCampaign} />
              </div>
              <div className="dashboard-col dashboard-col--chart-right">
              </div>
            </div>
          </div>
          <div className="dashboard-right">
            <div className="dashboard-header">
              <div className="dashboard-user">Hello Ofek! <span className="dashboard-user__avatar">O</span></div>
            </div>
            <TransactionHistory transactions={transactions} />
            <SmartRecommendation />
            <WelcomeNewClients />
          </div>
        </div>
        <SolusAssistant />
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <DashboardContent />
    </Provider>
  );
};

export default App;
