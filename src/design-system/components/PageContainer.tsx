import type { PropsWithChildren } from 'react';

export const PageContainer = ({ children }: PropsWithChildren) => (
  <div className="page-shell">
    <div className="page-frame">{children}</div>
  </div>
);
