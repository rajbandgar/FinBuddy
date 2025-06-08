import { NextResponse } from "next/server";
import dbConnect from "@/libs/mongodb";
import Expense from "@/models/Expense";
import { verifyToken } from "@/utils/jwt";
import * as xlsx from "xlsx";
import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    await dbConnect();
    const token = req.headers.get("authorization")?.split(" ")[1];
    const user = verifyToken(token);

    if (!user) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const { icon, category, amount, date } = await req.json();

    if (!source || !category || !date) {
      return NextResponse.json({ message: "Please fill all the fields" }, { status: 400 });
    }

    const newExpense = new Income({
      userId: user.id,
      icon,
      category,
      amount,
      date: new Date(date),
    });

    await newExpense.save();
    return NextResponse.json(newExpense, { status: 201 });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    await dbConnect();
    const token = req.headers.get("authorization")?.split(" ")[1];
    const user = verifyToken(token);

    if (!user) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const { searchParams } = new URL(req.url);
    const download = searchParams.get("download");

    const expense = await Expense.find({ userId: user.id }).sort({ date: -1 });

    // Handle Excel download
    if (download === "excel") {
      const data = income.map(item => ({
        Expense: item.source,
        Amount: item.amount,
        Date: item.date,
      }));

      const wb = xlsx.utils.book_new();
      const ws = xlsx.utils.json_to_sheet(data);
      xlsx.utils.book_append_sheet(wb, ws, "Income");

      const filePath = path.join(process.cwd(), "public", "Expense_details.xlsx");
      xlsx.writeFile(wb, filePath);

      const fileBuffer = fs.readFileSync(filePath);
      return new Response(fileBuffer, {
        headers: {
          "Content-Disposition": `attachment; filename="Expense_details.xlsx"`,
          "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        },
      });
    }

    // Default: return JSON
    return NextResponse.json(expense);
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    await dbConnect();
    const token = req.headers.get("authorization")?.split(" ")[1];
    const user = verifyToken(token);

    if (!user) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const { ExpenseId } = await req.json();

    if (!ExpenseId) {
      return NextResponse.json({ message: "Expense ID is required" }, { status: 400 });
    }

    await Expense.findOneAndDelete({ _id: ExpenseId, userId: user.id });

    return NextResponse.json({ message: "Expense deleted successfully" });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
