"use client";
import { FacebookShare, LinkedinShare, TwitterShare } from "react-share-kit";

function SocialSharing({ title, productId, description, categoryName }) {
  const shareUrl = `https://lws-final-project-lws-kart.vercel.app/product-details/${productId}`;
  return (
    <ul className='flex gap-3 mt-4'>
      <li className='text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center'>
        <FacebookShare
          url={shareUrl}
          quote={description}
          size={32}
          title={title}
          round
        />
      </li>
      <li className='text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center'>
        <TwitterShare
          url={shareUrl}
          quote={description}
          size={32}
          title={title}
          round
        />
      </li>
      <li className='text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center'>
        <LinkedinShare
          url={shareUrl}
          quote={description}
          size={32}
          title={title}
          round
        />
      </li>
    </ul>
  );
}

export default SocialSharing;
