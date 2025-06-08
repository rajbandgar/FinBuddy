import { NextResponse } from "next/server";
import dbConnect from "@/libs/mongodb";
import { verifyToken } from "@/utils/jwt";
import Income from "@/models/Income";
import Expense from "@/models/Expense";
import { Types } from "mongoose";

async function getDashboardData(userId) {
  const userIdObject = new Types.ObjectId(String(userId));

  const totalIncome = await Income.aggregate([
    { $match: { userId: userIdObject } },
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);

  const totalExpenses = await Expense.aggregate([
    { $match: { userId: userIdObject } },
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);

  const last60DaysIncomeTransactions = await Income.find({
    userId: userIdObject,
    date: { $gte: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000) }
  }).sort({ date: -1 });

  const incomeLast60Days = last60DaysIncomeTransactions.reduce((sum, txn) => sum + txn.amount, 0);

  const last30DaysExpenseTransactions = await Expense.find({
    userId: userIdObject,
    date: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
  }).sort({ date: -1 });

  const expenseLast30Days = last30DaysExpenseTransactions.reduce((sum, txn) => sum + txn.amount, 0);

  const lastTransactions = [
    ...(await Income.find({ userId: userIdObject }).sort({ date: -1 }).limit(5)).map(txn => ({
      ...txn.toObject(),
      type: "income"
    })),
    ...(await Expense.find({ userId: userIdObject }).sort({ date: -1 }).limit(5)).map(txn => ({
      ...txn.toObject(),
      type: "expense"
    }))
  ].sort((a, b) => b.date - a.date).slice(0, 5);

  return {
    totalBalance: (totalIncome[0]?.total || 0) - (totalExpenses[0]?.total || 0),
    totalIncome: totalIncome[0]?.total || 0,
    totalExpenses: totalExpenses[0]?.total || 0,
    last30DaysExpenses: {
      total: expenseLast30Days,
      transactions: last30DaysExpenseTransactions
    },
    last60DaysIncome: {
      total: incomeLast60Days,
      transactions: last60DaysIncomeTransactions
    },
    recentTransactions: lastTransactions
  };
}

export async function GET(req) {
  try {
    await dbConnect();

    const token = req.headers.get("authorization")?.split(" ")[1];
    const decoded = verifyToken(token); // this gives { id, iat, exp }

    const userId = decoded?.id;

    if (!userId || !Types.ObjectId.isValid(userId)) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const data = await getDashboardData(userId);
    return NextResponse.json(data);

  } catch (error) {
    console.error("Dashboard API error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}


