import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import {connectMongoDB} from "D:/Web Dev/cuvette/src/lib/mongodb.js";

import bcrypt from "bcryptjs";

import User from "D:/Web Dev/cuvette/src/models/user.js";



export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                const { email, password,role } = credentials;

                try {
                    await connectMongoDB();
                    const user = await User.findOne({ email });
                    if (!user) {
                        return null;
                    }
                    const passwordMatch = await bcrypt.compare(password, user.password);
                    if (!passwordMatch) {
                        return null;
                    }
                    return user;
                } catch (error) {
                    console.log(error);
                    return null; // Ensure function returns null in case of error
                }
            },
        }),
    ],
    
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };