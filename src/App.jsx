import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-light min-h-screen text-gray-800 font-sans">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Shop />
      <Footer />
    </div>
  );
}


export default App
