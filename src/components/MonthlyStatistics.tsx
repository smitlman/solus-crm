import React from 'react';
import type { MonthlyStats } from '../types/dashboard';
import './MonthlyStatistics.css';

interface MonthlyStatisticsProps {
  stats: MonthlyStats[];
}

const MonthlyStatistics: React.FC<MonthlyStatisticsProps> = ({ stats }) => (
  <section className="monthly-statistics">
    <h3>Monthly Statistics</h3>
    <div className="monthly-statistics__chart">
      {/* Simple bar chart mockup */}
      <div className="chart-row">
        {stats.map((s, i) => (
          <div key={i} className="chart-bar proposals" style={{height: `${s.proposals/1200}px`}} title={`Proposals: ${s.proposals.toLocaleString()}`}></div>
        ))}
      </div>
      <div className="chart-row">
        {stats.map((s, i) => (
          <div key={i} className="chart-bar income" style={{height: `${s.income/1200}px`}} title={`Income: ${s.income.toLocaleString()}`}></div>
        ))}
      </div>
      <div className="chart-row">
        {stats.map((s, i) => (
          <div key={i} className="chart-bar payment" style={{height: `${s.payment/1200}px`}} title={`Payment: ${s.payment.toLocaleString()}`}></div>
        ))}
      </div>
      <div className="chart-labels">
        {stats.map((s, i) => (
          <span key={i}>{s.week}</span>
        ))}
      </div>
    </div>
    <div className="monthly-statistics__legend">
      <span className="proposals">Proposals</span>
      <span className="income">Income</span>
      <span className="payment">Payment</span>
    </div>
  </section>
);

export default MonthlyStatistics;
