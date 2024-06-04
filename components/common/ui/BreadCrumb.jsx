"use client";
import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

function BreadCrumb() {
  const pathName = usePathname();
  let pathArray = pathName.split("/");
  pathArray = pathArray.filter((path) => path !== "");

  return (
    <div className='container py-4 flex items-center gap-3'>
      <Link href='/' className='text-primary text-base'>
        <FontAwesomeIcon icon={faHouse} />
      </Link>
      {pathArray.length > 0 &&
        pathArray.map((path, index) => (
          <div
            key={path + index}
            className='flex justify-center items-center gap-x-2'
          >
            <span className='text-sm text-gray-400'>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <p className='text-gray-600 font-medium'>{path}</p>
          </div>
        ))}
    </div>
  );
}

export default BreadCrumb;
