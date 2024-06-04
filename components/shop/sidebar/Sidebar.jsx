import Categories from "./Categories";
import Price from "./Price";
import Sizes from "./Sizes";

function Sidebar() {
  return (
    <div className='col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hiddenb hidden md:block'>
      <div className='divide-y divide-gray-200 space-y-5'>
        <Categories />

        <Price />

        <Sizes />
      </div>
    </div>
  );
}

export default Sidebar;
