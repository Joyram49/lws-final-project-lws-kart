"use client";
import BillingModal from "@/components/common/modal/billing/BillingModal";
import { useEffect, useRef, useState } from "react";
import Portal from "../common/Portal";
import LoadingSpinner from "../common/ui/loader/LoadingSpinner";

function BillingAddress({ profile }) {
  const [billingInfo, setbillingInfo] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const prevbillingeRef = useRef();
  const closeModal = (event) => {
    if (event) {
      event.stopPropagation();
    }
    setShowModal(false);
  };

  useEffect(() => {
    const prevbilling = prevbillingeRef.current;

    if (profile?.name) {
      const newbillingInfo = {
        id: profile?.id,
        billing_address: {
          name: profile?.billing_address?.name || "",
          contact: profile?.billing_address?.contact || "",
          street_address: profile?.billing_address?.street_address || "",
          city: profile?.billing_address?.city || "",
          postal_code: profile?.billing_address?.postal_code || "",
          country: profile?.billing_address?.country || "",
        },
      };

      if (JSON.stringify(newbillingInfo) !== JSON.stringify(prevbilling)) {
        setbillingInfo(newbillingInfo);
        prevbillingeRef.current = newbillingInfo; // Update the previous profile info
      }
    }
  }, [profile]);

  return (
    <div className='shadow rounded bg-[rgb(249_250_252)] px-4 pt-6 pb-8'>
      <div className='flex items-center justify-between mb-4'>
        <h3 className='font-medium text-gray-800 text-lg'>billing address</h3>
        <button onClick={() => setShowModal(true)} className='text-primary'>
          {profile?.billing_address && profile?.billing_address?.name !== ""
            ? "edit"
            : "add"}
        </button>
      </div>
      {profile?.billing_address && profile?.billing_address?.name !== "" ? (
        <div className='space-y-1'>
          <h4 className='text-gray-700 font-medium'>
            {profile?.billing_address?.name}
          </h4>
          <p className='text-gray-800'>{profile?.billing_address?.contact}</p>
          <p className='text-gray-800'>
            {profile?.billing_address?.street_address}
          </p>
          <p className='text-gray-800'>
            {profile?.billing_address?.postal_code},{" "}
            {profile?.billing_address?.city}
          </p>
          <p className='text-gray-800'>{profile?.billing_address?.country}</p>
        </div>
      ) : (
        <div className='flex justify-center items-center'>
          <p className='font-medium text-sm'>
            To add billing address click{" "}
            <span className='font-bold italic font-serif'>"add"</span> button
          </p>
        </div>
      )}
      {showModal && (
        <Portal>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <BillingModal
              billingInfo={billingInfo}
              onClose={closeModal}
              setIsloading={setIsloading}
            />
          )}
        </Portal>
      )}
    </div>
  );
}

export default BillingAddress;
