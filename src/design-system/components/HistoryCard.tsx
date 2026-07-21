import type { PropsWithChildren } from 'react';

interface HistoryCardProps extends PropsWithChildren {
  label: string;
  value: string;
}

export const HistoryCard = ({ label, value, children }: HistoryCardProps) => (
  <div className="history-card">
    <p className="card-label">{label}</p>
    <p className="card-value">{value}</p>
    {children}
  </div>
);
