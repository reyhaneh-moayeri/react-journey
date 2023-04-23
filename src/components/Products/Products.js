import styles from "./product.module.css";

const Product = (props) => {
  return (
    <div className={styles.products}>
      <p>product: {props.product.title}</p>
      <p>Price: {props.product.price}</p>
      <p>quantity: {props.product.quantity}</p>
      <button onClick={props.onIncrement}>Increment</button>
      <button onClick={props.onDelete}>Delete</button>
      {props.children}
    </div>
  );
};

export default Product;
