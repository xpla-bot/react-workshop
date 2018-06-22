import React from 'react';

export const Product = props => {
  return (<article className="App-product">
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    <div>Price: ${props.price}</div>
    <button type="button">Add to cart</button>
  </article>);
};

export default Product;
