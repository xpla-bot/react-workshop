import React from 'react';

export const Product = () => {
  return (<article className="App-product">
    <h3>Item name</h3>
    <p>
      Curabitur ut tellus commodo, pretium enim quis, faucibus dui. Suspendisse consequat, leo a imperdiet
      sollicitudin, odio purus faucibus tortor, id venenatis risus neque vel lacus. Pellentesque quis eros ac mi
      auctor porta. Proin vitae sagittis diam. Nunc nec mi et ante feugiat consequat. Morbi sit amet dictum
      augue, ac gravida justo. Morbi scelerisque consectetur lacus vitae fermentum.
    </p>
    <div>Price: $35</div>
    <button type="button">Add to cart</button>
  </article>);
};

export default Product;
