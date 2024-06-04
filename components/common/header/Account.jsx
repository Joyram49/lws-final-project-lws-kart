import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Account({ userInfo }) {
  return (
    <Link
      href={userInfo?.id ? `/account/${userInfo?.id}` : "/login"}
      className='text-center text-gray-700 hover:text-primary transition relative'
    >
      <div className='text-2xl'>
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className='text-xs leading-3 capitalize'>
        {userInfo?.name ? userInfo.name : "account"}
      </div>
    </Link>
  );
}

export default Account;
