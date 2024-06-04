import Checkout from "@/components/checkout/Checkout";
import OrderSummary from "@/components/checkout/OrderSummary";
import { getCartItemForUser } from "@/lib/queries/carts";
import { getSession } from "@/lib/utils/getSession";
import Link from "next/link";
import { redirect } from "next/navigation";

async function CheckoutPage() {
  const session = await getSession();
  let cart = {};
  if (session?.id) {
    cart = await getCartItemForUser(session.id);
  } else {
    redirect("/login");
  }
  return (
    <div className='container grid grid-cols-12 items-start pb-16 pt-4 gap-6'>
      {cart?.products ? (
        <>
          <Checkout />
          <OrderSummary cart={cart} />
        </>
      ) : (
        <div className='col-span-full h-full flex flex-col justify-center items-center'>
          <h1 className='text-rose-600 font-medium text-lg'>
            You haven't added any item's to your cart list!
          </h1>
          <Link
            href='/'
            className='bg-primary px-3 py-1.5 rounded-md shadow hover:bg-rose-600 text-white mt-2'
          >
            Do Shopping
          </Link>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
