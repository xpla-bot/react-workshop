import React, { Component } from 'react';
import './App.css';
import Product from './Product';

class App extends Component {
  render() {
    const titleText = 'Awesome React Store';
    const paragraphText = 'Here is some text';
    return (
      <div className="App">
        {this.renderHeader()}
        <h1 className="App-title">{titleText}</h1>
        <p className="App-intro">{paragraphText}</p>
        {this.renderContent()}
      </div>
    );
  }

  renderHeader() {
    return <header className="App-header">
      <nav className="App-nav">
        <li><a href="#">First</a></li>
        <li><a href="#">Second</a></li>
        <li><a href="#">Third</a></li>
      </nav>
      <div>
        Cart total: $0
      </div>
    </header>;
  }

  renderContent() {
    return <section className="App-content">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </section>;
  }
}

export default App;
