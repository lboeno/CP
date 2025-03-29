import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre Nós</h3>
            <p className="text-gray-400">
              Especialistas em criar momentos especiais através de cestas personalizadas para todas as ocasiões.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/cestas-prontas" className="text-gray-400 hover:text-white">
                  Cestas Prontas
                </Link>
              </li>
              <li>
                <Link to="/personalizar" className="text-gray-400 hover:text-white">
                  Personalizar Cesta
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-gray-400 hover:text-white">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-white">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Políticas</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/politica-privacidade" className="text-gray-400 hover:text-white">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-condicoes" className="text-gray-400 hover:text-white">
                  Termos e Condições
                </Link>
              </li>
              <li>
                <Link to="/politica-troca" className="text-gray-400 hover:text-white">
                  Política de Troca
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Cestas Especiais. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;