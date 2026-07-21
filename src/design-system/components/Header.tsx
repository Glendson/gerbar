import type { PropsWithChildren } from 'react';

interface HeaderProps extends PropsWithChildren {
  eyebrow?: string;
  title: string;
}

export const Header = ({ eyebrow, title, children }: HeaderProps) => (
  <header className="app-header">
    <div className="header-row">
      <div className="header-copy">
        {eyebrow ? <p className="panel-kicker">{eyebrow}</p> : null}
        <h1 className="heading-title">{title}</h1>
      </div>
      {children ? <div className="status-pill-wrap">{children}</div> : null}
    </div>
  </header>
);
