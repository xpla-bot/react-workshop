import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="App-header">
    <nav className="App-nav">
      <li><Link to="/store">Store</Link></li>
      <li><Link to="/news">News</Link></li>
      <li><Link to="/other">Other</Link></li>
    </nav>
    <div>
      Cart total: $0
    </div>
  </header>
);

export default Header;
