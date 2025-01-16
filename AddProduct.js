import React, { useState } from 'react';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    image: '',
    price: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Product:', product);
    // Here, you can post the product to an API or add it to a local list
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>Add Product</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          style={{ padding: '0.5rem' }}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
          style={{ padding: '0.5rem' }}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          style={{ padding: '0.5rem' }}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          style={{ padding: '0.5rem' }}
        />
        <button type="submit" style={{ padding: '0.5rem', backgroundColor: '#00274d', color: '#fff' }}>Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
