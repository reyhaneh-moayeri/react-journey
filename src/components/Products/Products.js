import styles from "./product.module.css";
import { useEffect } from "react";
import { BiTrash } from "react-icons/bi";
const Product = (props) => {
  useEffect(() => {
    console.log("use effect");
  }, [props.product.quantity]);
  return (
    <div className={styles.products}>
      <p>product: {props.product.title}</p>
      <p>Price: {props.product.price}</p>
      <p>quantity: {props.product.quantity}</p>
      <button onClick={props.onIncrement}>Increment</button>
      <button onClick={props.onDecrement}>
        {props.product.quantity > 1 ? "-" : <BiTrash></BiTrash>}
      </button>
      {props.product.quantity > 1 && (
        <button onClick={props.onDelete}>
          <BiTrash />
        </button>
      )}
      {props.children}
    </div>
  );
};

export default Product;
