"use client";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import UpdateForm from "./UpdateForm";

function BillingModal({ billingInfo, onClose, setIsloading }) {
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

  return (
    <>
      <div className='w-full h-full absolute inset-0 bg-white/30 backdrop-blur-sm'></div>
      <div
        ref={wrapperRef}
        className=' bg-[rgb(249_250_251)] min-w-[600px] max-h-[500px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-sm drop-shadow-md ring-[2px] ring-white p-2  z-100'
      >
        {/* top section */}
        <div className='flex justify-center items-center gap-x-2 mt-3'>
          <div className=' text-cyan-600 text-2xl'>
            <FontAwesomeIcon icon={faEdit} />
          </div>
          <h1 className='text-slate-800 font-semibold font-poppins text-xl text-center'>
            billing Address
          </h1>
        </div>
        {/* form */}
        <UpdateForm
          billingInfo={billingInfo}
          onClose={onClose}
          setIsloading={setIsloading}
        />
      </div>
    </>
  );
}

export default BillingModal;
