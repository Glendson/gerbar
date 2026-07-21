import { StatCard } from '../design-system/components/StatCard';
import { buildHistorySnapshot, getCurrentDayLabel, getCurrentMonthLabel } from '../features/history/historyService';
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
    <div className="panel">
      <div className="panel-header">
        <div>
          <h2 className="panel-title">Histórico</h2>
          <p className="panel-copy">Visão diária e mensal para o dia atual.</p>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <StatCard label="Dia" value={toCurrency(dailyTotal)} />
        <StatCard label="Mês" value={toCurrency(monthlyTotal)} />
      </div>
    </div>
  );
};
