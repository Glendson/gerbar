import { ProductCard } from '../design-system/components/ProductCard';
import { EmptyState } from '../design-system/components/EmptyState';
import { ProductRecord } from '../features/products/types';
import { toCurrency } from '../lib/state';

interface ProductPickerProps {
  products: ProductRecord[];
  onAddItem: (tableId: string, productId: string, quantity: number) => void;
  tableId: string;
}

export const ProductPicker = ({ products, onAddItem, tableId }: ProductPickerProps) => {
  return (
    <div className="panel">
      <div className="panel-header">
        <div>
          <h2 className="panel-title">Adicionar produto</h2>
          <p className="panel-copy">Escolha um item do catálogo e envie para a mesa atual.</p>
        </div>
      </div>

      {!tableId ? (
        <EmptyState title="Selecione uma mesa aberta" description="A seleção de itens fica disponível apenas após abrir ou escolher uma comanda ativa." />
      ) : null}

      <div className="space-y-2.5">
        {products.map((product) => (
          <ProductCard key={product.id} title={product.name} subtitle={toCurrency(product.price)}>
            <button
              type="button"
              disabled={!tableId}
              onClick={() => onAddItem(tableId, product.id, 1)}
              className="primary-button px-3 py-1.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              +1
            </button>
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
