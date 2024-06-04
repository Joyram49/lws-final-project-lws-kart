"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function UpdateForm({ billingInfo, onClose, setIsloading }) {
  const [updatedProfile, setUpdatedProfile] = useState(billingInfo);
  const router = useRouter();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUpdatedProfile((prevProfile) => ({
      ...prevProfile,
      billing_address: {
        ...prevProfile.billing_address,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (event) => {
    event.stopPropagation();
    event.preventDefault();
    try {
      const res = await fetch(`/api/user/${updatedProfile.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ updatedProfile, address: true }),
      });
      if (res?.status === 200) {
        console.log(await res.json());
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
      <div className='w-full flex gap-x-4 justify-between px-5'>
        <div className='w-full flex flex-col '>
          <label
            htmlFor='name'
            className='font-poppins font-medium text-slate-800 mb-1'
          >
            Name:{" "}
          </label>
          <input
            id='name'
            type='text'
            name='name'
            className='w-full ring-1 ring-slate-800/10 shadow-sm border-none rounded-sm pl-2 py-1 text-slate-800 font-roboto'
            value={updatedProfile?.billing_address?.name}
            onChange={handleChange}
          />
        </div>
        <div className='w-full flex flex-col'>
          <label
            htmlFor='contact'
            className='font-poppins font-medium text-slate-800 mb-1'
          >
            Contact:{" "}
          </label>
          <input
            id='contact'
            type='text'
            name='contact'
            className='w-full ring-1 ring-slate-800/10 shadow-sm border-none rounded-sm pl-2 py-1 text-slate-800 font-roboto'
            value={updatedProfile?.billing_address?.contact}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className='w-full flex flex-col px-5'>
        <label
          htmlFor='street_address'
          className='font-poppins font-medium text-slate-800 mb-1'
        >
          Street Address:{" "}
        </label>
        <input
          id='street_address'
          type='text'
          name='street_address'
          className='w-full ring-1 ring-slate-800/10 shadow-sm border-none rounded-sm pl-2 py-1 text-slate-800 font-roboto'
          value={updatedProfile?.billing_address?.street_address}
          onChange={handleChange}
        />
      </div>

      <div className='w-full flex justify-between gap-x-4 px-5'>
        <div className='w-full flex flex-col'>
          <label
            htmlFor='city'
            className='font-poppins font-medium text-slate-800 mb-1'
          >
            City:{" "}
          </label>
          <input
            id='city'
            type='text'
            name='city'
            className='w-full ring-1 ring-slate-800/10 shadow-sm border-none rounded-sm pl-2 py-1 text-slate-800 font-roboto'
            value={updatedProfile?.billing_address?.city}
            onChange={handleChange}
          />
        </div>
        <div className='w-full flex flex-col'>
          <label
            htmlFor='postal_code'
            className='font-poppins font-medium text-slate-800 mb-1'
          >
            Postal Code:{" "}
          </label>
          <input
            id='postal_code'
            type='text'
            name='postal_code'
            className='w-full ring-1 ring-slate-800/10 shadow-sm border-none rounded-sm pl-2 py-1 text-slate-800 font-roboto'
            value={updatedProfile?.billing_address?.postal_code}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='w-full flex flex-col px-5'>
        <label
          htmlFor='country'
          className='font-poppins font-medium text-slate-800 mb-1'
        >
          Country:{" "}
        </label>
        <input
          id='country'
          type='text'
          name='country'
          className='w-full ring-1 ring-slate-800/10 shadow-sm border-none rounded-sm pl-2 py-1 text-slate-800 font-roboto'
          value={updatedProfile?.billing_address?.country}
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
