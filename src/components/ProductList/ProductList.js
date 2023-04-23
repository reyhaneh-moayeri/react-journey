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
        quantity: 2,
      },
      {
        id: 2,
        title: "node",
        price: "109$",
        description: "learn node js with this course",
        quantity: 3,
      },
    ],
  };

  removeHandler = (id) => {
    const filteredProducts = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filteredProducts });
  };

  incrementHandler = (id) => {
    const products = [...this.state.products];
    const selectedProduct = products.find((p) => p.id === id);
    selectedProduct.quantity++;
    this.setState({ products });
  };

  render() {
    return (
      <div>
        {this.state.products.map((product, index) => {
          return (
            <Products
              product={product}
              key={index}
              onDelete={() => this.removeHandler(product.id)}
              onIncrement={() => this.incrementHandler(product.id)}
            ></Products>
          );
        })}
      </div>
    );
  }
}

export default ProductList;
