import { getSession } from "@/lib/utils/getSession";
import { removeSession } from "@/lib/utils/removeSession";
import Link from "next/link";
import Logout from "./Logout";
import NavigationBars from "./NavigationBars";

async function Navbar() {
  const session = await getSession();

  const handleLogout = async () => {
    await removeSession();
  };

  return (
    <nav className='bg-gray-800'>
      <div className='container flex'>
        <NavigationBars />

        <div className='flex items-center justify-between flex-grow md:pl-12 py-5'>
          <div className='flex items-center space-x-6 capitalize'>
            <Link
              href='#'
              className='text-gray-200 hover:text-white transition'
            >
              Home
            </Link>
            <Link
              href='#'
              className='text-gray-200 hover:text-white transition'
            >
              Shop
            </Link>
            <Link
              href='#'
              className='text-gray-200 hover:text-white transition'
            >
              About us
            </Link>
            <Link
              href='#'
              className='text-gray-200 hover:text-white transition'
            >
              Contact us
            </Link>
          </div>
          {session?.id ? (
            <Logout />
          ) : (
            <Link
              href='/login'
              className='text-gray-200 hover:text-white transition'
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
