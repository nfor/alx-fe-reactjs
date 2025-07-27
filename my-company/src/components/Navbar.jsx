// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-around',
      padding: '15px',
      backgroundColor: '#333',
      color: '#fff'
    }}>
      <Link style={{ color: '#fff', textDecoration: 'none' }} to="/">Home</Link>
      <Link style={{ color: '#fff', textDecoration: 'none' }} to="/about">About</Link>
      <Link style={{ color: '#fff', textDecoration: 'none' }} to="/services">Services</Link>
      <Link style={{ color: '#fff', textDecoration: 'none' }} to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
