import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Product from './Product';

class App extends Component {

  state = {
    currentPage: 'store'
  };

  handleRedirect = url => this.setState({currentPage: url});

  render() {
    const titleText = 'Awesome React Store';
    const paragraphText = 'Here is some text';
    return (
      <div className="App">
        <Header onRedirect={this.handleRedirect}/>
        <h1 className="App-title">{titleText}</h1>
        <p className="App-intro">{paragraphText}</p>
        {this.renderContent()}
      </div>
    );
  }

  renderContent() {
    if (this.state.currentPage === 'store') {
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
    if (this.state.currentPage === 'news') {
      return <h1>News page</h1>;
    }
    return <div>Sorry, page is not found</div>;
  }
}

export default App;
