import { ProductRecord } from '../features/products/types';

interface ProductPickerProps {
  products: ProductRecord[];
  tableId: string;
  onAddItem: (tableId: string, productId: string, quantity: number) => void;
}

export const ProductPicker = ({ products, tableId, onAddItem }: ProductPickerProps) => {
  return (
    <div className="panel">
      <div className="panel-header">
        <div>
          <span className="panel-kicker">Lançamento Rápido</span>
          <h2 className="panel-title">Adicionar Produto</h2>
        </div>
      </div>

      {!tableId ? (
        <p className="text-sm text-[#9B97A8] font-semibold">
          Selecione uma mesa aberta para adicionar itens.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
          {products
            .filter((p) => p.isActive)
            .map((product) => (
              <button
                key={product.id}
                onClick={() => onAddItem(tableId, product.id, 1)}
                className="flex flex-col justify-between p-3 rounded-xl border border-[#2E2E3E] bg-[#242430] hover:bg-[#2C2C3A] hover:border-amber-500/50 transition-all active:scale-95 text-left h-[85px] cursor-pointer group"
              >
                <span className="text-xs font-bold text-[#EDE9E3] line-clamp-2 leading-snug group-hover:text-amber-300">
                  {product.name}
                </span>
                <span className="text-sm font-black text-amber-400">
                  € {product.price.toFixed(2)}
                </span>
              </button>
            ))}
        </div>
      )}
    </div>
  );
};