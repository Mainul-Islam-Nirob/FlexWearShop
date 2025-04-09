import React from 'react';
import products from '../Products/Products.js';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import {Link} from 'react-router-dom';

function Shop() {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">Our Collection</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <Link to={`/product/${product.id}`} key={product.id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:scale-101 transition-shadow duration-300 cursor-pointer"
          >
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-64 object-cover object-center"
            />
            
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 truncate">{product.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{product.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-bold text-gray-900">৳ {product.price}</p>
                <button className="bg-blue-500 text-white py-1.5 px-4 cursor-pointer rounded-full hover:bg-blue-600 transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Shop;
