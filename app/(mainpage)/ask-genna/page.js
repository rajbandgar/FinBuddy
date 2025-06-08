"use client";

import React, { useEffect, useState } from "react";
import DashboardLayout from "@/components/layouts/dashboardLayout";
import Modal from "@/components/Modal";
import axiosInstance from "@/utils/axiosInstance";
import { API_PATHS } from "@/utils/apiPaths";
import InfoCard from "@/components/Cards/InfoCard";
import { IoMdCard } from "react-icons/io";
import { LuHandCoins, LuWalletMinimal } from "react-icons/lu";
import { addThousandsSeparator } from "@/utils/helper";
import { useUserAuth } from "@/hooks/useUserAuth";

const AskGenna = () => {
  useUserAuth();

  const [showAIInsights, setShowAIInsights] = useState(false);
  const [dashboardData, setDashboardData] = useState(null);
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [aiAnswer, setAiAnswer] = useState(null);
  const [thinking, setThinking] = useState(false);

  // Fetch dashboard summary
  const fetchDashboardData = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axiosInstance.get(API_PATHS.DASHBOARD.GET_DATA);
      if (response.data) setDashboardData(response.data);
    } catch (error) {
      console.error("Failed to fetch dashboard data", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch income details
 const fetchIncomeDetails = async () => {
  try {
    const response = await axiosInstance.get(API_PATHS.INCOME.GET_INCOME);
    if (response.data) {
      console.log("Income Data:", response.data);  // <-- Check data here
      setIncomeData(response.data);
    }
  } catch (error) {
    console.error("Failed to fetch income details", error);
  }
};

const fetchExpenseDetails = async () => {
  try {
    const response = await axiosInstance.get(API_PATHS.EXPENSE.GET_EXPENSE);
    if (response.data) {
      console.log("Expense Data:", response.data);  // <-- Check data here
      setExpenseData(response.data);
    }
  } catch (error) {
    console.error("Failed to fetch expense details", error);
  }
};


  useEffect(() => {
    fetchDashboardData();
    fetchIncomeDetails();
    fetchExpenseDetails();
  }, []);

  // Analyze all financial data together
  const handleAnalyzeFinancials = async () => {
    if (!dashboardData) return;

    setShowAIInsights(true);
    setThinking(true);
    setAiAnswer(null);

    const payload = {
  financials: {
    balance: dashboardData?.totalBalance || 0,
    income: dashboardData?.totalIncome || 0,
    expenses: dashboardData?.totalExpenses || 0,
  },
  incomeDetails: incomeData,
  expenseDetails: expenseData,
};

    try {
      const response = await fetch("/api/ask-genna", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to get AI response");

      const data = await response.json();
      setAiAnswer(data.result);
    } catch (error) {
      console.error("Error fetching financial advice:", error);
      setAiAnswer("Sorry, something went wrong. Please try again later.");
    } finally {
      setThinking(false);
    }
  };

  return (
    <DashboardLayout activeMenu="Ask Genna">
      <div className="my-6 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <InfoCard
            icon={<IoMdCard />}
            label="Total Balance"
            value={addThousandsSeparator(dashboardData?.totalBalance || 0)}
            color="bg-violet-500"
          />
          <InfoCard
            icon={<LuWalletMinimal />}
            label="Total Income"
            value={addThousandsSeparator(dashboardData?.totalIncome || 0)}
            color="bg-orange-500"
          />
          <InfoCard
            icon={<LuHandCoins />}
            label="Total Expense"
            value={addThousandsSeparator(dashboardData?.totalExpenses || 0)}
            color="bg-red-500"
          />
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            🤖 Ask Genna – Your Smart Financial Assistant
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base">
            Get personalized financial analytics and actionable advice based on your income and spending.
          </p>
          <button
            onClick={handleAnalyzeFinancials}
            disabled={thinking}
            className="w-full sm:w-auto bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {thinking ? "Analyzing..." : "Analyze Financials"}
          </button>
        </div>
      </div>

      <Modal
        isOpen={showAIInsights}
        onClose={() => setShowAIInsights(false)}
        title="Genna's Financial Insights"
        className="max-w-lg w-full mx-4 sm:mx-auto"
      >
        <div className="max-h-[60vh] overflow-y-auto">
          {thinking && <p className="text-gray-600 dark:text-gray-300">Analyzing your data...</p>}
          {aiAnswer && (
            <div className="mt-2 whitespace-pre-wrap text-gray-800 dark:text-gray-100">{aiAnswer}</div>
          )}
        </div>
      </Modal>
    </DashboardLayout>
  );
};

export default AskGenna;
