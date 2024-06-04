"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SubmitButton from "./SubmitButton";

function RegistratioForm() {
  const [error, setError] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const formData = new FormData(event.currentTarget);
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const confirmPasswored = formData.get("confirm");
      const agreement = formData.get("agreement");
      if (!agree) {
        throw new Error("Please accept T&C first to register an account!");
      }
      if (password === "" || password !== confirmPasswored) {
        throw new Error("Passwords do not match!!!");
      }

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.status === 400) {
        throw new Error("Email already Exist");
      }
      res.status === 201 && router.push("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className='text-xl text-red-500 text-center'>{error && error}</div>
      <form action='#' method='post' autoComplete='off' onSubmit={onSubmit}>
        <div className='space-y-2'>
          <div>
            <label htmlFor='name' className='text-gray-600 mb-2 block'>
              Full Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400'
              placeholder='fulan fulana'
            />
          </div>
          <div>
            <label htmlFor='email' className='text-gray-600 mb-2 block'>
              Email address
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400'
              placeholder='youremail.@domain.com'
            />
          </div>
          <div>
            <label htmlFor='password' className='text-gray-600 mb-2 block'>
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400'
              placeholder='*******'
            />
          </div>
          <div>
            <label htmlFor='confirm' className='text-gray-600 mb-2 block'>
              Confirm password
            </label>
            <input
              type='password'
              name='confirm'
              id='confirm'
              className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400'
              placeholder='*******'
            />
          </div>
        </div>
        <div className='mt-6'>
          <div className='flex items-center'>
            <input
              type='checkbox'
              name='aggrement'
              id='aggrement'
              className='text-primary focus:ring-0 rounded-sm cursor-pointer'
              checked={agree}
              onChange={() => setAgree((prev) => !prev)}
              disabled={loading}
            />
            <label
              htmlFor='aggrement'
              className='text-gray-600 ml-3 cursor-pointer'
            >
              I have read and agree to the
              <Link href='#' className='text-primary'>
                terms & conditions
              </Link>
            </label>
          </div>
        </div>
        <div className='mt-4'>
          <SubmitButton loading={loading} />
        </div>
      </form>
    </>
  );
}

export default RegistratioForm;
