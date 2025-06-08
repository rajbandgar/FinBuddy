import { NextResponse } from "next/server";
import dbConnect from "@/libs/mongodb";
import User from "@/models/User";
import { generateToken } from "@/utils/jwt";

export async function POST(req) {
  await dbConnect();
  const { fullName, email, password, profileImageUrl } = await req.json();

  if (!fullName || !email || !password) {
    return NextResponse.json({ message: "Please fill all fields" }, { status: 400 });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json({ message: "User already exists" }, { status: 400 });
  }

  const user = await User.create({ fullName, email, password, profileImageUrl });

  const token = generateToken(user._id);
  return NextResponse.json({ user, token }, { status: 201 });
}





