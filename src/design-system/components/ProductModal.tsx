import type { PropsWithChildren } from 'react';

interface ProductModalProps extends PropsWithChildren {
  open?: boolean;
  title?: string;
}

export const ProductModal = ({ open = false, title = 'Produto', children }: ProductModalProps) => {
  if (!open) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
        </div>
        {children}
      </div>
    </div>
  );
};
