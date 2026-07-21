import { TableRecord } from '../features/tables/types';
import { toCurrency } from '../lib/state';

interface TableListProps {
  tables: TableRecord[];
  selectedTableId: string | null;
  onSelectTable: (tableId: string) => void;
}

export const TableList = ({ tables, selectedTableId, onSelectTable }: TableListProps) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Mesas abertas</h2>
        <span className="text-sm text-slate-400">{tables.length} registros</span>
      </div>

      <div className="space-y-2">
        {tables.map((table) => (
          <button
            type="button"
            key={table.id}
            onClick={() => onSelectTable(table.id)}
            className={`w-full rounded-xl border px-3 py-2 text-left ${table.id === selectedTableId ? 'border-violet-400 bg-slate-800' : 'border-slate-800 bg-slate-800/60'}`}
          >
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="font-medium">{table.customerName}</p>
                <p className="text-xs text-slate-400">{table.status === 'open' ? 'Aberta' : 'Fechada'}</p>
              </div>
              <div className="text-right text-sm">
                <p className="font-semibold">{toCurrency(table.total)}</p>
                <p className="text-xs text-slate-400">{new Date(table.openedAt).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
