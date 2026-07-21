import { FormEvent, useState } from 'react';

interface TableFormProps {
  onOpenTable: (customerName: string) => void;
}

export const TableForm = ({ onOpenTable }: TableFormProps) => {
  const [customerName, setCustomerName] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cleanedName = customerName.trim();
    if (!cleanedName) {
      return;
    }

    onOpenTable(cleanedName);
    setCustomerName('');
  };

  return (
    <form onSubmit={handleSubmit} className="panel">
      <div className="panel-header">
        <div>
          <h2 className="panel-title">Abrir mesa</h2>
          <p className="panel-copy">Digite o nome do cliente para criar a comanda.</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-end">
        <label className="flex-1">
          <span className="field-label">Nome do cliente</span>
          <input
            value={customerName}
            onChange={(event) => setCustomerName(event.target.value)}
            className="field-input"
            placeholder="Ex.: Maria Silva"
          />
        </label>
        <button type="submit" className="primary-button md:min-w-[180px]">
          Abrir mesa
        </button>
      </div>
    </form>
  );
};
