import styles from "./product.module.css";

const Product = (props) => {
  return (
    <div className={styles.products}>
      <p>product: {props.title}</p>
      <p>Price: {props.price}</p>
      <button onClick={props.onDelete}>Delete</button>
      {props.children}
    </div>
  );
};

export default Product;
