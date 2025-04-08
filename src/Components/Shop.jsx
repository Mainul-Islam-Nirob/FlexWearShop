import React, {useState, useEffect} from 'react'

function Shop() {
    const [products, setProducts] = useState([]);

useEffect(() => {
  fetch('http://localhost:3001/products')
    .then(res => res.json())
    .then(data => setProducts(data));
}, []);

  return (
    <div>
    {products.map(product => (
      <div key={product.id}>
        <img src={product.image} alt="image not showign" />
        <p>{console.log(product)}</p>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </div>
    ))}
  </div>
  )
}

export default Shop
