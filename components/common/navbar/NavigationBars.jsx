import {
  bed,
  bed2,
  office,
  outdoorCave,
  sofa,
  terrace,
} from "@/public/images/icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

function NavigationBars() {
  return (
    <div className='px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden'>
      <span className='text-white'>
        <FontAwesomeIcon icon={faBars} />
      </span>
      <span className='capitalize ml-2 text-white hidden'>All Categories</span>

      {/* <!-- dropdown --> */}
      <div
        className='absolute left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible w-[600px]'
        style={{ width: "300px" }}
      >
        <Link
          href='#'
          className='flex items-center px-6 py-3 hover:bg-gray-100 transition'
        >
          <Image src={sofa} alt='sofa' className='w-5 h-5 object-contain' />
          <span className='ml-6 text-gray-600 text-sm'>Sofa</span>
        </Link>
        <Link
          href='#'
          className='flex items-center px-6 py-3 hover:bg-gray-100 transition'
        >
          <Image
            src={terrace}
            alt='terrace'
            className='w-5 h-5 object-contain'
          />
          <span className='ml-6 text-gray-600 text-sm'>Living Room</span>
        </Link>
        <Link
          href='#'
          className='flex items-center px-6 py-3 hover:bg-gray-100 transition'
        >
          <Image src={bed} alt='bed' className='w-5 h-5 object-contain' />
          <span className='ml-6 text-gray-600 text-sm'>Bedroom</span>
        </Link>
        <Link
          href='#'
          className='flex items-center px-6 py-3 hover:bg-gray-100 transition'
        >
          <Image
            src={office}
            alt='Outdoor'
            className='w-5 h-5 object-contain'
          />
          <span className='ml-6 text-gray-600 text-sm'>Outdoor</span>
        </Link>
        <Link
          href='#'
          className='flex items-center px-6 py-3 hover:bg-gray-100 transition'
        >
          <Image
            src={outdoorCave}
            alt='outdoor'
            className='w-5 h-5 object-contain'
          />
          <span className='ml-6 text-gray-600 text-sm'>Outdoor Cafe</span>
        </Link>
        <Link
          href='#'
          className='flex items-center px-6 py-3 hover:bg-gray-100 transition'
        >
          <Image src={bed2} alt='Mattress' className='w-5 h-5 object-contain' />
          <span className='ml-6 text-gray-600 text-sm'>Mattress</span>
        </Link>
      </div>
    </div>
  );
}

export default NavigationBars;
