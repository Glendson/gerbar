import { ProductRecord } from '../features/products/types';
import { TableRecord } from '../features/tables/types';
import { getProductName, getTableItemSubtotal, toCurrency } from '../lib/state';

interface TableDetailProps {
  table: TableRecord | null;
  products: ProductRecord[];
  onUpdateItem: (
    tableId: string,
    itemId: string,
    updater: (item: TableRecord['items'][number]) => TableRecord['items'][number],
  ) => void;
  onToggleClosed: (tableId: string) => void;
}

export const TableDetail = ({ table, products, onUpdateItem, onToggleClosed }: TableDetailProps) => {
  if (!table) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4 text-slate-400">
        Abra uma mesa para começar a comanda.
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-violet-300">Mesa selecionada</p>
          <h2 className="text-xl font-semibold">{table.customerName}</h2>
        </div>
        <button
          type="button"
          onClick={() => onToggleClosed(table.id)}
          className="rounded-lg bg-slate-800 px-3 py-2 text-sm font-medium text-slate-100"
        >
          {table.status === 'open' ? 'Fechar mesa' : 'Reabrir mesa'}
        </button>
      </div>

      <div className="mb-3 rounded-xl bg-slate-800/80 p-3">
        <p className="text-sm text-slate-300">Status: {table.status === 'open' ? 'Aberta' : 'Fechada'}</p>
        <p className="text-sm text-slate-300">Total atual: {toCurrency(table.total)}</p>
      </div>

      <div className="space-y-2">
        {table.items.map((item) => (
          <div key={item.id} className="rounded-xl border border-slate-800 bg-slate-800/80 p-3">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="font-medium">{getProductName(item.productId, products)}</p>
                <p className="text-xs text-slate-400">{toCurrency(item.unitPrice)} · {item.quantity} unidade(s)</p>
              </div>
              <p className="font-semibold">{toCurrency(getTableItemSubtotal(item))}</p>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => onUpdateItem(table.id, item.id, (current) => ({ ...current, quantity: Math.max(1, current.quantity - 1) }))}
                className="rounded-lg bg-slate-700 px-2.5 py-1 text-sm"
              >
                -
              </button>
              <button
                type="button"
                onClick={() => onUpdateItem(table.id, item.id, (current) => ({ ...current, quantity: current.quantity + 1 }))}
                className="rounded-lg bg-slate-700 px-2.5 py-1 text-sm"
              >
                +
              </button>
              <button
                type="button"
                onClick={() => onUpdateItem(table.id, item.id, (current) => ({ ...current, paid: !current.paid }))}
                className="rounded-lg bg-emerald-500 px-3 py-1 text-sm font-medium text-slate-950"
              >
                {item.paid ? 'Marcar pendente' : 'Marcar pago'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
