import AddToCartBtn from "@/components/common/ui/AddToCartBtn";
import Rating from "@/components/common/ui/Rating";
import { productSix } from "@/public/images/products";
import { faHeart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

function ProductItem({ data }) {
  const { thumbnail, title } = data || {};
  return (
    <div className='bg-white shadow rounded overflow-hidden group'>
      <div className='relative'>
        <Image src={productSix} alt='product 1' className='w-full' />
        <div
          className='absolute inset-0 bg-black bg-opacity-40 flex items-center
                        justify-center gap-2 opacity-0 group-hover:opacity-100 transition'
        >
          <Link
            href='#'
            className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
            title='view product'
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
          <Link
            href='#'
            className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
            title='add to wishlist'
          >
            <FontAwesomeIcon icon={faHeart} />
          </Link>
        </div>
      </div>
      <div className='pt-4 pb-3 px-4'>
        <Link href='#'>
          <h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>
            Guyer Chair
          </h4>
        </Link>
        <div className='flex items-baseline mb-1 space-x-2'>
          <p className='text-xl text-primary font-semibold'>$45.00</p>
          <p className='text-sm text-gray-400 line-through'>$55.90</p>
        </div>
        <div className='flex items-center'>
          <div className='flex gap-1 text-sm text-yellow-400'>
            <Rating />
          </div>
          <div className='text-xs text-gray-500 ml-3'>(150)</div>
        </div>
      </div>
      <AddToCartBtn source='card' />
    </div>
  );
}

export default ProductItem;

// import AddToCartBtn from "@/components/common/ui/AddToCartBtn";
// import AddToWishList from "@/components/common/ui/AddToWishList";
// import Rating from "@/components/common/ui/Rating";
// import { getReviewByProductId } from "@/lib/queries/reviews";
// import { getwishListForUser } from "@/lib/queries/wishlist";
// import { getAverageRating } from "@/lib/utils/getAverageRating";
// import { getPriceAfterDiscount } from "@/lib/utils/getPriceAfterDiscount";
// import { getSession } from "@/lib/utils/getSession";
// import { getStarFillArray } from "@/lib/utils/getStarFillArray";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Image from "next/image";
// import Link from "next/link";

// async function ProductItem({ data }) {
//   const { thumbnail, title, price, discountPercentage, id } = data || {};
//   const priceAfterDiscount = getPriceAfterDiscount(price, discountPercentage);
//   const reviews = await getReviewByProductId(id);
//   const rating = getAverageRating(reviews);
//   const ratingArray = getStarFillArray(rating);
//   const session = await getSession();
//   const userWishList = await getwishListForUser(session?.id);
//   let isInclude = null;
//   let userWish = [];
//   userWish = userWishList.productIds.map((product) => product.id);
//   if (userWishList?.userId) {
//     isInclude = userWish.includes(id);
//   }

//   return (
//     <div className='bg-white shadow rounded overflow-hidden group'>
//       <div className='relative w-full h-44 block'>
//         <Image
//           fill
//           src={thumbnail}
//           alt={title}
//           className='w-full object-cover'
//         />
//         <div
//           className='absolute inset-0 bg-black bg-opacity-40 flex items-center
//               justify-center gap-2 opacity-0 group-hover:opacity-100 transition'
//         >
//           <Link
//             href={`/product-details/${id}`}
//             className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
//             title='view product'
//           >
//             <FontAwesomeIcon icon={faMagnifyingGlass} />
//           </Link>
//           <AddToWishList
//             productId={id}
//             session={session}
//             isInclude={isInclude}
//           />
//         </div>
//       </div>
//       <div className='pt-4 pb-3 px-4'>
//         <Link href={`/product-details/${id}`}>
//           <h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>
//             {title}
//           </h4>
//         </Link>
//         <div className='flex items-baseline mb-1 space-x-2'>
//           <p className='text-xl text-primary font-semibold'>
//             ${priceAfterDiscount.toFixed(2)}
//           </p>
//           <p className='text-sm text-gray-400 line-through'>${price}</p>
//         </div>
//         <div className='flex items-center'>
//           {/* <div className='flex gap-1 text-sm text-yellow-400'> */}
//           <Rating ratingArray={ratingArray} />
//           {/* </div> */}
//           <div className='text-xs text-gray-500 ml-3'>
//             ({reviews && reviews.length})
//           </div>
//         </div>
//       </div>
//       <div className='w-full flex justify-center items-center'>
//         <AddToCartBtn source='card' productId={id} session={session} />
//       </div>
//     </div>
//   );
// }

// export default ProductItem;
