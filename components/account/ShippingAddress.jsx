"use client";
import { useEffect, useRef, useState } from "react";
import Portal from "../common/Portal";
import ShippingModal from "../common/modal/shipping/ShippingModal";
import LoadingSpinner from "../common/ui/loader/LoadingSpinner";

function ShippingAddress({ profile }) {
  const [shippingInfo, setShippingInfo] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const prevShippingeRef = useRef();
  const closeModal = (event) => {
    if (event) {
      event.stopPropagation();
    }
    setShowModal(false);
  };

  useEffect(() => {
    const prevShipping = prevShippingeRef.current;

    if (profile?.name) {
      const newShippingInfo = {
        id: profile?.id,
        shipping_address: {
          name: profile?.shipping_address?.name || "",
          contact: profile?.shipping_address?.contact || "",
          street_address: profile?.shipping_address?.street_address || "",
          city: profile?.shipping_address?.city || "",
          postal_code: profile?.shipping_address?.postal_code || "",
          country: profile?.shipping_address?.country || "",
        },
      };

      if (JSON.stringify(newShippingInfo) !== JSON.stringify(prevShipping)) {
        setShippingInfo(newShippingInfo);
        prevShippingeRef.current = newShippingInfo; // Update the previous profile info
      }
    }
  }, [profile]);

  return (
    <div className='shadow rounded bg-[rgb(249_250_252)] px-4 pt-6 pb-8'>
      <div className='flex items-center justify-between mb-4'>
        <h3 className='font-medium text-gray-800 text-lg'>Shipping address</h3>
        <button onClick={() => setShowModal(true)} className='text-primary'>
          {profile?.shipping_address && profile?.shipping_address?.name !== ""
            ? "edit"
            : "add"}
        </button>
      </div>
      {profile?.shipping_address && profile?.shipping_address?.name !== "" ? (
        <div className='space-y-1'>
          <h4 className='text-gray-700 font-medium'>
            {profile?.shipping_address?.name}
          </h4>
          <p className='text-gray-800'>{profile?.shipping_address?.contact}</p>
          <p className='text-gray-800'>
            {profile?.shipping_address?.street_address}
          </p>
          <p className='text-gray-800'>
            {profile?.shipping_address?.postal_code},{" "}
            {profile?.shipping_address?.city}
          </p>
          <p className='text-gray-800'>{profile?.shipping_address?.country}</p>
        </div>
      ) : (
        <div className='flex justify-center items-center'>
          <p className='font-medium text-sm'>
            To add shipping address click{" "}
            <span className='font-bold italic font-serif'>"add"</span> button
          </p>
        </div>
      )}
      {showModal && (
        <Portal>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <ShippingModal
              shippingInfo={shippingInfo}
              onClose={closeModal}
              setIsloading={setIsloading}
            />
          )}
        </Portal>
      )}
    </div>
  );
}

export default ShippingAddress;
