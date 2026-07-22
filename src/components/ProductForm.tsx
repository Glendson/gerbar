import { useState } from 'react';

interface ProductFormProps {
  onRegisterProduct: (name: string, price: number) => void;
}

export const ProductForm = ({ onRegisterProduct }: ProductFormProps) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedPrice = parseFloat(price.replace(',', '.'));
    if (!name.trim() || isNaN(parsedPrice) || parsedPrice <= 0) return;

    onRegisterProduct(name.trim(), parsedPrice);
    setName('');
    setPrice('');
  };

  return (
    <div className="panel">
      <div className="panel-header">
        <div>
          <span className="panel-kicker">Cardápio</span>
          <h2 className="panel-title">Cadastrar Produto</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <div className="sm:col-span-2">
            <label className="field-label">Item</label>
            <input
              type="text"
              placeholder="Ex: Cerpa 350ml"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="field-input"
            />
          </div>
          <div>
            <label className="field-label">Preço (€)</label>
            <input
              type="text"
              placeholder="0,00"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="field-input"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={!name.trim() || !price}
          className="secondary-button w-full"
        >
          + Salvar Produto
        </button>
      </form>
    </div>
  );
};