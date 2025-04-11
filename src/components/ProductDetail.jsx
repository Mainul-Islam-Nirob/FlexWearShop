import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../Products/Products";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useCart } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const {addToCart} = useCart();
  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  if (!product) {
    return (
      <div className="text-center mt-20 text-lg text-red-500">
        Product not found
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <main className="flex-grow flex items-center justify-center bg-gray-50 px-4 py-4">
        <div className="max-w-5xl w-full bg-white rounded-2xl shadow-md flex flex-col md:flex-row gap-6 p-6 md:p-8">
          {/* Product Image */}
          <div className="md:w-1/2 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-[300px] rounded-xl object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <p className="text-sm text-gray-500">
              Category: {product.category}
            </p>
            <p className="text-xl font-semibold text-blue-600">
              ৳ {product.price}
            </p>

            <div className="flex-row place-items-center sm:flex-row gap-6">
              {/* Color Selector */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <label className="font-medium text-gray-700 text-sm whitespace-nowrap">
                    Color:
                  </label>
                  <div className="flex gap-2 items-center">
                    {product.customization.color.map((color) => (
                      <div
                        key={color}
                        className="w-6 h-6 rounded-full border border-gray-300 cursor-pointer"
                        style={{ backgroundColor: color.toLowerCase() }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Size Selector */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <label className="font-medium text-gray-700 text-sm whitespace-nowrap">
                    Size:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.customization.size.map((size) => (
                      <button
                        key={size}
                        className="px-3 py-1 text-sm border border-gray-300 rounded hover:border-blue-500 cursor-pointer"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quantity Counter */}
            <div className="flex items-center gap-4 mt-4 mx-auto w-max">
              <span className="text-sm font-medium text-gray-700">
                Quantity:
              </span>
              <div className="flex items-center border rounded overflow-hidden">
                <button
                  onClick={decrement}
                  className="px-2 py-1 bg-gray-100 hover:bg-gray-200 cursor-pointer"
                >
                  −
                </button>
                <div className="px-3 text-sm">{quantity}</div>
                <button
                  onClick={increment}
                  className="px-2 py-1 bg-gray-100 hover:bg-gray-200 cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            <button 
                onClick={() => addToCart(product, quantity)}
                className="mt-4 w-sm sm:w-full bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition cursor-pointer">
              Add to Cart
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ProductDetail;
