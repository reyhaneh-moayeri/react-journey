import Products from "./components/Products/Products";

const App = () => {
  return (
    <div className="container">
      <Products title="react" price="99$">
        This is a good product
      </Products>
    </div>
  );
};

export default App;
