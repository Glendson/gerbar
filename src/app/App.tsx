import { useEffect, useMemo, useState } from 'react';
import { Header } from '../design-system/components/Header';
import { AppShell } from '../design-system/components/AppShell';
import { PageContainer } from '../design-system/components/PageContainer';
import { StatusBadge } from '../design-system/components/StatusBadge';
import { TableForm } from '../components/TableForm';
import { TableList } from '../components/TableList';
import { ProductForm } from '../components/ProductForm';
import { ProductPicker } from '../components/ProductPicker';
import { TableDetail } from '../components/TableDetail';
import { HistoryPanel } from '../components/HistoryPanel';
import { ProductRecord } from '../features/products/types';
import { TableRecord } from '../features/tables/types';
import { buildHistorySnapshot } from '../features/history/historyService';
import { createId, getTableTotal, normalizeTables } from '../lib/state';
import { ensureStorageDefaults, loadProducts, loadTables, saveProducts, saveTables } from '../lib/storage';

const defaultProducts: ProductRecord[] = [
  { id: createId('prod'), name: 'Coca-Cola 350ml', price: 9.5, createdAt: new Date().toISOString(), isActive: true },
  { id: createId('prod'), name: 'Açaí 500ml', price: 18, createdAt: new Date().toISOString(), isActive: true },
  { id: createId('prod'), name: 'Batata Frita', price: 24, createdAt: new Date().toISOString(), isActive: true },
];

const App = () => {
  const [products, setProducts] = useState<ProductRecord[]>(() => {
    ensureStorageDefaults();
    const stored = loadProducts();
    return stored.length > 0 ? stored : defaultProducts;
  });
  const [tables, setTables] = useState<TableRecord[]>(() => normalizeTables(loadTables()));
  const [selectedTableId, setSelectedTableId] = useState<string | null>(null);

  useEffect(() => {
    saveProducts(products);
  }, [products]);

  useEffect(() => {
    saveTables(normalizeTables(tables));
  }, [tables]);

  const history = useMemo(() => buildHistorySnapshot(tables), [tables]);

  const openTable = (customerName: string) => {
    const now = new Date().toISOString();
    const table: TableRecord = {
      id: createId('table'),
      customerName,
      status: 'open',
      openedAt: now,
      closedAt: null,
      items: [],
      total: 0,
    };

    setTables((current) => [table, ...current]);
  };

  const addItem = (tableId: string, productId: string, quantity: number) => {
    const product = products.find((entry) => entry.id === productId);
    if (!product) {
      return;
    }

    setTables((current) =>
      current.map((table) => {
        if (table.id !== tableId) {
          return table;
        }

        const nextItem = {
          id: createId('item'),
          productId,
          quantity,
          unitPrice: product.price,
          paid: false,
          createdAt: new Date().toISOString(),
        };

        const nextTable = {
          ...table,
          items: [...table.items, nextItem],
        };

        return {
          ...nextTable,
          total: getTableTotal(nextTable),
        };
      }),
    );
  };

  const updateItem = (tableId: string, itemId: string, updater: (item: TableRecord['items'][number]) => TableRecord['items'][number]) => {
    setTables((current) =>
      current.map((table) => {
        if (table.id !== tableId) {
          return table;
        }

        const items = table.items.map((item) => (item.id === itemId ? updater(item) : item));
        const nextTable = { ...table, items };
        return { ...nextTable, total: getTableTotal(nextTable) };
      }),
    );
  };

  const toggleClosed = (tableId: string) => {
    setTables((current) =>
      current.map((table) => {
        if (table.id !== tableId) {
          return table;
        }

        const nextStatus = table.status === 'open' ? 'closed' : 'open';
        return {
          ...table,
          status: nextStatus,
          closedAt: nextStatus === 'closed' ? new Date().toISOString() : null,
        };
      }),
    );
  };

  const registerProduct = (name: string, price: number) => {
    const product: ProductRecord = {
      id: createId('prod'),
      name,
      price,
      createdAt: new Date().toISOString(),
      isActive: true,
    };

    setProducts((current) => [...current, product]);
  };

  const activeTable =
    tables.find((table) => table.id === selectedTableId) ??
    tables.find((table) => table.status === 'open') ??
    tables[0] ??
    null;

  useEffect(() => {
    if (activeTable && selectedTableId !== activeTable.id) {
      setSelectedTableId(activeTable.id);
    }
  }, [activeTable, selectedTableId]);

  return (
    <AppShell>
      <PageContainer>
        <Header eyebrow="Gerbar" title="Controle de consumo de mesas">
          <StatusBadge tone="positive">Hoje: {new Date().toLocaleDateString('pt-BR')}</StatusBadge>
        </Header>

        <div className="app-grid">
          <section className="stack-column">
            <TableForm onOpenTable={openTable} />
            <TableList
              tables={tables}
              selectedTableId={activeTable?.id ?? null}
              onSelectTable={setSelectedTableId}
            />
            <ProductForm onRegisterProduct={registerProduct} />
            <HistoryPanel history={history} />
          </section>

          <section className="stack-column">
            <ProductPicker products={products} onAddItem={addItem} tableId={activeTable?.id ?? ''} />
            <TableDetail
              table={activeTable}
              products={products}
              onUpdateItem={updateItem}
              onToggleClosed={toggleClosed}
            />
          </section>
        </div>

        <footer className="app-footer">
          Persistência local em navegador · sem backend nesta versão
        </footer>
      </PageContainer>
    </AppShell>
  );
};

export default App;
