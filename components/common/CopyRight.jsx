import methodImg from "@/public/images/methods.png";
import Image from "next/image";

function CopyRight() {
  return (
    <div className='bg-gray-800 py-4'>
      <div className='container flex items-center justify-between'>
        <p className='text-white'>&copy; TailCommerce - All Right Reserved</p>
        <div className='justify-self-end w-60'>
          <Image src={methodImg} alt='methods' className='h-5' />
        </div>
      </div>
    </div>
  );
}

export default CopyRight;
