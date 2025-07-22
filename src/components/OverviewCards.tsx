import React from 'react';
import './OverviewCards.css';

interface OverviewCardsProps {
  payments: number;
  paymentsChange: number;
  invoices: number;
  invoicesChange: number;
}

const OverviewCards: React.FC<OverviewCardsProps> = ({ payments, paymentsChange, invoices, invoicesChange }) => (
  <section className="overview-cards">
    <div className="overview-card">
      <div className="overview-card__label">Payments <span className="overview-card__change positive">+{paymentsChange}%</span></div>
      <div className="overview-card__value">${payments.toLocaleString()}</div>
    </div>
    <div className="overview-card">
      <div className="overview-card__label">Invoices <span className="overview-card__change negative">{invoicesChange}%</span></div>
      <div className="overview-card__value">{invoices}</div>
    </div>
  </section>
);

export default OverviewCards;
