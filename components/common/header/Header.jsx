import { getCartItemForUser } from "@/lib/queries/carts";
import { getUserById } from "@/lib/queries/users";
import { getwishListForUser } from "@/lib/queries/wishlist";
import { getSession } from "@/lib/utils/getSession";
import logoImg from "@/public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Account from "./Account";
import Search from "./Search";
import ShoppingCartBtn from "./ShoppingCartBtn";
import WishListBtn from "./WishListBtn";

const Header = async () => {
  const session = await getSession();
  let userInfo = {};

  if (session?.id) {
    userInfo.user = await getUserById(session.id);
    userInfo.cartList = await getCartItemForUser(session.id);
    userInfo.wishList = await getwishListForUser(session?.id);
  }

  return (
    <header className='py-4 shadow-sm bg-white'>
      <div className='container flex items-center justify-between '>
        <Link href='/'>
          <Image src={logoImg} alt='Logo' className='w-32' />
        </Link>

        {/* search form */}
        <Search />

        <div className='flex items-center space-x-4'>
          <WishListBtn wishList={userInfo.wishList} sessionId={session?.id} />
          <ShoppingCartBtn
            cartList={userInfo.cartList}
            sessionId={session?.id}
          />
          <Account userInfo={userInfo.user} />
        </div>
      </div>
    </header>
  );
};

export default Header;
