import type { PropsWithChildren } from 'react';

interface OpenTableModalProps extends PropsWithChildren {
  open?: boolean;
  title?: string;
}

export const OpenTableModal = ({ open = false, title = 'Abrir mesa', children }: OpenTableModalProps) => {
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
