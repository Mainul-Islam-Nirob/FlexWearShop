import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        <Link to="/" className="text-2xl font-bold text-blue-600">FlexWearShop</Link>

        <div className="hidden md:flex space-x-6 text-gray-700 font-medium items-center relative">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="Shop" className="hover:text-blue-600 transition">Shop</Link>

          <div className="relative">
            <button
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="hover:text-blue-600 transition flex items-center"
            >
              Category
              <svg
                className={`ml-1 w-4 h-4 transition-transform ${categoryOpen ? 'rotate-180' : 'rotate-0'}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {categoryOpen && (
              <div className="absolute left-0 mt-2 w-30 bg-white border border-gray-200 rounded-lg shadow-lg z-10 text-left">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Men</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Women</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Accessories</a>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <input
            type="text"
            placeholder="Search items"
            className="hidden lg:block px-3 py-1.5 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-400 transition"
          />

          <Link to="login" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
            Login
          </Link>
          <Link to="signUp" className="text-sm font-medium bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-700 transition">
            Sign Up
          </Link>

          <button className="relative text-gray-700 hover:text-blue-600 transition">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold px-1.5 rounded-full">
              2
            </span>
          </button>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden ml-2">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg px-4 py-4 space-y-3">
          <a href="#" className="block text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Shop</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Contact</a>
          
          <div>
            <button
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="w-full text-left text-gray-700 hover:text-blue-600 flex justify-between items-center"
            >
              Category
              <svg
                className={`w-4 h-4 transition-transform ${categoryOpen ? 'rotate-180' : 'rotate-0'}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {categoryOpen && (
              <div className="mt-2 space-y-2 pl-4">
                <a href="#" className="block text-sm text-gray-700 hover:text-blue-600">Men</a>
                <a href="#" className="block text-sm text-gray-700 hover:text-blue-600">Women</a>
                <a href="#" className="block text-sm text-gray-700 hover:text-blue-600">Accessories</a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
