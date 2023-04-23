import React, { useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";
class App extends React.Component {
  state = {};

  clickHandler = () => {
    // this.setState({
    //   products: [
    //     {
    //       title: "vue",
    //       price: "95$",
    //       description: "this is the good product",
    //     },
    //     {
    //       title: "nest",
    //       price: "89$",
    //       description: "learn node js with this course",
    //     },
    //   ],
    // });
  };
  render() {
    return (
      <div className="container">
        <ProductList />

        <button onClick={this.clickHandler}>change price</button>
      </div>
    );
  }
}

// const App = () => {
//   const [products, setProducts] = useState([
//     {
//       title: "vue",
//       price: "95$",
//       description: "this is the good product",
//     },
//     {
//       title: "nest",
//       price: "89$",
//       description: "learn node js with this course",
//     },
//   ]);

//   function clickHandler() {
//     setProducts([
//       {
//         title: "react",
//         price: "95$",
//         description: "this is the good product",
//       },
//       {
//         title: "node",
//         price: "89$",
//         description: "learn node js with this course",
//       },
//     ]);
//   }
//   return (
//     <div className="container">
//       {products.map((product) => {
//         return (
//           <Products
//             title={product.title}
//             price={product.price}
//             key={product.title}
//           >
//             {product.description}
//           </Products>
//         );
//       })}

//       <button onClick={clickHandler}>change price</button>

//       <HookCounter />
//       <HookObject />
//       <HooksArray />
//     </div>
//   );
// };

export default App;
