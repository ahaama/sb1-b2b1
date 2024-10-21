import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Menu className="text-gray-600 cursor-pointer" size={24} />
          <h1 className="text-xl font-bold text-gray-800">B2B Marketplace</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Categories</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;