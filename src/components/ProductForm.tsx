import { FormEvent, useState } from 'react';

interface ProductFormProps {
  onRegisterProduct: (name: string, price: number) => void;
}

export const ProductForm = ({ onRegisterProduct }: ProductFormProps) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cleanedName = name.trim();
    const parsedPrice = Number(price);

    if (!cleanedName || Number.isNaN(parsedPrice) || parsedPrice <= 0) {
      return;
    }

    onRegisterProduct(cleanedName, parsedPrice);
    setName('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} className="panel">
      <div className="panel-header">
        <div>
          <h2 className="panel-title">Cadastrar produto</h2>
          <p className="panel-copy">Registre o item para usá-lo em qualquer mesa.</p>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <label>
          <span className="field-label">Nome</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="field-input"
            placeholder="Ex.: Feijoada"
          />
        </label>
        <label>
          <span className="field-label">Preço</span>
          <input
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            type="number"
            step="0.01"
            min="0"
            className="field-input"
            placeholder="0.00"
          />
        </label>
      </div>

      <button type="submit" className="primary-button mt-3 w-full md:w-auto">
        Salvar produto
      </button>
    </form>
  );
};
