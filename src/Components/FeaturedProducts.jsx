import React from 'react';
import featured1 from '../assets/images/club-jersey-1.jpg'
import featured2 from '../assets/images/custom-jersey-1.webp'
import featured3 from '../assets/images/eyewear-1.jpg'
import featured4 from '../assets/images/hoodie-20.webp'
import featured5 from '../assets/images/tshirt-3.webp'
import featured6 from '../assets/images/sneaker-4.avif'


function FeaturedProducts() {
  const featured = [
    {
      id: 1,
      name: 'Classic Denim Jacket',
      category: 'men',
      description: 'Rugged and timeless style for any casual look.',
      price: 2490,
      image: featured1 ,
    },
    {
      id: 2,
      name: 'Floral Summer Dress',
      category: 'women',
      description: 'Elegant, breezy, and perfect for warm days.',
      price: 1890,
      image: featured2,
    },
    {
      id: 3,
      name: 'Running Sneakers',
      category: 'shoes',
      description: 'Comfort and performance combined.',
      price: 2990,
      image: featured3,
    },
    {
      id: 4,
      name: 'Leather Handbag',
      category: 'accessories',
      description: 'Sleek design with premium finish.',
      price: 3490,
      image: featured4,
    },
    {
      id: 5,
      name: 'Winter Puffer Jacket',
      category: 'winter',
      description: 'Warm, waterproof, and stylish.',
      price: 3990,
      image: featured5,
    },
    {
      id: 6,
      name: 'Cotton T-Shirts',
      category: 'summer',
      description: 'Soft fabric, relaxed fit, summer-ready.',
      price: 990,
      image: featured6,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          ✨ Featured Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product) => (
            <div
              key={product.id}
              className="bg-white bg-opacity-90 backdrop-blur-lg border border-gray-100 shadow-xl rounded-3xl overflow-hidden transform hover:scale-[1.03] transition duration-300 cursor-pointer group"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-3 h-12 overflow-hidden">{product.description}</p>
                <div className="text-lg font-bold text-gray-900">৳ {product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default FeaturedProducts;
