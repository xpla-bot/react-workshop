import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const titleText = 'Awesome React Store';
    const paragraphText = 'Here is some text';
    return (
      <div className="App">
        <header className="App-header">
          <nav className="App-nav">
            <li><a href="#">First</a></li>
            <li><a href="#">Second</a></li>
            <li><a href="#">Third</a></li>
          </nav>
          <div>
            Cart total: $0
          </div>
        </header>
        <h1 className="App-title">{titleText}</h1>
        <p className="App-intro">{paragraphText}</p>
        <section className="App-content">
          <article className="App-product">
            <h3>Item name</h3>
            <p>
              Curabitur ut tellus commodo, pretium enim quis, faucibus dui. Suspendisse consequat, leo a imperdiet
              sollicitudin, odio purus faucibus tortor, id venenatis risus neque vel lacus. Pellentesque quis eros ac mi
              auctor porta. Proin vitae sagittis diam. Nunc nec mi et ante feugiat consequat. Morbi sit amet dictum
              augue, ac gravida justo. Morbi scelerisque consectetur lacus vitae fermentum.
            </p>
            <div>Price: $35</div>
            <button type="button">Add to cart</button>
          </article>
          <article className="App-product">
            <h3>Item name</h3>
            <p>
              Curabitur ut tellus commodo, pretium enim quis, faucibus dui. Suspendisse consequat, leo a imperdiet
              sollicitudin, odio purus faucibus tortor, id venenatis risus neque vel lacus. Pellentesque quis eros ac mi
              auctor porta. Proin vitae sagittis diam. Nunc nec mi et ante feugiat consequat. Morbi sit amet dictum
              augue, ac gravida justo. Morbi scelerisque consectetur lacus vitae fermentum.
            </p>
            <div>Price: $35</div>
            <button type="button">Add to cart</button>
          </article>
          <article className="App-product">
            <h3>Item name</h3>
            <p>
              Curabitur ut tellus commodo, pretium enim quis, faucibus dui. Suspendisse consequat, leo a imperdiet
              sollicitudin, odio purus faucibus tortor, id venenatis risus neque vel lacus. Pellentesque quis eros ac mi
              auctor porta. Proin vitae sagittis diam. Nunc nec mi et ante feugiat consequat. Morbi sit amet dictum
              augue, ac gravida justo. Morbi scelerisque consectetur lacus vitae fermentum.
            </p>
            <div>Price: $35</div>
            <button type="button">Add to cart</button>
          </article>
          <article className="App-product">
            <h3>Item name</h3>
            <p>
              Curabitur ut tellus commodo, pretium enim quis, faucibus dui. Suspendisse consequat, leo a imperdiet
              sollicitudin, odio purus faucibus tortor, id venenatis risus neque vel lacus. Pellentesque quis eros ac mi
              auctor porta. Proin vitae sagittis diam. Nunc nec mi et ante feugiat consequat. Morbi sit amet dictum
              augue, ac gravida justo. Morbi scelerisque consectetur lacus vitae fermentum.
            </p>
            <div>Price: $35</div>
            <button type="button">Add to cart</button>
          </article>
          <article className="App-product">
            <h3>Item name</h3>
            <p>
              Curabitur ut tellus commodo, pretium enim quis, faucibus dui. Suspendisse consequat, leo a imperdiet
              sollicitudin, odio purus faucibus tortor, id venenatis risus neque vel lacus. Pellentesque quis eros ac mi
              auctor porta. Proin vitae sagittis diam. Nunc nec mi et ante feugiat consequat. Morbi sit amet dictum
              augue, ac gravida justo. Morbi scelerisque consectetur lacus vitae fermentum.
            </p>
            <div>Price: $35</div>
            <button type="button">Add to cart</button>
          </article>
        </section>
      </div>
    );
  }
}

export default App;
