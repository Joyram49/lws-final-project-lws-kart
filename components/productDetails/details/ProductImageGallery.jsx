"use client";
import Image from "next/image";
import { useState } from "react";

function ProductImageGallery({ images, thumbnail, title }) {
  const [activeImage, setActiveImage] = useState(thumbnail);

  return (
    <div>
      <div className='relative block w-full h-[400px]'>
        <Image
          fill
          src={activeImage}
          alt={title}
          className='w-full object-cover'
        />
      </div>
      <div className='grid grid-cols-5 gap-4 mt-4 '>
        <div className='relative block w-full h-20'>
          <Image
            fill
            src={images[0]}
            alt={title}
            className={`w-full cursor-pointer border ${
              activeImage === images[0] && "border-primary"
            }  object-cover`}
            onClick={() => setActiveImage(images[0])}
          />
        </div>
        <div className='relative block w-full h-20'>
          <Image
            fill
            src={images[1]}
            alt={title}
            className={`w-full cursor-pointer border ${
              activeImage === images[1] && "border-primary"
            }  object-cover`}
            onClick={() => setActiveImage(images[1])}
          />
        </div>
        <div className='relative block w-full h-20'>
          <Image
            fill
            src={images[2]}
            alt={title}
            className={`w-full cursor-pointer border ${
              activeImage === images[2] && "border-primary"
            }  object-cover`}
            onClick={() => setActiveImage(images[2])}
          />
        </div>
        <div className='relative block w-full h-20'>
          <Image
            fill
            src={images[3]}
            alt={title}
            className={`w-full cursor-pointer border ${
              activeImage === images[3] && "border-primary"
            }  object-cover`}
            onClick={() => setActiveImage(images[3])}
          />
        </div>
        <div className='relative block w-full h-20'>
          <Image
            fill
            src={images[4]}
            alt={title}
            className={`w-full cursor-pointer border ${
              activeImage === images[4] && "border-primary"
            }  object-cover`}
            onClick={() => setActiveImage(images[4])}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductImageGallery;
