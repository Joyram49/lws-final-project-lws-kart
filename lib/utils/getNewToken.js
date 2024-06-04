import { SignJWT } from "jose";

export const getNewTokens = async (user) => {
  const secretKey = new TextEncoder().encode(process.env.AUTH_SECRET);

  const payload = {
    id: user.userId,
    email: user.email,
    name: user.name,
    type: "access",
  };
  const accessToken = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("20 sec from now")
    .sign(secretKey);

  // const refreshToken = jwt.sign(
  //   { id: user.id, email: user.email, type: "refresh" },
  //   process.env.REFRESH_SECRET_KEY,
  //   {
  //     expiresIn: process.env.REFRESH_JWT_EXPIRES_IN,
  //   }
  // );

  return { accessToken };
};
