import { NextResponse } from "next/server";
import dbConnect from "@/libs/mongodb";
import User from "@/models/User";
import { generateToken } from "@/utils/jwt";

export async function POST(req) {
  await dbConnect();
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ message: "Please fill all fields" }, { status: 400 });
  }

  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
  }

  const token = generateToken(user._id);
  return NextResponse.json({ user, token }, { status: 200 });
}
