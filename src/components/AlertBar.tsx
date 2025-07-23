import React from 'react';
import './AlertBar.css';

const AlertBar: React.FC = () => (
  <div className="alert-bar">
    3 clients haven't completed payment – estimated ₪2,500 <span role="img" aria-label="money">🪙</span>
  </div>
);

export default AlertBar;
