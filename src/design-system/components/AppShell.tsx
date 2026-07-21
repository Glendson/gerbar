import type { PropsWithChildren } from 'react';

export const AppShell = ({ children }: PropsWithChildren) => (
  <div className="app-shell">
    <div className="app-frame">{children}</div>
  </div>
);
