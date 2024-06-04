"use client";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Portal from "../Portal";
import WishListModal from "../modal/wishList/WishListModal";
import LoadingSpinner from "../ui/loader/LoadingSpinner";

function WishListBtn({ wishList, sessionId }) {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const router = useRouter();
  const closeModal = (event) => {
    if (event) {
      event.stopPropagation();
    }
    setShowModal(false);
  };

  const handleWishListBtn = () => {
    if (!sessionId) {
      router.push("/login");
      return;
    }
    setShowModal(true);
  };

  return (
    <div
      onClick={handleWishListBtn}
      className='cursor-pointer text-center text-gray-700 hover:text-primary transition relative'
    >
      <div className='text-2xl'>
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <div className='text-xs leading-3'>Wishlist</div>
      <div className='absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs'>
        {(wishList?.userId && wishList?.productIds?.length) || 0}
      </div>
      {showModal && (
        <Portal>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <WishListModal
              wishList={wishList}
              onClose={closeModal}
              setIsloading={setIsloading}
            />
          )}
        </Portal>
      )}
    </div>
  );
}

export default WishListBtn;
