"use client";
import { addToCart } from "@/app/actions";
import { useQuantity } from "@/app/hooks/useQuantity";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

function AddToCartBtn({ source, productId, session }) {
  const { quantity } = useQuantity();
  const router = useRouter();
  const handleCart = async () => {
    if (!session) {
      router.push("/login");
      return;
    }
    try {
      await addToCart(session?.id, productId, quantity);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <button
      onClick={handleCart}
      className='bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center justify-center gap-2 hover:bg-transparent hover:text-primary transition '
    >
      {source === "details" && <FontAwesomeIcon icon={faBagShopping} />} Add to
      cart
    </button>
  );
}

export default AddToCartBtn;
