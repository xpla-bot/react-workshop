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
    const description =
      `Curabitur ut tellus commodo, pretium enim quis, faucibus dui. Suspendisse consequat, leo a imperdiet
          sollicitudin, odio purus faucibus tortor, id venenatis risus neque vel lacus. Pellentesque quis eros ac mi
          auctor porta. Proin vitae sagittis diam. Nunc nec mi et ante feugiat consequat. Morbi sit amet dictum
          augue, ac gravida justo. Morbi scelerisque consectetur lacus vitae fermentum.`;
    return <section className="App-content">
      <Product title="Item No 1" price="50" description={description}/>
      <Product title="Item No 2" price="30" description={description}/>
      <Product title="Item No 3" price="20" description={description}/>
      <Product title="Item No 4" price="20" description={description}/>
      <Product title="Item No 5" price="20" description={description}/>
    </section>;
  }
}

export default App;
