"use client";

import { useQuantity } from "@/app/hooks/useQuantity";

function ModifyQuantity() {
  const { quantity, setQuantity } = useQuantity();
  const inactive = quantity <= 1;
  return (
    <div className='mt-4'>
      <h3 className='text-sm text-gray-800 uppercase mb-1'>Quantity</h3>
      <div className='flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max'>
        <button
          className={`h-8 w-8 text-xl flex items-center justify-center  select-none ${
            inactive ? "cursor-default bg-gray-200" : "cursor-pointer"
          }`}
          disabled={inactive}
          onClick={() => setQuantity((prev) => prev - 1)}
        >
          -
        </button>
        <div className='h-8 w-8 text-base flex items-center justify-center'>
          {quantity}
        </div>
        <button
          className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ModifyQuantity;
