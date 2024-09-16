import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = NextAuth({
  providers: [
    GoogleProvider({
      id: "google",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      if (session?.user) {
        session.user.email = token.email;
      }
      return session;
    },
  },
});

export { authOptions as GET, authOptions as POST };
