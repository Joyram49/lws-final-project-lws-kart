"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function UpdateForm({ profile, onClose, setIsloading }) {
  const [updatedProfile, setUpdatedProfile] = useState(profile);
  const router = useRouter();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUpdatedProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.stopPropagation();
    event.preventDefault();
    try {
      const res = await fetch(`/api/user/${profile.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ updatedProfile, address: false }),
      });
      if (res?.status === 200) {
        router.replace(`/account/${updatedProfile.id}`);
        onClose();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form
      className='w-full flex flex-col items-start justify-center gap-y-4 mt-6'
      onSubmit={handleSubmit}
    >
      <div className='w-full flex justify-between px-5'>
        <div className='w-full flex flex-col '>
          <label
            htmlFor='fName'
            className='font-poppins font-medium text-slate-800 mb-1'
          >
            First Name:{" "}
          </label>
          <input
            id='fName'
            type='text'
            name='firstName'
            className='w-full ring-1 ring-slate-800/10 shadow-sm border-none rounded-sm pl-2 py-1 text-slate-800 font-roboto'
            value={updatedProfile?.firstName}
            onChange={handleChange}
          />
        </div>
        <div className='w-full flex flex-col '>
          <label
            htmlFor='lastName'
            className='font-poppins font-medium text-slate-800 mb-1'
          >
            Last Name:{" "}
          </label>
          <input
            id='lastName'
            type='text'
            name='lastName'
            className='w-full ring-1 ring-slate-800/10 shadow-sm border-none rounded-sm pl-2 py-1 text-slate-800 font-roboto'
            value={updatedProfile?.lastName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className='w-full flex flex-col px-5'>
        <label
          htmlFor='email'
          className='font-poppins font-medium text-slate-800 mb-1'
        >
          Email:{" "}
        </label>
        <input
          id='email'
          type='email'
          name='email'
          className='w-full ring-1 ring-slate-800/10 shadow-sm border-none rounded-sm pl-2 py-1 text-slate-800 font-roboto'
          value={updatedProfile?.email}
          onChange={handleChange}
        />
      </div>

      <div className='w-full flex flex-col px-5'>
        <label
          htmlFor='phone'
          className='font-poppins font-medium text-slate-800 mb-1'
        >
          Contact Number:{" "}
        </label>
        <input
          id='phone'
          type='text'
          name='phone'
          className='w-full ring-1 ring-slate-800/10 shadow-sm border-none rounded-sm pl-2 py-1 text-slate-800 font-roboto'
          value={updatedProfile?.phone}
          onChange={handleChange}
        />
      </div>

      <div className='w-full flex justify-center items-center mt-4 gap-x-2 '>
        <div className=''>
          <button
            onClick={onClose}
            className='bg-cyan-600 px-3 py-1 rounded-md shadow-md border hover:bg-cyan-700 text-white transition duration-150 ease-in'
          >
            cancel
          </button>
        </div>
        <div className=''>
          <button
            type='submit'
            className='bg-cyan-600 px-3 py-1 rounded-md shadow-md border hover:bg-cyan-700 text-white transition duration-150 ease-in'
          >
            submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default UpdateForm;
