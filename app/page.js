import ProductList from "../components/product-list";

async function fetchProducts() {
  return fetch("https://8q4vc3-3000.csb.app/api/products", {
    cache: "no-store",
  }).then((response) => response.json());
}

async function HomePage() {
  const products = await fetchProducts();
  return (
    <>
      <ProductList items={products.data} />
    </>
  );
}

export default HomePage;
