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

    const {  icon, category, amount, date } = await req.json();

    if (!amount || !category || !date) {
      return NextResponse.json({ message: "Please fill all the fields" }, { status: 400 });
    }

    const newExpense = new Expense({
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
