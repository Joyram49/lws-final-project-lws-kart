import { getProductById } from "@/lib/queries/products";
import { getPriceAfterDiscount } from "@/lib/utils/getPriceAfterDiscount";
import Image from "next/image";
import AddToCartBtn from "../common/ui/AddToCartBtn";
import Availlbility from "../productDetails/details/Availlbility";
import RemoveWishListBtn from "./RemoveWishListBtn";

async function WishListItem({ productId, session }) {
  const wishedProduct = await getProductById(productId);
  const priceAfterDiscount = getPriceAfterDiscount(
    wishedProduct?.price,
    wishedProduct?.discountPercentage
  );

  return (
    <div className='flex items-center justify-between border gap-6 p-4 border-gray-200 rounded'>
      <div className='w-28 h-20 block relative'>
        <Image
          fill
          src={wishedProduct?.thumbnail}
          alt={wishedProduct?.title}
          className='w-full object-cover'
        />
      </div>
      <div className='w-1/3'>
        <h2 className='text-gray-800 text-xl font-medium uppercase'>
          {wishedProduct?.title}
        </h2>
        <Availlbility stock={wishedProduct?.stock} />
      </div>
      <div className='text-primary text-lg font-semibold'>
        ${priceAfterDiscount.toFixed(2)}
      </div>
      <AddToCartBtn source='card' productId={productId} session={session} />

      <RemoveWishListBtn userId={session?.id} productId={productId} />
    </div>
  );
}

export default WishListItem;
