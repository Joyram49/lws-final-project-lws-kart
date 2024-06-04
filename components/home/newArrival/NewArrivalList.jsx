import { getNewestProducts } from "@/lib/queries/products";
import NewArrivalItem from "./NewArrivalItem";

async function NewArrivalList() {
  const newArraivalList = await getNewestProducts();
  return (
    <div className='container pb-16'>
      <h2 className='text-2xl font-medium text-gray-800 uppercase mb-6'>
        top new arrival
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
        {newArraivalList.map((item) => (
          <NewArrivalItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default NewArrivalList;
