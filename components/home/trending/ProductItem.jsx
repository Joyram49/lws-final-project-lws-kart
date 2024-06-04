import AddToCartBtn from "@/components/common/ui/AddToCartBtn";
import AddToWishList from "@/components/common/ui/AddToWishList";
import Rating from "@/components/common/ui/Rating";
import { getReviewByProductId } from "@/lib/queries/reviews";
import { getwishListForUser } from "@/lib/queries/wishlist";
import { getAverageRating } from "@/lib/utils/getAverageRating";
import { getPriceAfterDiscount } from "@/lib/utils/getPriceAfterDiscount";
import { getSession } from "@/lib/utils/getSession";
import { getStarFillArray } from "@/lib/utils/getStarFillArray";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

async function ProductItem({ data }) {
  const { id, title, price, discountPercentage, thumbnail } = data || {};
  const priceAfterDiscount = getPriceAfterDiscount(price, discountPercentage);
  const reviews = await getReviewByProductId(id);
  const rating = getAverageRating(reviews);
  const ratingArray = getStarFillArray(rating);
  const session = await getSession();
  const userWishList = await getwishListForUser(session?.id);
  let isInclude = null;
  let userWish = [];
  if (userWishList?.userId) {
    userWish = userWishList.productIds.map((product) => product.id);
    isInclude = userWish.includes(id);
  }

  return (
    <div className='w-full bg-white shadow rounded overflow-hidden group '>
      <div className='relative w-full h-48 block'>
        <Image
          fill
          src={thumbnail}
          alt={title}
          className='w-full object-cover'
        />
        <div
          className='absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition'
        >
          <Link
            href={`/product-details/${id}`}
            className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
            title='view product'
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
          <AddToWishList
            productId={id}
            session={session}
            isInclude={isInclude}
          />
        </div>
      </div>
      <div className='pt-4 pb-3 px-4'>
        <Link href={`/product-details/${id}`}>
          <h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>
            {title}
          </h4>
        </Link>
        <div className='flex items-baseline mb-1 space-x-2'>
          <p className='text-xl text-primary font-semibold'>
            ${priceAfterDiscount.toFixed(2)}
          </p>
          <p className='text-sm text-gray-400 line-through'>${price}</p>
        </div>
        <div className='flex items-center'>
          <Rating ratingArray={ratingArray} />
          <div className='text-xs text-gray-500 ml-3'>
            ({reviews && reviews.length})
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center items-center'>
        <AddToCartBtn source='card' productId={id} session={session} />
      </div>
    </div>
  );
}

export default ProductItem;
