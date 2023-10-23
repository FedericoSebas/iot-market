import { add } from "lodash";
import ProductList from "../components/product-list";
import Advertisment from "../components/advertisment";

async function fetchProducts() {
  return fetch("https://potential-memory-9r6p7grq4pvc7qx5-3000.app.github.dev/api/products",{headers:{'Accept':'application/json'}})
    .then((response) => response.json())
}

async function fetchAdvertisment() {
  return fetch("https://potential-memory-9r6p7grq4pvc7qx5-3000.app.github.dev/api/advertisment")
    .then((response) => response.json())
}

async function HomePage() {
  const {products} = await fetchProducts();
  const {imageObjects: ads} = await fetchAdvertisment();
  return (
    <>
      <Advertisment items={ads} />
      <ProductList items={products} />
    </>
  );
}

export default HomePage;