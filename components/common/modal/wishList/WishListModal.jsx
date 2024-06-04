"use client";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import WishItemCard from "./WishItemCard";

function WishListModal({ onClose, wishList, setIsloading }) {
  const wrapperRef = useRef();
  const router = useRouter();

  // below is the same as componentDidMount and componentDidUnmount
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      onClose();
    }
  };

  const handleViewAll = (event) => {
    event.stopPropagation();
    if (wishList?.userId) {
      router.push(`/account/${wishList.userId}/wishlist`);
      onClose();
    }
  };

  return (
    <>
      <div className='w-full h-full absolute inset-0 bg-white/30 backdrop-blur-sm'></div>
      <div
        ref={wrapperRef}
        className='bg-white w-[320px] max-h-[320px] absolute top-[40px] right-0 rounded-md drop-shadow-md ring-[2px] ring-white p-2 overflow-y-scroll z-100'
      >
        {/* top section */}
        <div className='flex justify-center gap-x-2 mt-3'>
          <div className='text-[#e74e4e] text-2xl'>
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <h1 className='text-rose-500 font-semibold font-poppins text-lg text-center'>
            Your Wish List
          </h1>
        </div>
        {/* wish lists */}
        {!wishList?.productIds ? (
          <div>
            <p className='text-slate-800 font-medium text-center'>
              You havn't select any items!
            </p>
          </div>
        ) : (
          <>
            {wishList?.productIds?.length === 0 ? (
              <div>
                <p className='text-slate-800 font-medium text-center'>
                  There is no item in the wish list
                </p>
              </div>
            ) : (
              <ul className='space-y-2 mx-auto list-inside list-decimal '>
                {wishList.productIds.map((data) => (
                  <WishItemCard
                    key={data?.id}
                    data={data}
                    onClose={onClose}
                    setIsloading={setIsloading}
                  />
                ))}
              </ul>
            )}{" "}
          </>
        )}

        {/* bottom section close and view all buttons */}
        <div className='w-full flex justify-center items-center mt-4 gap-x-2 '>
          <div className=''>
            <button
              onClick={onClose}
              className='bg-red-500 px-3 py-1 rounded-md shadow-md border hover:bg-red-600 text-white transition duration-150 ease-in'
            >
              close
            </button>
          </div>
          <div className=''>
            <button
              disabled={
                !wishList?.productIds || wishList?.productIds.length === 0
              }
              onClick={handleViewAll}
              className='bg-red-500 px-3 py-1 rounded-md shadow-md border hover:bg-red-600 text-white transition duration-150 ease-in disabled:bg-slate-600'
            >
              view all
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WishListModal;
