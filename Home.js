import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center' }}>Product Dashboard</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {products.map(product => (
          <div key={product.id} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '1rem',
            width: '200px',
            textAlign: 'center',
          }}>
            <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <p style={{ color: '#888' }}>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
