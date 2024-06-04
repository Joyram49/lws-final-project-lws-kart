import { cookies } from "next/headers";
import { decryptToken } from "./decryptToken";

export async function getSession() {
  const token = cookies().get("session")?.value;

  const session = await decryptToken(token);
  return session;
}
