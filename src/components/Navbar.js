import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav>
    <div className="logo">Math Magicians</div>
    <div className="menu">
      <ul>
        <li key={1} className="home">Home</li>
        <li key={2} className="calculator">Calculator</li>
        <li key={3} className="quote">Quote</li>
      </ul>
    </div>
  </nav>
);
export default Navbar;
