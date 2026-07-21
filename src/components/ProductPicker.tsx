import { ProductRecord } from '../features/products/types';
import { toCurrency } from '../lib/state';

interface ProductPickerProps {
  products: ProductRecord[];
  onAddItem: (tableId: string, productId: string, quantity: number) => void;
  tableId: string;
}

export const ProductPicker = ({ products, onAddItem, tableId }: ProductPickerProps) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
      <div className="mb-3">
        <h2 className="text-lg font-semibold">Adicionar produto</h2>
        <p className="text-sm text-slate-400">Escolha um item do catálogo e envie para a mesa atual.</p>
      </div>

      {!tableId ? (
        <p className="rounded-xl bg-slate-800/80 px-3 py-2 text-sm text-slate-400">Selecione uma mesa aberta para registrar itens.</p>
      ) : null}

      <div className="space-y-2">
        {products.map((product) => (
          <div key={product.id} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-800/80 px-3 py-2">
            <div>
              <p className="font-medium">{product.name}</p>
              <p className="text-sm text-slate-400">{toCurrency(product.price)}</p>
            </div>
            <button
              type="button"
              disabled={!tableId}
              onClick={() => onAddItem(tableId, product.id, 1)}
              className="rounded-lg bg-violet-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              +1
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
