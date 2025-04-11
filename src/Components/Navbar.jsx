import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Link, useNavigate, NavLink } from "react-router-dom";
import products from '../Products/Products.js';
import { useCart } from '../context/CartContext.jsx';
import CartPanel from './CartPanel';



function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [cartOpen, setCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredProducts([]);
      setShowDropdown(false);
    } else {
      const matches = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(matches);
      setShowDropdown(true);
    }
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setShowDropdown(false);
  };



  const categories = [...new Set(products.map(product => product.category))];

const { cartItems } = useCart();

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory) {
      navigate(`/category/${selectedCategory}`);
    }
  };

  const navItemClass = ({ isActive }) => `
  relative inline-block px-2 py-1 font-medium transition-colors duration-300
  ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}
  before:content-[''] before:absolute before:left-0 before:bottom-0 
  before:h-0.5 before:bg-blue-600 before:transition-all before:duration-300
  before:w-0 hover:before:w-full
  ${isActive ? 'before:w-full' : ''}
`;


  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        <Link to="/" className="text-2xl font-bold text-blue-600">FlexWearShop</Link>

        <div className="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
        <NavLink to="/" className={navItemClass}>Home</NavLink>
        <NavLink to="/shop" className={navItemClass}>Shop</NavLink>

          <select
            onChange={handleCategoryChange}
            defaultValue=""
            className="border border-gray-300 rounded-md px-3 py-1 bg-white text-gray-700 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
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
        <div className="relative w-full max-w-xs">
          
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={handleInputChange}
        className="w-auto px-3 py-1.5 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition"
      />
        {showDropdown && (
  <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
    {filteredProducts.length > 0 ? (
      filteredProducts.map((product) => (
        <Link
          to={`/product/${product.id}`}
          key={product.id}
          onClick={clearSearch}
          className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 transition"
        >
          <div className="flex items-center gap-3">
            <img
              src={product.image}
              alt={product.name}
              className="w-8 h-8 object-cover rounded"
            />
            <span className="text-sm text-gray-800">{product.name}</span>
          </div>
          <span className="text-sm text-gray-600 whitespace-nowrap">৳{product.price}</span>
        </Link>
      ))
    ) : (
      <p className="px-4 py-2 text-sm text-gray-500">No results found.</p>
    )}
  </div>
)}


    </div>

          <Link to="/login" className="text-md font-medium text-gray-700 hover:text-blue-600 transition">Login</Link>
          <Link to="/signUp" className="text-md w-full font-medium bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-700 transition">Sign Up</Link>
          <button
  onClick={() => setCartOpen(true)}
  className="relative text-gray-700 hover:text-blue-600 transition cursor-pointer"
>
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold px-1.5 rounded-full"> 
               {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </button>
          <CartPanel isOpen={cartOpen} onClose={() => setCartOpen(false)} />

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden ml-2">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
