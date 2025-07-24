import React from 'react';
import type { EmailCampaign } from '../types/dashboard';
import './EmailCampaignInsights.css';

interface EmailCampaignInsightsProps {
  campaign: EmailCampaign;
}

const EmailCampaignInsights: React.FC<EmailCampaignInsightsProps> = ({ campaign }) => (
  <section className="email-campaign-insights">
    <h3>Email Campaign Insights</h3>
    <div className="email-campaign-insights__chart">
      {/* Simple donut chart mockup */}
      <svg width="80" height="80" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="32" fill="#f3f3f3" />
        <circle cx="40" cy="40" r="32" fill="none" stroke="#7c3aed" strokeWidth="12" strokeDasharray={`${campaign.openRate*201},201`} strokeDashoffset="0" />
      </svg>
      <div className="email-campaign-insights__rate">Email Open Rate <b>{Math.round(campaign.openRate*100)}%</b></div>
    </div>
    <div className="email-campaign-insights__stats">
      <div>Emails Sent: <b>{campaign.sent.toLocaleString()}</b></div>
      <div>Opened: <b>{campaign.opened.toLocaleString()}</b></div>
      <div>Clicked: <b>{campaign.clicked.toLocaleString()}</b></div>
      <div>Converted: <b>{campaign.converted.toLocaleString()}</b></div>
    </div>
  </section>
);

export default EmailCampaignInsights;
