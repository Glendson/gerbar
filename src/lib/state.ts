import type { ProductRecord } from '../features/products/types';
import type { TableItem, TableRecord } from '../features/tables/types';

export const createId = (prefix: string) =>
  `${prefix}-${Math.random().toString(36).slice(2, 10)}-${Date.now().toString(36)}`;

export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const toCurrency = (value: number) => currencyFormatter.format(value);

export const getProductName = (productId: string, products: ProductRecord[]) => {
  const product = products.find((entry) => entry.id === productId);
  return product?.name ?? 'Produto removido';
};

export const getTableItemSubtotal = (item: TableItem) => item.quantity * item.unitPrice;

export const getTableTotal = (table: TableRecord) =>
  table.items.reduce((sum, item) => sum + getTableItemSubtotal(item), 0);

export const normalizeTable = (table: TableRecord): TableRecord => ({
  ...table,
  items: table.items.map((item) => ({ ...item })),
  total: getTableTotal(table),
});

export const normalizeTables = (tables: TableRecord[]) => tables.map((table) => normalizeTable(table));
