import { useEffect, useState } from "react";
import ProductItem from "../components/Itens";
import Layout from "../components/Layout";
import data from "../utils/data";

export default function Home() {
  const [storeData, setStoreData] = useState(data);
  const [storeProducts, setStoreProducts] = useState(data.products);

  // console.log("🚀 ~ file: index.tsx ~ line 13 ~ Home ~ storeData", storeData);
  return (
    <div>
      <Layout title="Home Page">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {storeProducts.map((product) => (
            <ProductItem key={product.slug} product={product} />
          ))}
        </div>
      </Layout>
    </div>
  );
}
