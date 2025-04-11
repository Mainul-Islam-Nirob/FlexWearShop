import React from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate  } from 'react-router-dom';

function CheckoutPage() {
    const { cartItems, setCartItems } = useCart();
    const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const taxRate = 0.075;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const handlePlaceOrder = () => {
    // Clear cart after order is placed
    setCartItems([]);
    
    // Navigate to the success page
    navigate('/order-success');
  };


  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">Checkout</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Customer Info */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-lg font-medium mb-4">Customer Information</h3>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Full Name" className="input-style" />
            <input type="email" placeholder="Email" className="input-style" />
            <input type="text" placeholder="Phone Number" className="input-style" />
            <input type="text" placeholder="Shipping Address" className="input-style" />
            <input type="text" placeholder="City" className="input-style" />
            <input type="text" placeholder="Postal Code" className="input-style" />
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-lg font-medium mb-4">Order Summary</h3>

          <div className="space-y-4 max-h-60 overflow-y-auto">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-2 last:border-b-0">
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    ৳{item.price} x {item.quantity}
                  </p>
                </div>
                <span className="text-sm font-semibold">৳{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>৳{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (7.5%):</span>
              <span>৳{tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-base">
              <span>Total:</span>
              <span>৳{total.toFixed(2)}</span>
            </div>
          </div>

          <button
            className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>

          <Link to="/" className="block mt-4 text-center text-blue-600 hover:underline text-sm">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
