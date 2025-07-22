import React from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => (
  <aside className="sidebar">
    <div className="sidebar__logo">solus</div>
    <nav className="sidebar__nav">
      <ul>
        <li className="active"><span className="icon-home" /> Home</li>
        <li><span className="icon-users" /> Clients & Leads</li>
        <li><span className="icon-bolt" /> Smart Actions</li>
        <li><span className="icon-briefcase" /> Business Info</li>
        <li><span className="icon-mail" /> Mail & Proposals</li>
      </ul>
    </nav>
    <div className="sidebar__bottom">
      <div className="sidebar__settings"><span className="icon-settings" /> Settings</div>
      <div className="sidebar__logout"><span className="icon-logout" /> Log out</div>
    </div>
  </aside>
);

export default Sidebar;
