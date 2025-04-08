import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import FeaturedProducts from './components/FeaturedProducts';

function App() {
  return (
    <div className="bg-light min-h-screen text-gray-800 font-sans">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Shop />
    </div>
  );
}


export default App
