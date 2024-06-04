"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Portal from "../common/Portal";
import ProfileModal from "../common/modal/profileModal/ProfileModal";
import LoadingSpinner from "../common/ui/loader/LoadingSpinner";

function Profile({ profile }) {
  const [profileInfo, setProfileInfo] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const prevProfileRef = useRef();
  const closeModal = (event) => {
    if (event) {
      event.stopPropagation();
    }
    setShowModal(false);
  };

  useEffect(() => {
    const prevProfile = prevProfileRef.current;

    if (profile?.name) {
      const namedArray = profile.name.split(" ");
      const newProfileInfo = {
        id: profile?.id,
        firstName: namedArray[0],
        lastName: namedArray[1] || "",
        email: profile?.email,
        phone: profile?.phone || "#########",
      };

      if (JSON.stringify(newProfileInfo) !== JSON.stringify(prevProfile)) {
        setProfileInfo(newProfileInfo);
        prevProfileRef.current = newProfileInfo; // Update the previous profile info
      }
    }
  }, [profile]);

  return (
    <div className='shadow rounded bg-[rgb(249_250_252)] px-4 pt-6 pb-8'>
      <div className='flex items-center justify-between mb-4'>
        <h3 className='font-medium text-gray-800 text-lg'>Personal Profile</h3>
        <button className='text-primary' onClick={() => setShowModal(true)}>
          Edit
        </button>
      </div>
      <div className='block relative h-16 w-16 text-center'>
        {profileInfo?.image ? (
          <Image
            fill
            src={profile?.image}
            alt={profileInfo?.firstName}
            className='object-cover w-full rounded-full'
          />
        ) : (
          <div className='bg-primary rounded-full w-full h-full flex justify-center items-center'>
            <p className='font-bold text-2xl text-white'>
              {profileInfo?.firstName &&
                profileInfo?.firstName.substr(0, 1).toUpperCase()}
            </p>
          </div>
        )}
      </div>
      <div className='space-y-1'>
        <div className='flex gap-x-2'>
          <h4 className='text-gray-700 font-medium'>
            {profileInfo?.firstName}
          </h4>
          <h4 className='text-gray-700 font-medium'>{profileInfo?.lastName}</h4>
        </div>
        <p className='text-gray-800'>{profileInfo?.email}</p>
        <p className='text-gray-800'>{profileInfo?.phone}</p>
      </div>
      {showModal && (
        <Portal>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <ProfileModal
              profile={profileInfo}
              onClose={closeModal}
              setIsloading={setIsloading}
            />
          )}
        </Portal>
      )}
    </div>
  );
}

export default Profile;
