import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header style={{ background: '#333', padding: '1rem', color: '#fff' }}>
    <h1>My Blog</h1>
    <nav>
      <Link to="/" style={{ color: '#fff', marginRight: '1rem' }}>Home</Link>
    </nav>
  </header>
);

export default Header;