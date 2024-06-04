"use client";

import { getPriceAfterDiscount } from "@/lib/utils/getPriceAfterDiscount";
import Image from "next/image";

function WishItemCard({ data, onClose, setIsloading }) {
  const priceAfterDiscount = getPriceAfterDiscount(
    data?.price,
    data?.discountPercentage
  );

  const handleClick = (event) => {
    event.stopPropagation();
    if (data?.id) {
      router.push(`/product-details/${data?.id}`);
      onClose();
    } else {
      return;
    }
  };

  return (
    <li
      className='flex items-center justify-between border  p-1 border-gray-200 bg-primary rounded'
      onClick={handleClick}
    >
      <div className='w-16 relative block h-12'>
        <Image
          fill
          src={data?.thumbnail}
          alt={data?.title}
          className='w-full object-cover'
        />
      </div>

      <h2 className='text-white text-base font-medium px-3'>{data?.title}</h2>

      <div className='text-white text-lg font-semibold'>
        ${priceAfterDiscount && priceAfterDiscount.toFixed(2)}
      </div>
    </li>
  );
}

export default WishItemCard;
