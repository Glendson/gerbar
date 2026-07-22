import { useState } from 'react';

interface TableFormProps {
  onOpenTable: (customerName: string) => void;
}

export const TableForm = ({ onOpenTable }: TableFormProps) => {
  const [customerName, setCustomerName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim()) return;
    onOpenTable(customerName.trim());
    setCustomerName('');
  };

  return (
    <div className="panel">
      <div className="panel-header">
        <div>
          <span className="panel-kicker">Mesa / Comanda</span>
          <h2 className="panel-title">Abrir Nova Mesa</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
          <label className="field-label">Nome do Cliente / Mesa</label>
          <input
            type="text"
            placeholder="Ex: João Silva ou Mesa 05"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="field-input"
          />
        </div>
        <button
          type="submit"
          disabled={!customerName.trim()}
          className="primary-button"
        >
          + Abrir Mesa
        </button>
      </form>
    </div>
  );
};