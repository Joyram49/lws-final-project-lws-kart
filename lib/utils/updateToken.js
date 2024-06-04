import { SignJWT } from "jose";
import { NextResponse } from "next/server";
import { decryptToken } from "./decryptToken";

export async function updateToken(request) {
  const secretKey = new TextEncoder().encode(process.env.AUTH_SECRET);
  const token = request?.cookies.get("session")?.value;

  if (!token) return NextResponse.next();

  try {
    // Verify the token
    const parsed = await decryptToken(token);

    // Update the expiration time
    parsed.exp = Math.floor(Date.now() / 1000) + 3600; // 20 seconds from now

    // Create a new token with the updated payload
    const newToken = await new SignJWT(parsed)
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime(parsed.exp)
      .sign(secretKey);

    // Create the response and set the new token in the cookie
    const res = NextResponse.next();
    res.cookies.set({
      name: "session",
      value: newToken,
      httpOnly: true,
      expires: new Date(parsed.exp * 1000), // Convert to milliseconds
    });

    return res;
  } catch (error) {
    console.error("JWT verification failed:", error);
    return NextResponse.next();
  }
}
