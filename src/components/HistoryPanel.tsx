import { buildHistorySnapshot, getCurrentDayLabel, getCurrentMonthLabel } from '../features/history/historyService';
import { TableRecord } from '../features/tables/types';
import { toCurrency } from '../lib/state';

interface HistoryPanelProps {
  history: ReturnType<typeof buildHistorySnapshot>;
}

export const HistoryPanel = ({ history }: HistoryPanelProps) => {
  const dayLabel = getCurrentDayLabel();
  const monthLabel = getCurrentMonthLabel();

  const dailyTotal = history.daySummary.find((entry) => entry.key === dayLabel)?.total ?? 0;
  const monthlyTotal = history.monthSummary.find((entry) => entry.key === monthLabel)?.total ?? 0;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
      <div className="mb-3">
        <h2 className="text-lg font-semibold">Histórico</h2>
        <p className="text-sm text-slate-400">Visão diária e mensal para o dia atual.</p>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-xl bg-slate-800/80 p-3">
          <p className="text-sm text-slate-400">Dia</p>
          <p className="text-lg font-semibold">{toCurrency(dailyTotal)}</p>
        </div>
        <div className="rounded-xl bg-slate-800/80 p-3">
          <p className="text-sm text-slate-400">Mês</p>
          <p className="text-lg font-semibold">{toCurrency(monthlyTotal)}</p>
        </div>
      </div>
    </div>
  );
};
