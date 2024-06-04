import CategoryCheck from "./CategoryCheck";

async function Categories({ products }) {
  const categoryArray = [];
  products.forEach((product) => {
    if (!categoryArray.includes(product.categoryId.name)) {
      categoryArray.push({
        categoryName: product.categoryId.name,
        quantity: 1,
      });
    }
  });

  const resultMap = categoryArray.reduce((acc, { categoryName, quantity }) => {
    if (!acc[categoryName]) {
      acc[categoryName] = 0;
    }
    acc[categoryName] += quantity;
    return acc;
  }, {});

  const categorizedArray = Object.entries(resultMap).map(
    ([category, quantity]) => ({
      category,
      quantity,
    })
  );
  return (
    <div>
      <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>
        Categories
      </h3>
      <div className='space-y-2'>
        {categorizedArray?.length > 0 &&
          categorizedArray.map((category) => (
            <CategoryCheck key={category.category} data={category} />
          ))}
      </div>
    </div>
  );
}

export default Categories;
