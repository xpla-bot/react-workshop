import React from 'react';

const Header = props => (
  <header className="App-header">
    <nav className="App-nav">
      <li><a href="#" onClick={() => props.onRedirect('store')}>Store</a></li>
      <li><a href="#" onClick={() => props.onRedirect('news')}>News</a></li>
      <li><a href="#" onClick={() => props.onRedirect('other')}>Other</a></li>
    </nav>
    <div>
      Cart total: $0
    </div>
  </header>
);

export default Header;
