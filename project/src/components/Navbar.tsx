import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Gift } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Gift className="h-8 w-8 text-rose-500" />
            <span className="ml-2 text-xl font-semibold">Cestas Especiais</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/cestas-prontas" className="text-gray-700 hover:text-rose-500">
              Cestas Prontas
            </Link>
            <Link to="/personalizar" className="text-gray-700 hover:text-rose-500">
              Personalizar
            </Link>
            <Link to="/produtos" className="text-gray-700 hover:text-rose-500">
              Produtos
            </Link>
            <Link to="/contato" className="text-gray-700 hover:text-rose-500">
              Contato
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-rose-500">
              <Search className="h-6 w-6" />
            </button>
            <Link to="/carrinho" className="text-gray-700 hover:text-rose-500">
              <ShoppingCart className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;