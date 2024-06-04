import ShopBtn from "./ShopBtn";

function Banner() {
  return (
    <div className='custom-background py-36'>
      <div className='container'>
        <h1 className='text-6xl text-gray-800 font-medium mb-4 capitalize'>
          best collection for <br />
          home decoration
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          <br />
          accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores
          odio
        </p>
        <div className='mt-12'>
          <ShopBtn />
        </div>
      </div>
    </div>
  );
}

export default Banner;
