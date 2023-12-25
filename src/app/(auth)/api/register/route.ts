import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    console.log("Name", name);
    console.log("Email", email);
    console.log("Pass", password);

    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error occurred on registration" },
      { status: 500 }
    );
  }
}
