

import Carousel from "../../../../components/detail-page/carousel";
import ProductList from "../../../../components/product-list";

async function fetchProducts(slug) {
  return fetch(`https://potential-memory-9r6p7grq4pvc7qx5-3000.app.github.dev/api/product-detail?slug=${slug}`).then((response) => response.json()
  );
}

export default async function DetailProduct({ params }) {

  const { content } = await fetchProducts(params.slug);
  return (
    <ul>
      {content.sections.map((section,index) => {
        if(index === 0){
          return(<li>
            <div>
              <Carousel images={section.files} />
              <h1>{section.title}</h1>
              <h3>{section.company}</h3>
              <p>{section.description}</p>
            </div>
          </li>)
        }
      })}
    </ul>
  );
}

export async function generateStaticParams() {
  const { products: posts } = await fetch("https://potential-memory-9r6p7grq4pvc7qx5-3000.app.github.dev/api/products", { headers: { 'Accept': 'application/json' } }).then(
    (res) => res.json()
  );

  return Object.keys(posts).map((key) => ({
    slug: posts[key].slug,
  }));
}






