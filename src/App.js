import Products from "./components/Products/Products";
import React from "react";

class App extends React.Component {
  state = {
    products: [
      {
        title: "react",
        price: "99$",
      },
      {
        title: "node",
        price: "109$",
      },
    ],
  };
  render() {
    return (
      <div className="container">
        {this.state.products.map((product) => {
          return (
            <Products title={product.title} price={product.price}>
              This is a good product
            </Products>
          );
        })}
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div className="container">
//       <Products title="react" price="99$">
//         This is a good product
//       </Products>
//     </div>
//   );
// };

export default App;
