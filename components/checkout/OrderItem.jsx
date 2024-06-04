import Image from "next/image";

function OrderItem({ data }) {
  const { product, quantity } = data || {};
  return (
    <div className='flex justify-between pt-2 '>
      <div>
        <div className='border-[1px] border-slate-800/10 rounded-sm max-w-fit p-2 shadow-sm'>
          <div className='relative block w-16 h-12'>
            <Image
              fill
              src={product?.thumbnail}
              alt={product?.title}
              className='object-cover'
            />
          </div>
        </div>
        <h5 className='text-gray-800 font-medium'>{product?.title}</h5>
      </div>
      <p className='text-gray-600'>x{quantity}</p>
      <p className='text-gray-800 font-medium'>
        ${(product?.priceAfterDiscount * quantity).toFixed(2)}
      </p>
    </div>
  );
}

export default OrderItem;
