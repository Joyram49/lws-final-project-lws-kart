"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function CategoryCheck({ data }) {
  const { category, quantity } = data;
  const [query, setQuery] = useState([]);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const handleChange = (e) => {
    const checked = e.target.checked;
    const name = e.target.name;
    if (checked) {
      setQuery((prev) => [...prev, name]);
    } else {
      const filtered = query.filter((item) => item !== name);
      setQuery(filtered);
    }
  };
  console.log(query);
  useEffect(() => {
    const category = params.get("category");

    if (category) {
      const decodedCategory = decodeURI(category);
      const queryInCategory = decodedCategory.split("|");
      setQuery(queryInCategory);
    }
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      params.set("category", encodeURI(query.join("|")));
    } else {
      params.delete("category");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [query]);

  return (
    <div className='flex items-center'>
      <input
        type='checkbox'
        name={category}
        id={category}
        className='text-primary focus:ring-0 rounded-sm cursor-pointer'
        checked={query.includes(category)}
        onChange={handleChange}
      />
      <label htmlFor={category} className='text-gray-600 ml-3 cusror-pointer'>
        {category}
      </label>
      <div className='ml-auto text-gray-600 text-sm'>({quantity})</div>
    </div>
  );
}

export default CategoryCheck;
