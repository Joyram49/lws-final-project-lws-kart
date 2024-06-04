import { getRelatedProducts } from "@/lib/queries/products";
import RelatedProductItem from "./RelatedProductItem";

async function RelatedProductList({ productId }) {
  const relatedProducts = await getRelatedProducts(productId);

  return (
    <div className='container pb-16'>
      <h2 className='text-2xl font-medium text-gray-800 uppercase mb-6'>
        Related products
      </h2>
      <div className='grid grid-cols-4 gap-6'>
        {relatedProducts?.map((product) => (
          <RelatedProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default RelatedProductList;
