import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Industrial Machinery",
    description: "High-quality industrial machinery for manufacturing",
    price: 15000,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    name: "Office Furniture Set",
    description: "Complete office furniture set for modern workspaces",
    price: 2500,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    name: "IT Consulting Services",
    description: "Professional IT consulting for businesses",
    price: 5000,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 4,
    name: "Eco-friendly Packaging",
    description: "Sustainable packaging solutions for various industries",
    price: 1000,
    image: "https://images.unsplash.com/photo-1589723935076-6d8fb9a94f18?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
];

interface ProductListProps {
  searchTerm: string;
}

const ProductList: React.FC<ProductListProps> = ({ searchTerm }) => {
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;