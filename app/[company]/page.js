
async function fetchProducts() {
  return fetch("https://potential-memory-9r6p7grq4pvc7qx5-3000.app.github.dev/api/products",{headers:{'Accept':'application/json'}}).then((response) => response.json());
}

export default async function Company({ params }) {
 return (<p>Hi</p>)
}


export async function generateStaticParams() {
  const {products:posts} = await fetch("https://potential-memory-9r6p7grq4pvc7qx5-3000.app.github.dev/api/products",{headers:{'Accept':'application/json'}}).then(
    (res) => res.json()
  );

  const companies = Object.keys(posts).map((key) => posts[key].company).filter((value,index,self) => self.indexOf(value) === index);
  return companies.map((company) => ({
    slug: {
      company,
    },
  }));
}
