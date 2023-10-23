import ProductItem from "./product-item";
import styles from "./product-list.module.css";

export default function ProductList( {items} ) {
  const products = [];

  for (const key in items) {
    items[key].id = key;
    products.push(items[key]);
  }
  return (
    <ul className={styles.list}>
      {products.map((product) => (
        <ProductItem key={product.slug} item={product} />
      ))}
    </ul>
  );
}
