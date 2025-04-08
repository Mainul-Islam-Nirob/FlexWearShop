import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';

function App() {
  return (
    <div className="bg-light min-h-screen text-gray-800 font-sans">
      <Navbar />
      <main className="pt-6">
        <Shop />
      </main>
    </div>
  );
}


export default App
