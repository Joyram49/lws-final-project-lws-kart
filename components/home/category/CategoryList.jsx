import { getAllCategories } from "@/lib/queries/categories";
import CategoryItem from "./CategoryItem";

function getRandomCategories(arr, num) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

async function CategoryList() {
  const categoryList = await getAllCategories();
  const filteredCategory = getRandomCategories(categoryList, 6);

  return (
    <div className='container py-16'>
      <h2 className='text-2xl font-medium text-gray-800 uppercase mb-6'>
        shop by category
      </h2>
      <div className='grid grid-cols-3 gap-3'>
        {filteredCategory.map((category) => (
          <CategoryItem key={category.id} data={category} />
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
