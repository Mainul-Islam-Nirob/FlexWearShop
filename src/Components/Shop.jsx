import React, { useState, useMemo } from "react";
import products from "../Products/Products.js";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function Shop() {
  const shuffledProducts = useMemo(() => shuffleArray(products), []);
  const [visibleCount, setVisibleCount] = useState(20);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 20);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">
          Our Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {shuffledProducts.slice(0, visibleCount).map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:scale-101 transition-transform duration-300"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover object-center"
                />
              </Link>

              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-xl font-semibold text-gray-800 truncate hover:text-blue-600 transition">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-gray-500 text-sm mt-1">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-lg font-bold text-gray-900">
                    ৳ {product.price}
                  </p>
                  <button className="bg-blue-500 text-white py-1.5 px-4 cursor-pointer rounded-full hover:bg-blue-600 transition-colors duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < shuffledProducts.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={handleLoadMore}
              className="bg-gray-800 text-white py-2 px-6 rounded-full hover:bg-gray-900 transition-colors cursor-pointer"
            >
              Load More
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Shop;
