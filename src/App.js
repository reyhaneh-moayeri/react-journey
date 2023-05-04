import React, { useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import FunctionalCounter from "./components/FunctionalCounter";
// import ComponentCounter from "./components/ClassCounterTest";
import FunctionalCounterIntreval from "./components/FunctionalCounterTest";
import Wrapper from "./components/hoc/Wrapper";
import HoverCounter from "./components/hoc/HoverCounter";
import ParentComp from "./components/memo/ParentComp";
import ClassRef from "./components/ref/ClassRef";
import FunctionalRef from "./components/ref/FunctionalRef";
import CounterProvider from "./components/Context/CounterProvider";
import AddOne from "./components/Context/AddOne";
import CoutReducer from "./components/Reducer/CountReducer";
export const UserContext = React.createContext();
class App extends React.Component {
  state = {
    isShown: false,
  };

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
        <CounterProvider>
          <h1>welcom to context</h1>
          <CoutReducer />
        </CounterProvider>
        {/* <UserContext.Provider value={"reyhaneh"}>
          <ProductList />
          <ClassCounter />
          <FunctionalCounter />
          {this.state.isShown && <FunctionalCounterIntreval />}
          <button
            onClick={() => this.setState({ isShown: !this.state.isShown })}
          >
            {this.state.isShown ? "hide" : "show"}
          </button>
          <HoverCounter name="counter" />
          <ClassRef />
          <FunctionalRef />
        </UserContext.Provider> */}
        {/* <button onClick={this.clickHandler}>change price</button> */}
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

export default Wrapper(App, "container");
