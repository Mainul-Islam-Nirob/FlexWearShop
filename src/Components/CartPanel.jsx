import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash } from 'lucide-react';
import { Link } from 'react-router-dom';

function CartPanel({ isOpen, onClose }) {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={`fixed top-0 right-0 h-screen w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <button onClick={onClose}>
          <X className="w-5 h-5 text-gray-700 cursor-pointer" />
        </button>
      </div>

      <div className="p-4 flex flex-col gap-4 overflow-y-auto h-[calc(100%-150px)]">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 border-b pb-2">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded object-cover" />
              <div className="flex-1">
                <h4 className="text-sm font-medium">{item.name}</h4>
                <p className="text-xs text-gray-500">৳ {item.price} x {item.quantity}</p>

                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
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
                className="text-red-500 text-xs cursor-pointer"
              >
                <Trash size={28} strokeWidth={1.25} />
              </button>
            </div>
          ))
        )}
      </div>

      <div className="border-t p-4">
        <div className="flex justify-between mb-2 text-sm font-medium">
          <span>Total:</span>
          <span>৳ {totalPrice}</span>
        </div>
        <Link to="/checkout">
          <button
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer"
            onClick={onClose}
          >
            Checkout Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CartPanel;
