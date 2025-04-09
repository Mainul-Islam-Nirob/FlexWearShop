import React, {useRef} from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Contact from './components/Contact'
import About from './components/About';

function App() {
  const categoryRef = useRef(null);

  const scrollToCategories = () => {
    categoryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-light min-h-screen text-gray-800 font-sans">
      <Navbar />
      <Hero onExploreClick={scrollToCategories} />
      <div ref={categoryRef}>
        <FeaturedProducts />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}


export default App
