import React from 'react';
import './WelcomeNewClients.css';

const clients = [
  { name: 'John', img: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { name: 'Doe', img: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { name: 'Jane Smith', img: 'https://randomuser.me/api/portraits/women/1.jpg' },
];

const WelcomeNewClients: React.FC = () => (
  <section className="welcome-new-clients">
    <div className="welcome-title">Welcome 30 new clients this month!</div>
    <div className="welcome-avatars">
      {clients.map((c, i) => (
        <div className="welcome-avatar" key={i} title={c.name}>
          <img src={c.img} alt={c.name} />
          <span>{c.name}</span>
        </div>
      ))}
      <div className="welcome-avatar view-all">
        <span>&rarr;</span>
        <span>View All</span>
      </div>
    </div>
  </section>
);

export default WelcomeNewClients;
