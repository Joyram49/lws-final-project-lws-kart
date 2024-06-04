"use client";
import { removeSession } from "@/app/actions";

function Logout() {
  // async function deleteCookie(formData) {
  //   "use server";
  //   await removeSession();
  // }
  return (
    <button
      onClick={async () => await removeSession()}
      type='submit'
      className='text-gray-200 hover:text-white transition'
    >
      logout
    </button>
  );
}

export default Logout;
