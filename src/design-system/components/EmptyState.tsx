import type { PropsWithChildren } from 'react';

interface EmptyStateProps extends PropsWithChildren {
  title: string;
  description?: string;
}

export const EmptyState = ({ title, description, children }: EmptyStateProps) => (
  <div className="empty-state">
    <h3 className="empty-title">{title}</h3>
    {description ? <p className="empty-description">{description}</p> : null}
    {children}
  </div>
);
