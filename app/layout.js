import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import UserProvider from "@/context/userContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FinBuddy",
  description: "Your own finance Tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
