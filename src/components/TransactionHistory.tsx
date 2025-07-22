import React from 'react';
import type { Transaction } from '../types/dashboard';
import './TransactionHistory.css';

interface TransactionHistoryProps {
  transactions: Transaction[];
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ transactions }) => (
  <section className="transaction-history">
    <h2>Transaction history</h2>
    <div className="transaction-history__tabs">
      <span className="active">All</span>
      <span>Income</span>
      <span>Expenses</span>
    </div>
    <ul className="transaction-history__list">
      {transactions.map(tx => (
        <li key={tx.id} className={tx.type === 'income' ? 'income' : 'expense'}>
          <div>
            <div className="transaction-title">{tx.title}</div>
            <div className="transaction-subtitle">{tx.subtitle}</div>
          </div>
          <div className="transaction-amount">{tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
        </li>
      ))}
    </ul>
  </section>
);

export default TransactionHistory;
