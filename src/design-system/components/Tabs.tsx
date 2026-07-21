import type { PropsWithChildren, ReactNode } from 'react';

interface TabsProps {
  children: ReactNode;
}

export const Tabs = ({ children }: TabsProps) => <div className="tabs-shell">{children}</div>;

interface TabProps extends PropsWithChildren {
  active?: boolean;
}

export const Tab = ({ active = false, children }: TabProps) => (
  <button type="button" className={`tab-button ${active ? 'tab-button-active' : ''}`}>
    {children}
  </button>
);
