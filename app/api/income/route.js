import { NextResponse } from "next/server";
import dbConnect from "@/libs/mongodb";
import Income from "@/models/Income";
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

    const { icon, source, amount, date } = await req.json();

    if (!source || !amount || !date) {
      return NextResponse.json({ message: "Please fill all the fields" }, { status: 400 });
    }

    const newIncome = new Income({
      userId: user.id,
      icon,
      source,
      amount,
      date: new Date(date),
    });

    await newIncome.save();
    return NextResponse.json(newIncome, { status: 201 });
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

    const income = await Income.find({ userId: user.id }).sort({ date: -1 });

    // Handle Excel download
    if (download === "excel") {
      const data = income.map(item => ({
        Source: item.source,
        Amount: item.amount,
        Date: item.date,
      }));

      const wb = xlsx.utils.book_new();
      const ws = xlsx.utils.json_to_sheet(data);
      xlsx.utils.book_append_sheet(wb, ws, "Income");

      const filePath = path.join(process.cwd(), "public", "Income_details.xlsx");
      xlsx.writeFile(wb, filePath);

      const fileBuffer = fs.readFileSync(filePath);
      return new Response(fileBuffer, {
        headers: {
          "Content-Disposition": `attachment; filename="Income_details.xlsx"`,
          "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        },
      });
    }

    // Default: return JSON
    return NextResponse.json(income);
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}



export async function DELETE(req, { params }) {
  try {
    await dbConnect();

    const token = req.headers.get("authorization")?.split(" ")[1];
    const user = verifyToken(token);

    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const incomeId = params.id; // ✅ GET ID FROM ROUTE

    if (!incomeId) {
      return NextResponse.json({ message: "Income ID is required" }, { status: 400 });
    }

    const deleted = await Income.findOneAndDelete({ _id: incomeId, userId: user.id });
    console.log(user.id, incomeId);

    if (!deleted) {
      return NextResponse.json({ message: "Income not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Income deleted successfully" });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
