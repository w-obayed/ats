import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Credentials({
      name: "credentials",
      cedentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: async (cedentials) => {
        const email = cedentials.email;
        const password = cedentials.password;

        if (!email || !password) {
          throw new Error("Please provide email and password!");
        }

        const user = await User.findOne({ email });

        if (!user) {
          throw new Error("Invalid email or password!");
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
          throw new Error("Invalid password!");
        }

        return user;
      },
    }),
  ],
});
