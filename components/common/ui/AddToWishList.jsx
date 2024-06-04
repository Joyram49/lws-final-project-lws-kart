"use client";
import { updateWishList } from "@/app/actions";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

function AddToWishList({ productId, session, isInclude }) {
  const router = useRouter();

  const handleWishList = async () => {
    if (!session) {
      router.push("/login");
      return;
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
      className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
      title='add to wishlist'
    >
      {isInclude ? (
        <FontAwesomeIcon icon={solidHeart} />
      ) : (
        <FontAwesomeIcon icon={faHeart} />
      )}
    </button>
  );
}

export default AddToWishList;
