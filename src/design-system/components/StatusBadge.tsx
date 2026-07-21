import type { ReactNode } from 'react';

interface StatusBadgeProps {
  tone?: 'neutral' | 'positive' | 'warning';
  children: ReactNode;
}

export const StatusBadge = ({ tone = 'neutral', children }: StatusBadgeProps) => (
  <span className={`status-badge status-badge-${tone}`}>{children}</span>
);
