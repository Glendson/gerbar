import type { PropsWithChildren } from 'react';

interface StatCardProps extends PropsWithChildren {
  label: string;
  value: string;
}

export const StatCard = ({ label, value, children }: StatCardProps) => (
  <div className="stat-card">
    <p className="card-label">{label}</p>
    <p className="card-value">{value}</p>
    {children}
  </div>
);
