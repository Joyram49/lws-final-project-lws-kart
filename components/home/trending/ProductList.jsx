import { getTrendingProducts } from "@/lib/queries/products";
import ProductItem from "./ProductItem";

async function ProductList() {
  const trendingProducts = await getTrendingProducts();
  return (
    <div className='container pb-16'>
      <h2 className='text-2xl font-medium text-gray-800 uppercase mb-6'>
        TRENDING PRODUCTS
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
        {trendingProducts &&
          trendingProducts.map((product) => (
            <ProductItem key={product.id} data={product} />
          ))}
      </div>
    </div>
  );
}

export default ProductList;
