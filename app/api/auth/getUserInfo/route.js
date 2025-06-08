import { NextResponse } from "next/server";
import dbConnect from "@/libs/mongodb";
import User from "@/models/User";
import { verifyToken } from "@/utils/jwt";

export async function GET(req) {
  await dbConnect();
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json({ message: "Invalid token", err: err.message }, { status: 401 });
  }
}
