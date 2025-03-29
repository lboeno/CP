import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ReadyBaskets from './pages/ReadyBaskets';
import CustomBasket from './pages/CustomBasket';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cestas-prontas" element={<ReadyBaskets />} />
            <Route path="/personalizar" element={<CustomBasket />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/carrinho" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;