import Products from "./components/Products/Products";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Products title="react" price="99$">
          This is a good product
        </Products>
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
