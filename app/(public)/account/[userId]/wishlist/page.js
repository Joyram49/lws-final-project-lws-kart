import WishList from "@/components/wishlist/WishList";
import { getwishListForUser } from "@/lib/queries/wishlist";
import { getSession } from "@/lib/utils/getSession";
import { redirect } from "next/dist/server/api-utils";

async function WishListPage() {
  const session = await getSession();
  let wishList = {};
  if (session?.id) {
    wishList = await getwishListForUser(session.id);
  } else {
    redirect("/login");
  }
  return (
    <main>
      <div className='container gap-6 pt-4 pb-16'>
        <WishList wishList={wishList} />
      </div>
    </main>
  );
}

export default WishListPage;
