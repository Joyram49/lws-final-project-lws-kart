import { searchedProducts } from "@/app/actions";
import Drawer from "@/components/shop/Drawer";
import IonIcon from "@/components/shop/IonIcon";
import ProductList from "@/components/shop/products/ProductList";
import Categories from "@/components/shop/sidebar/Categories";

async function ShopPage({ searchParams }) {
  const searchTerm = searchParams.searchTerm;
  const products = await searchedProducts(searchTerm);

  return (
    <main>
      <div className='container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start'>
        {/* <!-- sidebar --> */}
        {/* <!-- drawer init and toggle --> */}
        <IonIcon />

        {/* <!-- drawer component --> */}
        <Drawer />

        {/* <!-- ./sidebar --> */}
        <Categories products={products} />
        {/* <!-- products --> */}
        <ProductList products={products} />

        {/* <!-- ./products --> */}
      </div>
    </main>
  );
}

export default ShopPage;
