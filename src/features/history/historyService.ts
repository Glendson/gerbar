import type { TableRecord } from '../tables/types';

export interface HistorySummary {
  day: string;
  month: string;
  total: number;
  tables: TableRecord[];
}

const groupTablesByKey = (tables: TableRecord[], key: 'day' | 'month') => {
  const grouped = new Map<string, TableRecord[]>();

  tables.forEach((table) => {
    const sourceDate = table.closedAt ?? table.openedAt;
    const date = new Date(sourceDate);
    const bucket = key === 'day'
      ? date.toISOString().slice(0, 10)
      : date.toISOString().slice(0, 7);

    const current = grouped.get(bucket) ?? [];
    current.push(table);
    grouped.set(bucket, current);
  });

  return Array.from(grouped.entries()).map(([date, records]) => ({
    key: date,
    total: records.reduce((sum, table) => sum + (table.total ?? 0), 0),
    tables: records,
  }));
};

export const buildHistorySnapshot = (tables: TableRecord[]) => {
  const daySummary = groupTablesByKey(tables, 'day');
  const monthSummary = groupTablesByKey(tables, 'month');

  return {
    daySummary,
    monthSummary,
  };
};

export const getCurrentDayLabel = () => new Date().toISOString().slice(0, 10);
export const getCurrentMonthLabel = () => new Date().toISOString().slice(0, 7);
