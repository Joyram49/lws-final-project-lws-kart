"use client";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Portal from "../Portal";
import CartsModal from "../modal/cart/CartsModal";

function ShoppingCartBtn({ cartList, sessionId }) {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const closeModal = (event) => {
    if (event) {
      event.stopPropagation();
    }
    setShowModal(false);
  };

  const handleCartListBtn = () => {
    if (!sessionId) {
      router.push("/login");
      return;
    }
    setShowModal(true);
  };

  return (
    <div
      onClick={handleCartListBtn}
      className='cursor-pointer text-center text-gray-700 hover:text-primary transition relative'
    >
      <div className='text-2xl'>
        <FontAwesomeIcon icon={faShoppingBasket} />
      </div>
      <div className='text-xs leading-3'>Cart</div>
      <div className='absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs'>
        {(cartList?.userId && cartList?.products?.length) || 0}
      </div>
      {showModal && (
        <Portal>
          <CartsModal cartList={cartList} onClose={closeModal} />
        </Portal>
      )}
    </div>
  );
}

export default ShoppingCartBtn;
