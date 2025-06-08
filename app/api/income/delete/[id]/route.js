import dbConnect from "@/libs/mongodb";
import Income from "@/models/Income";
import { verifyToken } from "@/utils/jwt";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {

     console.log("Incoming DELETE for income ID:", params.id);
  try {
    await dbConnect();

    const token = req.headers.get("authorization")?.split(" ")[1];
    const user = verifyToken(token);
    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const incomeId = params.id;
    if (!incomeId) {
      return NextResponse.json({ message: "Income ID is required" }, { status: 400 });
    }

    const deleted = await Income.findOneAndDelete({ _id: incomeId });
    if (!deleted) {
      return NextResponse.json({ message: "Income not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Income deleted successfully" });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
