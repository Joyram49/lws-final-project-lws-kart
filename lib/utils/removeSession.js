import { cookies } from "next/headers";

export async function removeSession() {
  cookies().set("session", "", { expires: new Date(0) });
}
