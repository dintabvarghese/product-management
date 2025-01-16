import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ backgroundColor: '#00274d', color: '#fff', padding: '1rem' }}>
    <h2 style={{ display: 'inline', marginRight: '2rem' }}>Product Management</h2>
    <Link to="/" style={{ color: '#fff', marginLeft: '700px' }}>Home</Link>
    <Link to="/add-product" style={{ color: '#fff', marginLeft: '60px' }}>Add Product</Link>
  </nav>
);

export default Navbar;
