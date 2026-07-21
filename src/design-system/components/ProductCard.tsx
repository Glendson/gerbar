import type { PropsWithChildren } from 'react';

interface ProductCardProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
}

export const ProductCard = ({ title, subtitle, children }: ProductCardProps) => (
  <div className="product-card">
    <div>
      <p className="product-card-title">{title}</p>
      {subtitle ? <p className="product-card-subtitle">{subtitle}</p> : null}
    </div>
    {children}
  </div>
);
