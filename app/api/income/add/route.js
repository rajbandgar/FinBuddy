import { NextResponse } from "next/server";
import dbConnect from "@/libs/mongodb";
import Income from "@/models/Income";
import { verifyToken } from "@/utils/jwt";
// import xlsx from "xlsx";
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