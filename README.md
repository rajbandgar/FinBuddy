# FinBuddy

FinBuddy is a modern, secure, and intelligent **expense tracking and personal finance web application** that empowers users to manage their money effectively. It combines a robust financial management system with AI-powered insights to help users track income and expenses, generate budget summaries, and receive personalized recommendations for smarter financial decisions. :contentReference[oaicite:0]{index=0}

This project is built with **Next.js (App Router)**, **MongoDB**, and **Google Gemini AI** for advanced guidance on financial health, savings, spending patterns, and goals. :contentReference[oaicite:1]{index=1}

---

## Table of Contents

1. Overview
2. Key Features
3. Motivation and Use Cases
4. Tech Stack
5. Architecture and Flow
6. Folder Structure
7. Installation & Prerequisites
8. Environment Setup
9. Available Scripts
10. Usage and Demo
11. How It Works
12. Security and Data Privacy
13. Deployment
14. Future Roadmap
15. Contributing
16. License
17. Contact

---

## 1. Overview

FinBuddy is designed to be an all-in-one financial assistant where users can:

- Log and categorize income and expenses
- Monitor monthly and yearly financial activities
- Receive AI-powered financial health advice
- Set savings goals and track progress
- Export financial reports
- Access interactive dashboards for financial clarity

Fundamentally, FinBuddy combines standard expense management with intelligent recommendations so users not only see their finances but understand them. :contentReference[oaicite:2]{index=2}

---

## 2. Key Features

- **Authentication**: Secure user signup and login with JWT-based sessions. :contentReference[oaicite:3]{index=3}  
- **Real-Time Dashboard**: Quick visibility into recent activity, balances, and summaries. :contentReference[oaicite:4]{index=4}  
- **Income & Expense Logging**: Easy categorization and entry of financial transactions. :contentReference[oaicite:5]{index=5}  
- **AI Financial Assistant**: Personalized financial health reports and insights using Google Gemini. :contentReference[oaicite:6]{index=6}  
- **Goal Tracking**: Set and measure progress toward saving milestones. :contentReference[oaicite:7]{index=7}  
- **Exportable Reports**: Download financial data for backup or tax purposes. :contentReference[oaicite:8]{index=8}  
- **Responsive Design**: Works across desktop and mobile screens. :contentReference[oaicite:9]{index=9}

---

## 3. Motivation and Use Cases

Managing personal finances can be challenging. Many individuals struggle with:

- Tracking day-to-day expenses
- Identifying poor spending habits
- Setting realistic saving goals
- Understanding financial health trends

FinBuddy helps solve these pain points by combining **standard financial tracking features** with **AI-driven suggestions**, giving users context and actionable guidance rather than static numbers. :contentReference[oaicite:10]{index=10}

---

## 4. Tech Stack

FinBuddy is built using the following technologies:

| Layer | Technology |
|-------|------------|
| Frontend | React, Next.js 13 (App Router) |
| Styling | Tailwind CSS |
| Backend | Node.js, Next.js API Routes |
| Database | MongoDB (Mongoose) |
| AI Integration | Google Gemini (Generative AI) |
| Authentication | JWT |
| Deployment | Vercel |

These technologies enable a full-stack application that is scalable, fast, and user-friendly. :contentReference[oaicite:11]{index=11}

---

## 5. Architecture and Flow

The architecture of FinBuddy is composed of:

- **Client Layer**: React components rendered via Next.js pages.
- **API Layer**: Next.js API routes that handle authentication, finance CRUD operations, and AI request forwarding.
- **Database Layer**: MongoDB storing users, transactions, and analytics data.
- **AI Assistant Layer**: Backed by Google Gemini for intelligent suggestions and insights.

Requests typically flow from the frontend to API routes, which interact with MongoDB or the AI service, and return structured JSON responses. :contentReference[oaicite:12]{index=12}

---

## 6. Folder Structure

Below is a high-level overview of important folders:

```
/app
  Pages, UI templates, and routes
/components
  Reusable UI components
/context
  Global React context providers
/controllers
  Handler logic for API operations
/hooks
  Custom React hooks
/lib
  API utilities and helpers
/libs
  Third-party integrations
/middleware
  Route middleware logic
/models
  Database schemas and definitions
/public
  Static assets
/utils
  Utility functions
```

This structure supports separation of concerns and ease of scaling. :contentReference[oaicite:13]{index=13}

---

## 7. Installation & Prerequisites

Before running the project locally, make sure you have:

- **Node.js v18 or higher**
- **MongoDB instance or Atlas account**
- **Google Gemini API key**
- **Vercel account (for deployment)** :contentReference[oaicite:14]{index=14}

---

## 8. Environment Setup

Create a `.env` file at the project root with the following:

```
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
JWT_SECRET=your_jwt_secret
```

Replace placeholder text with your own credentials. :contentReference[oaicite:15]{index=15}

---

## 9. Available Scripts

Use the following commands:

- `npm install` – Install dependencies  
- `npm run dev` – Start development server  
- `npm run build` – Build for production  
- `npm start` – Launch production build

---

## 10. Usage and Demo

After starting the development server, open your browser and navigate to:

```
http://localhost:3000
```

From here, you can:

- Register or log into an account
- Add income and expenses
- Review summaries
- Interact with the AI assistant for financial insights. :contentReference[oaicite:16]{index=16}

---

## 11. How It Works

### 11.1 Authentication

Users register and login using secure credentials. Sessions are maintained using JWT tokens stored in secure cookies. :contentReference[oaicite:17]{index=17}

### 11.2 Expense & Income Management

Transactions are added through forms. Each entry is stored in MongoDB and reflected on the dashboard. :contentReference[oaicite:18]{index=18}

### 11.3 AI Insights

When users request financial advice, relevant data and context are sent to the AI service (Google Gemini). The response is structured into actionable advice and shown within the app. :contentReference[oaicite:19]{index=19}

---

## 12. Security and Data Privacy

FinBuddy follows best practices:

- JWT authentication
- Secure API route protection
- HTTPS support on deployed environments
- No sensitive data logging

Ensure `.env` credentials are never shared publicly. :contentReference[oaicite:20]{index=20}

---

## 13. Deployment

FinBuddy is optimized for deployment on **Vercel**:

1. Push the repository to GitHub
2. Connect the repo in the Vercel dashboard
3. Set environment variables
4. Deploy

The application will be live with automatic builds on every push. :contentReference[oaicite:21]{index=21}

---

## 14. Future Roadmap

Planned enhancements include:

- Visual analytics dashboards with charts
- AI-based spending forecasting
- Multi-currency support
- Monthly goals automation
- Push notifications
- Data export in CSV/PDF
- Mobile-first UI improvements

---

## 15. Contributing

We welcome contributions from everyone.

To contribute:

1. Fork the repository
2. Create a feature branch
3. Commit changes with clear messages
4. Push and open a pull request

---

## 16. License

This project currently has no specified license. You may consider a permissive license such as MIT or Apache 2.0 based on your intentions.

---

## 17. Contact

For questions, support, or feedback, please open an issue on GitHub or reach out through the repository discussion channels. :contentReference[oaicite:22]{index=22}

