import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb"; // Keep only the local import
import User from "../../../models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(hashedPassword);
        await connectMongoDB();
        await User.create({ name, email, password: hashedPassword });

        return NextResponse.json({ message: "User Registered" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "An error occurred" }, { status: 500 });
    }
}