import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash } from 'lucide-react';
import { Link } from 'react-router-dom';

function CartPanel({ isOpen, onClose }) {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const taxRate = 0.075;
  const tax = subtotal * taxRate;
  const totalPrice = subtotal + tax;

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 px-1 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <button onClick={onClose}>
          <X className="w-5 h-5 text-gray-700 hover:text-black transition cursor-pointer" />
        </button>
      </div>

      {/* Items */}
      <div className="p-4 flex flex-col gap-4 overflow-y-auto h-[calc(100%-200px)]">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">🛒 Your cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center gap-4 pb-3 ${
                index !== cartItems.length - 1
                  ? 'border-b border-gray-200'
                  : ''
              }`}
            >
              <Link to={`/product/${item.id}`} onClick={onClose}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded object-cover hover:opacity-90 transition"
                />
              </Link>

              <div className="flex-1">
                <Link to={`/product/${item.id}`} onClick={onClose}>
                  <h4 className="text-sm font-medium text-blue-700 hover:underline">
                    {item.name}
                  </h4>
                </Link>
                <p className="text-xs text-gray-500">
                  ৳ {item.price} x {item.quantity}
                </p>

                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                    className="px-2 bg-gray-100 hover:bg-gray-200 text-sm rounded cursor-pointer"
                  >
                    −
                  </button>
                  <span className="px-2 text-sm">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 bg-gray-100 hover:bg-gray-200 text-sm rounded cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-xs hover:text-red-600 cursor-pointer"
              >
                <Trash />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 p-4 bg-white sticky bottom-0">
        <div className="flex justify-between text-sm text-gray-700 mb-1">
          <span>Subtotal</span>
          <span>৳ {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-700 mb-1">
          <span>Tax (7.5%)</span>
          <span>৳ {tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-base font-semibold mb-3">
          <span>Total</span>
          <span>৳ {totalPrice.toFixed(2)}</span>
        </div>
        <Link to="/checkout">
          <button
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer"
            onClick={onClose}
          >
            Go to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CartPanel;
