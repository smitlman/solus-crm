import React from 'react';
import './ThisMonth.css';

interface ThisMonthProps {
  proposals: number;
  income: number;
  collectionRate: number;
}

const ThisMonth: React.FC<ThisMonthProps> = ({ proposals, income, collectionRate }) => (
  <section className="this-month">
    <h3>This Month</h3>
    <div className="this-month__items">
      <div className="this-month__item">
        <div className="this-month__icon proposals">📊</div>
        <div className="this-month__content">
          <div className="this-month__label">Proposals</div>
          <div className="this-month__value">{proposals}</div>
        </div>
      </div>
      <div className="this-month__item">
        <div className="this-month__icon income">💰</div>
        <div className="this-month__content">
          <div className="this-month__label">Income</div>
          <div className="this-month__value">{income}</div>
        </div>
      </div>
      <div className="this-month__item">
        <div className="this-month__icon collection">📈</div>
        <div className="this-month__content">
          <div className="this-month__label">Collection Rate</div>
          <div className="this-month__value">{collectionRate}%</div>
        </div>
      </div>
    </div>
  </section>
);

export default ThisMonth;
