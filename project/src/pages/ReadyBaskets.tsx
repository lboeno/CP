import React, { useState } from 'react';
import { ShoppingCart, Filter, Heart } from 'lucide-react';

interface Basket {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const baskets: Basket[] = [
  {
    id: 1,
    name: "Cesta Café da Manhã Premium",
    description: "Café gourmet, biscoitos artesanais, geleias especiais e frutas secas selecionadas",
    price: 299.90,
    image: "https://images.unsplash.com/photo-1612006564326-4f4cbf3c5122?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Café da Manhã"
  },
  {
    id: 2,
    name: "Cesta Chocolates Luxo",
    description: "Seleção especial de chocolates finos, trufas e bombons artesanais",
    price: 259.90,
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Chocolates"
  },
  {
    id: 3,
    name: "Cesta Vinhos & Queijos",
    description: "Vinhos selecionados, queijos finos, antepastos e frutas secas",
    price: 459.90,
    image: "https://images.unsplash.com/photo-1615887087343-6a32f45f27a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Vinhos"
  },
  {
    id: 4,
    name: "Cesta Bem-Estar",
    description: "Chás especiais, mel orgânico, biscoitos integrais e nuts premium",
    price: 199.90,
    image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Bem-Estar"
  },
  {
    id: 5,
    name: "Cesta Aniversário Especial",
    description: "Espumante, chocolates, snacks gourmet e decorações festivas",
    price: 349.90,
    image: "https://images.unsplash.com/photo-1549312371-07ca10d10e73?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Ocasiões Especiais"
  },
  {
    id: 6,
    name: "Cesta Gourmet Premium",
    description: "Produtos gourmet selecionados, temperos especiais e delicatessen",
    price: 399.90,
    image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Gourmet"
  }
];

const categories = [...new Set(baskets.map(basket => basket.category))];
const priceRanges = [
  { label: 'Até R$ 200', min: 0, max: 200 },
  { label: 'R$ 200 - R$ 300', min: 200, max: 300 },
  { label: 'R$ 300 - R$ 400', min: 300, max: 400 },
  { label: 'Acima de R$ 400', min: 400, max: Infinity }
];

const ReadyBaskets = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedPriceRange, setSelectedPriceRange] = useState<{ min: number; max: number } | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredBaskets = baskets.filter(basket => {
    const matchesCategory = !selectedCategory || basket.category === selectedCategory;
    const matchesPrice = !selectedPriceRange || 
      (basket.price >= selectedPriceRange.min && basket.price <= selectedPriceRange.max);
    return matchesCategory && matchesPrice;
  });

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Cestas Prontas</h1>
        <div className="mt-4 md:mt-0 flex items-center space-x-4">
          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded-lg py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-rose-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Todas as Categorias</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded-lg py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-rose-500"
              value={selectedPriceRange ? `${selectedPriceRange.min}-${selectedPriceRange.max}` : ''}
              onChange={(e) => {
                const [min, max] = e.target.value.split('-').map(Number);
                setSelectedPriceRange(e.target.value ? { min, max } : null);
              }}
            >
              <option value="">Faixa de Preço</option>
              {priceRanges.map(range => (
                <option key={range.label} value={`${range.min}-${range.max}`}>{range.label}</option>
              ))}
            </select>
            <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredBaskets.map(basket => (
          <div key={basket.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img
                src={basket.image}
                alt={basket.name}
                className="w-full h-48 object-cover"
              />
              <button
                onClick={() => toggleFavorite(basket.id)}
                className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-200"
              >
                <Heart
                  className={`h-5 w-5 ${
                    favorites.includes(basket.id) ? 'text-rose-500 fill-current' : 'text-gray-400'
                  }`}
                />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{basket.name}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {basket.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-rose-500 font-bold text-lg">
                  {formatPrice(basket.price)}
                </span>
                <button className="flex items-center space-x-2 bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition-colors duration-200">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Comprar</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredBaskets.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            Nenhuma cesta encontrada com os filtros selecionados.
          </p>
        </div>
      )}
    </div>
  );
};

export default ReadyBaskets;