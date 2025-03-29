import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Package, Star } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1607344645866-009c320b63e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">
              Presentes Personalizados com Toque Especial
            </h1>
            <p className="text-xl mb-8">
              Monte sua cesta ou escolha uma pronta!
            </p>
            <div className="space-x-4">
              <Link
                to="/cestas-prontas"
                className="bg-rose-500 text-white px-8 py-3 rounded-lg hover:bg-rose-600 transition"
              >
                Ver Cestas Prontas
              </Link>
              <Link
                to="/personalizar"
                className="bg-white text-rose-500 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
              >
                Personalizar Agora
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Truck className="h-12 w-12 text-rose-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Frete Grátis</h3>
              <p className="text-gray-600">Para compras acima de R$ 299</p>
            </div>
            <div className="text-center">
              <Package className="h-12 w-12 text-rose-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Embalagem Premium</h3>
              <p className="text-gray-600">Cuidado em cada detalhe</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-rose-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Presentes Memoráveis</h3>
              <p className="text-gray-600">Momentos únicos e especiais</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Baskets */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Cestas em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Example Featured Basket */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1612006564326-4f4cbf3c5122?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Cesta Café da Manhã"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Cesta Café da Manhã Premium</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Café gourmet, biscoitos artesanais e frutas secas
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-rose-500 font-bold">R$ 299,90</span>
                  <button className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600 transition">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
            {/* Add more featured baskets here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;