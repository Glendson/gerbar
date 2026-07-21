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
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
      <div className="mb-3">
        <h2 className="text-lg font-semibold">Abrir mesa</h2>
        <p className="text-sm text-slate-400">Digite o nome do cliente para criar a comanda.</p>
      </div>

      <div className="flex flex-col gap-3 md:flex-row">
        <label className="flex-1">
          <span className="mb-1 block text-sm text-slate-300">Nome do cliente</span>
          <input
            value={customerName}
            onChange={(event) => setCustomerName(event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-slate-50 outline-none focus:border-violet-400"
            placeholder="Ex.: Maria Silva"
          />
        </label>
        <button
          type="submit"
          className="rounded-xl bg-violet-500 px-4 py-2 font-medium text-white transition hover:bg-violet-400"
        >
          Abrir mesa
        </button>
      </div>
    </form>
  );
};
