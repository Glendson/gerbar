import type { ProductRecord } from '../features/products/types';
import type { TableRecord } from '../features/tables/types';

const PRODUCT_KEY = 'gerbar.products';
const TABLE_KEY = 'gerbar.tables';
const HISTORY_KEY = 'gerbar.history';

const parseJson = <T>(value: string | null, fallback: T): T => {
  if (!value) {
    return fallback;
  }

  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
};

export const loadProducts = (): ProductRecord[] =>
  parseJson<ProductRecord[]>(localStorage.getItem(PRODUCT_KEY), []);

export const saveProducts = (products: ProductRecord[]) => {
  localStorage.setItem(PRODUCT_KEY, JSON.stringify(products));
};

export const loadTables = (): TableRecord[] =>
  parseJson<TableRecord[]>(localStorage.getItem(TABLE_KEY), []);

export const saveTables = (tables: TableRecord[]) => {
  localStorage.setItem(TABLE_KEY, JSON.stringify(tables));
};

export const loadHistory = () => parseJson<Record<string, unknown>>(localStorage.getItem(HISTORY_KEY), {});

export const saveHistory = (history: Record<string, unknown>) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
};

export const ensureStorageDefaults = () => {
  if (!localStorage.getItem(PRODUCT_KEY)) {
    saveProducts([]);
  }

  if (!localStorage.getItem(TABLE_KEY)) {
    saveTables([]);
  }

  if (!localStorage.getItem(HISTORY_KEY)) {
    saveHistory({});
  }
};
