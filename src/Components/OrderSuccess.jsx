import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function OrderSuccess() {
  const { setCartItems } = useCart();

  // Clear cart on page load (after order is successfully placed)
  React.useEffect(() => {
    setCartItems([]); // Clear all cart items
  }, [setCartItems]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-green-50 p-6 rounded-lg shadow-md border border-green-200">
        <h2 className="text-2xl font-semibold text-center text-green-600 mb-4">Order Placed Successfully!</h2>
        <p className="text-center text-gray-700 mb-6">
          Thank you for your purchase! Your order has been successfully placed and is being processed.
        </p>
        <div className="text-center">
          <Link to="/" className="text-blue-600 hover:underline">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
