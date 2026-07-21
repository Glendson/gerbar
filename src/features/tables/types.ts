export type TableStatus = 'open' | 'closed';

export interface TableItem {
  id: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  paid: boolean;
  createdAt: string;
}

export interface TableRecord {
  id: string;
  customerName: string;
  status: TableStatus;
  openedAt: string;
  closedAt: string | null;
  items: TableItem[];
  total: number;
}
