import ProductDescription from "@/components/productDetails/description/ProductDescription";
import Details from "@/components/productDetails/details/Details";
import RelatedProductList from "@/components/productDetails/related/RelatedProductList";
import { getProductById } from "@/lib/queries/products";

export async function generateMetadata({ params }) {
  const { productId } = params;
  const product = await getProductById(productId);
  return {
    title: product.title,
    description: product.description,
  };
}

export const revalidate = 0;

async function ProductDetailsPage({ params }) {
  const { productId } = params;
  const product = await getProductById(productId);

  return (
    <main>
      <Details data={product} />
      <ProductDescription description={product?.description} />
      <RelatedProductList productId={productId} />
    </main>
  );
}

export default ProductDetailsPage;
