import NextAuth from "next-auth/next";
import { SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "@/db/mongdb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

const authOptions = {
  providers: [
    // use credentials provider
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        // get the email and password entered in the login form
        const { email, password }: any = credentials;
        try {
          // connected to the DB and find the email that was entered in the login form
          await connectMongoDB();
          const user = await User.findOne({ email });

          // if user does not exist return null
          if (!user) {
            return null;
          }

          // otherwise check if password from DB matches password from login form
          const passwordsMatch = await bcrypt.compare(password, user.password);

          // if no match then return null
          if (!passwordsMatch) {
            return null;
          }

          //if match then authorize user
          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt" as SessionStrategy,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
