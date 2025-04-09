import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import products from '../Products/Products.js';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const categories = [...new Set(products.map(product => product.category))];

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory) {
      navigate(`/category/${selectedCategory}`);
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        <Link to="/" className="text-2xl font-bold text-blue-600">FlexWearShop</Link>

        <div className="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/shop" className="hover:text-blue-600 transition">Shop</Link>

          {/* Native Select Dropdown */}
          <select
            onChange={handleCategoryChange}
            defaultValue=""
            className="border border-gray-300 rounded-md px-3 py-1 bg-white text-gray-700 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled>Category</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-3">
        <input
  type="text"
  placeholder="Search items..."
  className="hidden lg:block px-3 py-1.5 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition"
/>

          <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">Login</Link>
          <Link to="/signUp" className="text-sm font-medium bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-700 transition">Sign Up</Link>
          <button className="relative text-gray-700 hover:text-blue-600 transition">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold px-1.5 rounded-full">2</span>
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden ml-2">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
