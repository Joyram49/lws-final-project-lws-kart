"use client";

import { login } from "@/app/actions";
import usePreviousRoute from "@/app/hooks/usePreviousRoute";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SubmitButton from "./SubmitButton";

function LoginForm() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const previousRoute = usePreviousRoute();
  const router = useRouter();

  useEffect(() => {
    if (previousRoute && previousRoute !== router.asPath) {
      console.log("Previous route:", previousRoute);
      console.log("Current route:", router.asPath);
    }
  }, [router.asPath]);

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const formData = new FormData(event.currentTarget);
      const response = await login(formData);
      if (response.error) {
        setError(response.error);
      } else {
        router.push("/shop");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {error && <div className='text-xl text-red-500 text-center'>{error}</div>}

      <form method='post' autoComplete='off' onSubmit={onSubmit}>
        <div className='space-y-2'>
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
        </div>
        <div className='flex items-center justify-between mt-6'>
          <div className='flex items-center'>
            <input
              type='checkbox'
              name='remember'
              id='remember'
              className='text-primary focus:ring-0 rounded-sm cursor-pointer'
            />
            <label
              htmlFor='remember'
              className='text-gray-600 ml-3 cursor-pointer'
            >
              Remember me
            </label>
          </div>
          <Link href='#' className='text-primary'>
            Forgot password
          </Link>
        </div>
        <div className='mt-4'>
          <SubmitButton loading={loading} login={true} />
        </div>
      </form>
    </>
  );
}

export default LoginForm;
