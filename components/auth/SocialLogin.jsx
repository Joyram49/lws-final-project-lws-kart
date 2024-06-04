"use client";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";

function SocialLogin() {
  const handleAuth = async (provider) => {
    await signIn(provider, {
      callbackUrl: window.location.origin,
    });
  };
  return (
    <div className='mt-4 flex gap-4'>
      <button
        onClick={(e) => handleAuth("facebook")}
        className='w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700'
      >
        <span className='mr-2'>
          <FontAwesomeIcon icon={faFacebookF} />
        </span>
        facebook
      </button>
      <button
        onClick={(e) => handleAuth("google")}
        className='w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500'
      >
        <span className='mr-2'>
          <FontAwesomeIcon icon={faGoogle} />
        </span>
        google
      </button>
    </div>
  );
}

export default SocialLogin;
