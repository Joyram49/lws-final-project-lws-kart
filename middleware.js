import { updateToken } from "./lib/utils/updateToken";

export async function middleware(request) {
  return await updateToken(request);
}
