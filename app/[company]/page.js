import ProductList from "../../components/product-list";

async function fetchProducts() {
  return fetch("https://8q4vc3-3000.csb.app/api/products", {
    cache: "no-store",
  }).then((response) => response.json());
}

export default async function CompanyDetails({ params }) {
  const products = await fetchProducts();
  const filterProducts = Object.keys(products.data)
    .filter((key) => products.data[key].company === params.company)
    .map((key) => products.data[key]);
  return <ProductList items={filterProducts} />;
}

export async function generateStaticParams() {
  const posts = await fetch("https://8q4vc3-3000.csb.app/api/products").then(
    (res) => res.json()
  );

  return Object.keys(posts.data).map((key) => ({
    slug: posts.data[key].company,
  }));
}
