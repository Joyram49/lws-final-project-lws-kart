import BillingAddress from "@/components/account/BillingAddress";
import Profile from "@/components/account/Profile";
import ShippingAddress from "@/components/account/ShippingAddress";
import { getSession } from "@/lib/utils/getSession";
import { redirect } from "next/navigation";

export const revalidate = 1;

async function AccountPage() {
  const session = await getSession();
  let profile = {};
  if (session?.id) {
    const response = await fetch(
      `http://localhost:3000/api/user/${session.id}`,
      { next: { tags: ["account"] } }
    );
    if (response.status === 200) {
      profile = await response.json();
    }
  } else {
    redirect("/login");
  }

  return (
    <main>
      <div className='container  items-start gap-6 pt-4 pb-16'>
        {/* <!-- info --> */}
        <div className=' grid grid-cols-3 gap-4 mx-auto max-w-5xl'>
          <Profile profile={profile} />

          <ShippingAddress profile={profile} />

          <BillingAddress profile={profile} />
        </div>
        {/* <!-- ./info --> */}
      </div>
    </main>
  );
}

export default AccountPage;
