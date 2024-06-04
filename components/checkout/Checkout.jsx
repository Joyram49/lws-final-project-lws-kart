"use client";

import { useCheckout } from "@/app/hooks/useCheckout";
import { z } from "zod";

const checkoutSchema = z.object({
  firstName: z.string().nonempty({ message: "First name is required" }),
  lastName: z.string().nonempty({ message: "Last name is required" }),
  company: z.string().optional(),
  region: z.string().optional(),
  street_address: z
    .string()
    .nonempty({ message: "Street address is required" }),
  city: z.string().nonempty({ message: "City is required" }),
  contact: z.string().nonempty({ message: "Phone number is required" }),
  email: z.string().email({ message: "Invalid email address" }),
});

function Checkout() {
  const { checkoutInfo, setCheckoutInfo, errors, setErrors } = useCheckout();

  const handleChange = (event) => {
    const { value, name } = event.target;
    const updatedInfo = {
      ...checkoutInfo,
      [name]: value,
    };

    // Validate the updated info
    try {
      checkoutSchema.parse(updatedInfo);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: null,
      }));
    } catch (err) {
      if (err.errors) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: err.errors.find((error) => error.path.includes(name))
            ?.message,
        }));
      }
    }

    setCheckoutInfo(updatedInfo);
  };

  return (
    <div className='col-span-8 border border-gray-200 p-4 rounded'>
      <h3 className='text-lg font-medium capitalize mb-4'>Checkout</h3>
      <div className='space-y-4'>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label htmlFor='first-name' className='text-gray-600'>
              First Name <span className='text-primary'>*</span>
            </label>
            <input
              type='text'
              name='firstName'
              id='first-name'
              className='input-box'
              value={checkoutInfo?.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <span className='text-red-500'>{errors.firstName}</span>
            )}
          </div>
          <div>
            <label htmlFor='last-name' className='text-gray-600'>
              Last Name <span className='text-primary'>*</span>
            </label>
            <input
              type='text'
              name='lastName'
              id='last-name'
              className='input-box'
              value={checkoutInfo?.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <span className='text-red-500'>{errors.lastName}</span>
            )}
          </div>
        </div>
        <div>
          <label htmlFor='company' className='text-gray-600'>
            Company
          </label>
          <input
            type='text'
            name='company'
            id='company'
            className='input-box'
            value={checkoutInfo?.company}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='region' className='text-gray-600'>
            Country/Region
          </label>
          <input
            type='text'
            name='region'
            id='region'
            className='input-box'
            value={checkoutInfo?.region}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='address' className='text-gray-600'>
            Street address
          </label>
          <input
            type='text'
            name='street_address'
            id='address'
            className='input-box'
            value={checkoutInfo?.street_address}
            onChange={handleChange}
          />
          {errors.street_address && (
            <span className='text-red-500'>{errors.street_address}</span>
          )}
        </div>
        <div>
          <label htmlFor='city' className='text-gray-600'>
            City
          </label>
          <input
            type='text'
            name='city'
            id='city'
            className='input-box'
            value={checkoutInfo?.city}
            onChange={handleChange}
          />
          {errors.city && <span className='text-red-500'>{errors.city}</span>}
        </div>
        <div>
          <label htmlFor='phone' className='text-gray-600'>
            Phone number
          </label>
          <input
            type='text'
            name='contact'
            id='phone'
            className='input-box'
            value={checkoutInfo?.contact}
            onChange={handleChange}
          />
          {errors.contact && (
            <span className='text-red-500'>{errors.contact}</span>
          )}
        </div>
        <div>
          <label htmlFor='email' className='text-gray-600'>
            Email address
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className='input-box'
            value={checkoutInfo?.email}
            onChange={handleChange}
          />
          {errors.email && <span className='text-red-500'>{errors.email}</span>}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
