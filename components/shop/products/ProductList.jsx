import NewArrivalItem from "@/components/home/newArrival/NewArrivalItem";

function ProductList({ products }) {
  return (
    <div className='col-span-3'>
      <div className='grid md:grid-cols-3 grid-cols-2 gap-6'>
        {products.length === 0 ? (
          <div className='col-span-full flex justify-center items-center h-full'>
            <p className='text-rose-700 font-medium text-xl'>
              No product found!! please try again.
            </p>
          </div>
        ) : (
          <>
            {products.map((data) => (
              <NewArrivalItem key={data.id} data={data} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default ProductList;
