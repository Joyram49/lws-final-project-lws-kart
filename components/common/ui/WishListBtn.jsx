"use client";
import { updateWishList } from "@/app/actions";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

function WishListBtn({ session, productId, isInclude }) {
  const router = useRouter();
  const handleWishList = async () => {
    if (!session?.id) {
      router.push("/login");
    }
    try {
      await updateWishList(session.id, productId);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <button
      onClick={handleWishList}
      className='border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition'
    >
      {isInclude ? (
        <>
          <FontAwesomeIcon icon={solidHeart} /> <span>Wishlisted</span>
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={faHeart} /> <span>Wishlist</span>
        </>
      )}{" "}
    </button>
  );
}

export default WishListBtn;
