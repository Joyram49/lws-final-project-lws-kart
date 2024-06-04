"use client";

import { useCheckout } from "@/app/hooks/useCheckout";
import { getSubtotal } from "@/lib/utils/getSubtotal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function OrderBtn({ cart }) {
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);
  const { checkoutInfo, errors, setErrors } = useCheckout();
  const router = useRouter();
  const products = cart.products.map((product) => ({
    product_title: product.product.title,
    price: product.product.priceAfterDiscount,
    quantity: product.quantity,
  }));
  const subtotal = getSubtotal(cart.products);

  async function handlePlaceOrder() {
    setLoading(true);
    setErrors({});
    try {
      if (!agree) {
        throw new Error("Please accept T&C first to place an order!");
      }
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          checkoutInfo,
          products,
          sub_total: subtotal,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setErrors(errorData);
      } else {
        res.status === 201 && router.push("/");
      }
    } catch (err) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        general: err.message,
      }));
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className='flex items-center mb-4 mt-2'>
        <input
          type='checkbox'
          name='agreement'
          id='agreement'
          className='text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3'
          checked={agree}
          onChange={() => setAgree((prev) => !prev)}
          disabled={loading}
        />
        <label
          htmlFor='agreement'
          className='text-gray-600 ml-3 cursor-pointer text-sm'
        >
          I agree to the
          <Link href='#' className='text-primary'>
            terms & conditions
          </Link>
        </label>
      </div>
      {errors.general && <span className='text-red-500'>{errors.general}</span>}
      <button
        onClick={handlePlaceOrder}
        className='block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium'
        disabled={loading}
      >
        {loading ? "Placing Order..." : "Place Order"}
      </button>
    </>
  );
}

export default OrderBtn;
