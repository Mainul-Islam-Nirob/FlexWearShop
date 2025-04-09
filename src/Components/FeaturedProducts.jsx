import React, { useMemo } from 'react';
import products from '../Products/Products.js';
import { Link } from 'react-router-dom';

function getUniqueCategoryProducts(data) {
  const categories = new Set();
  const result = [];
  const shuffled = [...data].sort(() => 0.5 - Math.random());

  for (let item of shuffled) {
    if (!categories.has(item.category)) {
      categories.add(item.category);
      result.push(item);
    }
    if (result.length === 6) break;
  }

  return result;
}

function FeaturedProducts() {
  const featured = useMemo(() => getUniqueCategoryProducts(products), []);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Featured Items
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-100 shadow-xl rounded-3xl overflow-hidden transform hover:scale-[1.03] transition duration-300 group"
            >
              <Link to={`/product/${product.id}`}>
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </Link>
              <div className="p-6">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-gray-500 text-sm mb-3 h-12 overflow-hidden">
                  {product.description}
                </p>
                <div className="text-lg font-bold text-gray-900 mb-4">৳ {product.price}</div>
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
