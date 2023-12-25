import { connectMongoDB } from "@/db/mongdb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { username, email, password } = await req.json();
    const hashedPass = await bcrypt.hash(password, 10);

    await connectMongoDB();
    await User.create({ username, email, password: hashedPass });

    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error occurred on registration" },
      { status: 500 }
    );
  }
}
