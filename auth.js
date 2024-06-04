import { MongoDBAdapter } from "@auth/mongodb-adapter";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";
import mongoClientPromise from "./lib/mongoClientPromise";
import { getNewTokens } from "./lib/utils/getNewToken";
import { userModel } from "./models/userModel";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: MongoDBAdapter(mongoClientPromise, {
    databaseName: process.env.ENVIRONMENT,
  }),
  session: {
    strategy: "jwt",
  },

  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialProvider({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (credentials == null) return null;
        try {
          const user = await userModel.findOne({ email: credentials.email });
          if (user) {
            const isMatch = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isMatch) {
              return user;
            } else {
              throw new Error("password is incorrect!!");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, trigger }) {
      const expires = new Date(Date.now() + 3600 * 1000);

      if (user) {
        // User is available during sign-in

        const payload = {
          userId: user.id || user._id.toString(),
          name: user.name,
          email: user.email,
        };
        const newToken = await getNewTokens(payload);

        cookies().set("session", newToken.accessToken, {
          expires,
          httpOnly: true,
        });
      }
      return token;
    },
    session({ session }) {
      return session;
    },
  },
});
