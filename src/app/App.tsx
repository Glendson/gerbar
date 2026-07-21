import { useEffect, useMemo, useState } from 'react';
import { TableForm } from '../components/TableForm';
import { TableList } from '../components/TableList';
import { ProductForm } from '../components/ProductForm';
import { ProductPicker } from '../components/ProductPicker';
import { TableDetail } from '../components/TableDetail';
import { HistoryPanel } from '../components/HistoryPanel';
import { ProductRecord } from '../features/products/types';
import { TableRecord } from '../features/tables/types';
import { buildHistorySnapshot } from '../features/history/historyService';
import { createId, getTableTotal, normalizeTables, toCurrency } from '../lib/state';
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
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl p-4 md:p-6">
        <header className="mb-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-lg">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Gerbar</p>
              <h1 className="text-2xl font-semibold">Controle de consumo de mesas</h1>
            </div>
            <div className="rounded-xl bg-slate-800 px-3 py-2 text-sm text-slate-300">
              Hoje: {new Date().toLocaleDateString('pt-BR')}
            </div>
          </div>
        </header>

        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="space-y-4">
            <TableForm onOpenTable={openTable} />
            <TableList
              tables={tables}
              selectedTableId={activeTable?.id ?? null}
              onSelectTable={setSelectedTableId}
            />
            <ProductForm onRegisterProduct={registerProduct} />
            <HistoryPanel history={history} />
          </section>

          <section className="space-y-4">
            <ProductPicker products={products} onAddItem={addItem} tableId={activeTable?.id ?? ''} />
            <TableDetail
              table={activeTable}
              products={products}
              onUpdateItem={updateItem}
              onToggleClosed={toggleClosed}
            />
          </section>
        </div>

        <footer className="mt-4 text-center text-xs text-slate-400">
          Persistência local em navegador · sem backend nesta versão
        </footer>
      </div>
    </div>
  );
};

export default App;
