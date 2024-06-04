import { getSubtotal } from "@/lib/utils/getSubtotal";
import { redirect } from "next/navigation";
import OrderBtn from "./OrderBtn";
import OrderItem from "./OrderItem";

const shippingCharge = 0;

function OrderSummary({ cart }) {
  const subtotal = getSubtotal(cart?.products);
  return cart?.products?.length === 0 ? (
    <div className='col-span-4 border border-gray-200 p-4 rounded'>
      <h4 className='text-gray-800 text-lg mb-4 font-medium '>
        No products found.
      </h4>
      <button
        className='bg-primary px-3 py-1.5 rounded-md shadow hover:bg-rose-600'
        onClick={() => redirect("/")}
      >
        Do Shopping
      </button>
    </div>
  ) : (
    <div className='col-span-4 border border-gray-200 p-4 rounded'>
      <h4 className='text-gray-800 text-lg mb-4 font-medium uppercase'>
        order summary
      </h4>
      <div className='space-y-2 divide-y-[1px] divide-slate-800/10 border-b-[1px] border-slate-800/10'>
        {cart.products.map((product) => (
          <OrderItem
            key={product?.id + product.discountPercentage}
            data={product}
          />
        ))}
      </div>

      <div className='flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas'>
        <p>subtotal</p>
        <p>${subtotal.toFixed(2)}</p>
      </div>

      <div className='flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas'>
        <p>shipping</p>
        <p>${shippingCharge}</p>
      </div>

      <div className='flex justify-between text-gray-800 font-medium py-3 uppercas'>
        <p className='font-semibold'>Total</p>
        <p>${(subtotal + shippingCharge).toFixed(2)}</p>
      </div>

      <OrderBtn cart={cart} />
    </div>
  );
}

export default OrderSummary;
