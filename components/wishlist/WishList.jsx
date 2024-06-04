import { getSession } from "@/lib/utils/getSession";
import WishListItem from "./WishListItem";

async function WishList({ wishList }) {
  const session = await getSession();
  return (
    <div className='mx-auto space-y-4 max-w-6xl'>
      {wishList && wishList?.productIds?.length === 0 ? (
        <div>No item found</div>
      ) : (
        wishList.productIds.map((productId) => (
          <WishListItem
            key={productId}
            productId={productId?.id}
            session={session}
          />
        ))
      )}
    </div>
  );
}

export default WishList;
