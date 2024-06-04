import Image from "next/image";
import Link from "next/link";

function CategoryItem({ data }) {
  const { thumbnailUrl, name } = data || {};
  return (
    <div className='relative w-full h-64 rounded-sm overflow-hidden block group'>
      <Image fill src={thumbnailUrl} alt={name} className=' object-cover' />
      <Link
        href='#'
        className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition'
      >
        {name}
      </Link>
    </div>
  );
}

export default CategoryItem;
