"use client";
import { useProduct } from "@/app/hooks/useProduct";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { SubmitButton } from "./SubmitBtn";

function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { searchTerm, setSearchTerm } = useProduct();
  const [search, setSearch] = useState("");
  async function handleSearch(e) {
    e.preventDefault();
    setSearchTerm(search);
    let params = "";
    if (search === "") {
      params = new URLSearchParams(searchParams);
      params.set("searched", "all");
      // throw new Error('search key could not empty')
    } else {
      params = new URLSearchParams(searchParams);
      params.set("searched", search);
    }

    replace(`/shop?${params.toString()}`);
  }

  return (
    <form className='w-full max-w-xl relative flex' onSubmit={handleSearch}>
      <span className='absolute left-4 top-3 text-lg text-gray-400'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </span>
      <input
        type='text'
        name='search'
        id='search'
        className='w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex '
        placeholder='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SubmitButton />
    </form>
  );
}

export default Search;
