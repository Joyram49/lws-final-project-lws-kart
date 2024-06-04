"use client";

import { updateWishList } from "@/app/actions";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RemoveWishListBtn({ userId, productId }) {
  async function removeFromWishList() {
    await updateWishList(userId, productId);
  }
  return (
    <div
      className='text-gray-600 cursor-pointer hover:text-primary'
      onClick={removeFromWishList}
    >
      <FontAwesomeIcon icon={faTrashAlt} />
    </div>
  );
}

export default RemoveWishListBtn;
