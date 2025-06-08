import dbConnect from "@/libs/mongodb";
import Expense from "@/models/Expense";
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

    const ExpenseId = params.id;
    if (!ExpenseId) {
      return NextResponse.json({ message: "Expense ID is required" }, { status: 400 });
    }

    const deleted = await Expense.findOneAndDelete({ _id: ExpenseId });
    if (!deleted) {
      return NextResponse.json({ message: "Income not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Expense deleted successfully" });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
