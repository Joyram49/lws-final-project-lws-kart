import Link from "next/link";

function ShopBtn() {
  return (
    <Link
      href='/shop'
      className='bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary'
    >
      Shop Now
    </Link>
  );
}

export default ShopBtn;
