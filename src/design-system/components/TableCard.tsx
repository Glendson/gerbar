import type { PropsWithChildren } from 'react';

interface TableCardProps extends PropsWithChildren {
  active?: boolean;
}

export const TableCard = ({ active = false, children }: TableCardProps) => (
  <div className={`table-card ${active ? 'table-card-active' : ''}`}>{children}</div>
);
