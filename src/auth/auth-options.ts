import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
// import { UserType } from "./types";
import { getErrorMessage } from "@/lib/getErrorMessage";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    // maxAge: 30, // 30 sec
    maxAge: 3 * 24 * 60 * 60, // 3 days
  },
  providers: [
    Credentials({
      type: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const res = await fetch(`${process.env.NEXTAUTH_URL!}/api/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          const data: any = await res.json();
          if (!res.ok) {
            return null;
          }

          if (data) {
            return data;
          }

          return null;
        } catch (error) {
          // Capture Axios error here
          const errorMessage = (
            getErrorMessage(error) || "An error occurred"
          ).toString();
          throw new Error(errorMessage);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      if (trigger === "update") {
        // @ts-expect-error //ignore
        token.user.isVerfied = session.user.isVerfied;
        return { ...token, ...session };
      }
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user;
      }
      return session;
    },
  },
  // pages: {
  //   signIn: "/login",
  // },
};
