import React, { useState } from 'react';
import { Search, ShoppingCart, Menu } from 'lucide-react';
import ProductList from './components/ProductList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Marketplace Exchange</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products or services..."
                className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>
        <ProductList searchTerm={searchTerm} />
      </main>
      <Footer />
    </div>
  );
}

export default App;