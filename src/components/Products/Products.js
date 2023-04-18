const Product = (props) => {
  return (
    <div className="products">
      <p>product: {props.title}</p>
      <p>Price: {props.price}</p>
      {props.children}
    </div>
  );
};

export default Product;
