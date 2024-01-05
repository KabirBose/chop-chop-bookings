import { connectMongoDB } from "@/db/mongdb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // get the username, email and password from the register form
    const { username, email, password } = await req.json();

    // hash the password before it is registered
    const hashedPass = await bcrypt.hash(password, 10);

    // post the username, email and password to the database when registered
    await connectMongoDB();
    await User.create({ username, email, password: hashedPass });

    // return a message if registration successful
    return NextResponse.json({ message: "User registered" }, { status: 201 });

    // return an error if fail
  } catch (error: any) {
    let errorMessage = "An unexpected error occurred during registration.";

    if (error.code === 11000) {
      errorMessage = "Email or username already exists!";
    }
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
