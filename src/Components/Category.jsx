import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../Products/Products';
import Navbar from './Navbar';
import Footer from './Footer';

function Category() {
  const { categoryName } = useParams();

  const categoryProducts = products.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 capitalize text-center">
        {categoryName} Collection
      </h2>

      {categoryProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-md transition group"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition mb-1">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm text-gray-500 mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">৳ {product.price}</span>
                  <button
                    // onClick={() => addToCart(product)}
                    className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600 transition cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer />
    </>
  );
}

export default Category;
