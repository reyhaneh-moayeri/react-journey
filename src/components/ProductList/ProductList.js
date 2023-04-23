import React, { Component } from "react";
import Products from "../Products/Products";
class ProductList extends Component {
  state = {
    products: [
      {
        id: 1,
        title: "react",
        price: "99$",
        description: "this is the good product",
      },
      {
        id: 2,
        title: "node",
        price: "109$",
        description: "learn node js with this course",
      },
    ],
  };

  removeHandler = (id) => {
    const filteredProducts = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filteredProducts });
  };

  render() {
    return (
      <div>
        {this.state.products.map((product) => {
          return (
            <Products
              title={product.title}
              price={product.price}
              key={product.title}
              onDelete={() => this.removeHandler(product.id)}
            ></Products>
          );
        })}
      </div>
    );
  }
}

export default ProductList;
