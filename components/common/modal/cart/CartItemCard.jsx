"use client";

import Image from "next/image";

function CartItemCard({ data, onClose }) {
  const { product, quantity } = data || {};

  const handleClick = (event) => {
    event.stopPropagation();
    if (product?.id) {
      router.push(`/product-details/${product.id}`);
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
      <div className='w-16 relative block h-10'>
        <Image
          fill
          src={product?.thumbnail}
          alt={product?.title}
          className='w-full object-cover'
        />
      </div>

      <h2 className='text-white text-base font-medium '>{product?.title}</h2>

      <div className='text-white text-sm font-semibold block ml-2'>
        {quantity} item(s)
      </div>
    </li>
  );
}

export default CartItemCard;
