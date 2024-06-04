import { getSession } from "@/lib/utils/getSession";
import { SessionProvider } from "next-auth/react";

async function AuthProvider({ children }) {
  const session = await getSession();
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

export default AuthProvider;
