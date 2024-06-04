import Rating from "@/components/common/ui/Rating";

import AddToCartBtn from "@/components/common/ui/AddToCartBtn";
import SocialSharing from "@/components/common/ui/SocialSharing";
import WishListBtn from "@/components/common/ui/WishListBtn";
import { getCategoryById } from "@/lib/queries/categories";
import { getReviewByProductId } from "@/lib/queries/reviews";
import { getwishListForUser } from "@/lib/queries/wishlist";
import { getAverageRating } from "@/lib/utils/getAverageRating";
import { getPriceAfterDiscount } from "@/lib/utils/getPriceAfterDiscount";
import { getSession } from "@/lib/utils/getSession";
import { getStarFillArray } from "@/lib/utils/getStarFillArray";
import Availlbility from "./Availlbility";
import ModifyQuantity from "./ModifyQuantity";
import ProductImageGallery from "./ProductImageGallery";

async function Details({ data }) {
  const {
    thumbnail,
    title,
    price,
    discountPercentage,
    id,
    images,
    stock,
    brand,
    categoryId,
    description,
  } = data || {};
  const priceAfterDiscount = getPriceAfterDiscount(price, discountPercentage);
  const reviews = await getReviewByProductId(id);
  const rating = getAverageRating(reviews);
  const ratingArray = getStarFillArray(rating);
  const { name: categoryName } = await getCategoryById(categoryId);
  const session = await getSession();
  const userWishList = await getwishListForUser(session?.id);
  let isInclude = null;
  let userWish = [];
  if (userWishList?.userId) {
    userWish = userWishList.productIds.map((product) => product.id);
    isInclude = userWish.includes(id);
  }

  return (
    <div className='container grid grid-cols-2 gap-6'>
      <ProductImageGallery
        images={images}
        thumbnail={thumbnail}
        title={title}
      />

      <div>
        <h2 className='text-3xl font-medium uppercase mb-2'>{title}</h2>
        <div className='flex items-center mb-4'>
          <div className='flex gap-1 text-sm text-yellow-400'>
            <Rating ratingArray={ratingArray} />
          </div>
          <div className='text-xs text-gray-500 ml-3'>
            ({reviews && reviews.length})
          </div>
        </div>
        <div className='space-y-2'>
          <Availlbility stock={stock} />
          <p className='space-x-2'>
            <span className='text-gray-800 font-semibold'>Brand: </span>
            <span className='text-gray-600'>{brand}</span>
          </p>
          <p className='space-x-2'>
            <span className='text-gray-800 font-semibold'>Category: </span>
            <span className='text-gray-600'>{categoryName}</span>
          </p>
          <p className='space-x-2'>
            <span className='text-gray-800 font-semibold'>SKU: </span>
            <span className='text-gray-600'>BE45VGRT</span>
          </p>
        </div>
        <div className='flex items-baseline mb-1 space-x-2 font-roboto mt-4'>
          <p className='text-xl text-primary font-semibold'>
            ${priceAfterDiscount.toFixed(2)}
          </p>
          <p className='text-base text-gray-400 line-through'>
            ${price.toFixed(2)}
          </p>
        </div>

        <p className='mt-4 text-gray-600'>{description}</p>

        <ModifyQuantity />

        <div className='mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5'>
          <AddToCartBtn source='details' session={session} productId={id} />
          <WishListBtn session={session} productId={id} isInclude={isInclude} />
        </div>

        <SocialSharing
          title={title}
          productId={id}
          description={description}
          categoryName={categoryName}
        />
      </div>
    </div>
  );
}

export default Details;
