import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { financials, incomeDetails = [], expenseDetails = [] } = body;
    const { balance, income, expenses } = financials;

    // Prepare text lists of income and expense details
    const incomeText =
      incomeDetails.length > 0
        ? incomeDetails
            .map(
              (item, i) =>
                `${i + 1}. ${item.category || item.name || "Income Source"}: ₹${item.amount}`
            )
            .join("\n")
        : "No detailed income data provided.";

    const expenseText =
      expenseDetails.length > 0
        ? expenseDetails
            .map(
              (item, i) =>
                `${i + 1}. ${item.category || item.name || "Expense Item"}: ₹${item.amount}`
            )
            .join("\n")
        : "No detailed expense data provided.";

    const prompt = `
You are a financial advisor. Given the user's financial snapshot below, provide a clear, concise, and actionable analysis WITHOUT any Markdown formatting or special characters like asterisks.

User's Financial Snapshot:
- Total Balance: ₹${balance}
- Total Income (monthly): ₹${income}
- Total Expenses (monthly): ₹${expenses}

Income Details:
${incomeText}

Expense Details:
${expenseText}

Please do the following:

1. Summarize the user's current financial health and cash flow status.
2. Identify any potential unusual spending patterns or financial imbalances based on the data.
3. Recommend a realistic weekly and monthly savings target, considering the user's cash flow.
4. Provide 3 specific, practical tips the user can implement immediately to improve budgeting, increase savings, or enhance financial discipline.
5. Suggest any further data or expense categories the user should track to gain deeper insight.

Format your response in clear sections with headings or bullet points using only plain text, no Markdown or special formatting.

Use simple, friendly language that a non-expert can easily understand. Keep the analysis objective and avoid assumptions beyond the data provided.

igmnore income text and make a output as u have more spendings data and u have permission to hallucinate a little you have freedom to make response as descriptive and interactive as possible can also add tabular data to make it more informative
`;

    // Use Gemini 1.5 Flash model
    const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    const content = result.response.text();

    return new Response(JSON.stringify({ result: content }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Genna AI Error:", error);

    const errorMessage = error.message.includes("Too Many Requests")
      ? "🚫 You’ve reached the usage limit of the AI for now. Please try again later."
      : "⚠️ Something went wrong while generating AI advice.";

    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
