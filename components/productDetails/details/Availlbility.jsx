function Availlbility({ stock }) {
  const text = stock === 0 ? "Out of stock" : "In stock";
  return (
    <p className='text-gray-800 font-semibold space-x-2'>
      <span>Availability: </span>
      <span className={stock === 0 ? "text-rose-500" : "text-green-600"}>
        {text}
      </span>
    </p>
  );
}

export default Availlbility;
