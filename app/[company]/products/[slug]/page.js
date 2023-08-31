import ProductList from "../../../../components/product-list";
async function fetchProducts() {
  return fetch("https://8q4vc3-3000.csb.app/api/product-deail").then((response) =>
    response.json()
  );
}

export default async function DetailProduct({ params }) {
  const {filesData} = await fetchProducts();
  return (
    <>
        <p>{filesData}</p>
    </>
  );
}

export async function generateStaticParams() {
  const posts = await fetch("https://8q4vc3-3000.csb.app/api/products").then(
    (res) => res.json()
  );

  return Object.keys(posts).map((key) => ({
    slug: posts[key].slug,
  }));
}
