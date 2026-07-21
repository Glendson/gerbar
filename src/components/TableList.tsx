import { TableCard } from '../design-system/components/TableCard';
import { StatusBadge } from '../design-system/components/StatusBadge';
import { TableRecord } from '../features/tables/types';
import { toCurrency } from '../lib/state';

interface TableListProps {
  tables: TableRecord[];
  selectedTableId: string | null;
  onSelectTable: (tableId: string) => void;
}

export const TableList = ({ tables, selectedTableId, onSelectTable }: TableListProps) => {
  return (
    <div className="panel">
      <div className="panel-header">
        <div>
          <h2 className="panel-title">Mesas abertas</h2>
        </div>
        <StatusBadge>{tables.length} registros</StatusBadge>
      </div>

      <div className="space-y-2.5">
        {tables.map((table) => (
          <button
            type="button"
            key={table.id}
            onClick={() => onSelectTable(table.id)}
            className="w-full text-left"
          >
            <TableCard active={table.id === selectedTableId}>
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-base font-semibold text-slate-50">{table.customerName}</p>
                  <p className="text-xs text-slate-400">{table.status === 'open' ? 'Aberta' : 'Fechada'}</p>
                </div>
                <div className="text-right text-sm">
                  <p className="text-base font-semibold text-slate-50">{toCurrency(table.total)}</p>
                  <p className="text-xs text-slate-400">{new Date(table.openedAt).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</p>
                </div>
              </div>
            </TableCard>
          </button>
        ))}
      </div>
    </div>
  );
};
