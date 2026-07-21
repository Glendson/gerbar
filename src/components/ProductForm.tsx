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
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
      <div className="mb-3">
        <h2 className="text-lg font-semibold">Cadastrar produto</h2>
        <p className="text-sm text-slate-400">Registre o item para usá-lo em qualquer mesa.</p>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <label>
          <span className="mb-1 block text-sm text-slate-300">Nome</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 outline-none focus:border-violet-400"
            placeholder="Ex.: Feijoada"
          />
        </label>
        <label>
          <span className="mb-1 block text-sm text-slate-300">Preço</span>
          <input
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            type="number"
            step="0.01"
            min="0"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 outline-none focus:border-violet-400"
            placeholder="0.00"
          />
        </label>
      </div>

      <button type="submit" className="mt-3 rounded-xl bg-emerald-500 px-4 py-2 font-medium text-slate-950 transition hover:bg-emerald-400">
        Salvar produto
      </button>
    </form>
  );
};
