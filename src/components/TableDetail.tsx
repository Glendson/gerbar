import { EmptyState } from '../design-system/components/EmptyState';
import { StatusBadge } from '../design-system/components/StatusBadge';
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
      <div className="panel">
        <EmptyState title="Abra uma mesa para começar" description="A comanda ativa aparece aqui com itens, preços e ações de fechamento." />
      </div>
    );
  }

  return (
    <div className="panel">
      <div className="panel-header">
        <div>
          <p className="panel-kicker">Mesa selecionada</p>
          <h2 className="panel-title">{table.customerName}</h2>
        </div>
        <button type="button" onClick={() => onToggleClosed(table.id)} className="secondary-button">
          {table.status === 'open' ? 'Fechar mesa' : 'Reabrir mesa'}
        </button>
      </div>

      <div className="surface-tile mb-3">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge tone={table.status === 'open' ? 'positive' : 'warning'}>{table.status === 'open' ? 'Aberta' : 'Fechada'}</StatusBadge>
          <span className="text-sm text-slate-300">Total atual: {toCurrency(table.total)}</span>
        </div>
      </div>

      <div className="space-y-2.5">
        {table.items.map((item) => (
          <div key={item.id} className="surface-tile">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-base font-semibold text-slate-50">{getProductName(item.productId, products)}</p>
                <p className="text-xs text-slate-400">{toCurrency(item.unitPrice)} · {item.quantity} unidade(s)</p>
              </div>
              <p className="text-base font-semibold text-slate-50">{toCurrency(getTableItemSubtotal(item))}</p>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => onUpdateItem(table.id, item.id, (current) => ({ ...current, quantity: Math.max(1, current.quantity - 1) }))}
                className="secondary-button px-2.5 py-1"
              >
                -
              </button>
              <button
                type="button"
                onClick={() => onUpdateItem(table.id, item.id, (current) => ({ ...current, quantity: current.quantity + 1 }))}
                className="secondary-button px-2.5 py-1"
              >
                +
              </button>
              <button
                type="button"
                onClick={() => onUpdateItem(table.id, item.id, (current) => ({ ...current, paid: !current.paid }))}
                className="rounded-2xl bg-emerald-500 px-3 py-1 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
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
