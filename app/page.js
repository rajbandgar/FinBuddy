"use client"

import Link from "next/link"
import { ArrowRight, BarChart3, CreditCard, DollarSign, LineChart, PieChart, Sparkles, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const staggerItem = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
}

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 font-bold text-xl"
          >
            <DollarSign className="h-6 w-6" />
            <span>FinBuddy</span>
          </motion.div>
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex gap-6"
          >
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonials
            </Link>
          </motion.nav>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <Link href="/login" passHref>
              <Button variant="outline" className="hidden sm:flex">
                Log In
              </Button>
            </Link>

            <Link href="/signup" passHref>
              <Button>
                Sign Up
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-6 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6 pt-4">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <motion.div {...fadeInLeft} className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
                  >
                    Manage Your Finances with AI-Powered Insights
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400"
                  >
                    Track your income and expenses effortlessly while Genna, your AI financial assistant, provides
                    valuable spending insights to help you save more and achieve your financial goals.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col gap-2 min-[400px]:flex-row"
                >
                  <Link href="/login" passHref>
                    <Button size="lg" className="px-8">
                      Get Started Free
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    Watch Demo
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex items-center gap-4 text-sm text-gray-500"
                >
                  <span>✓ No credit card required</span>
                  <span>✓ 14-day free trial</span>
                </motion.div>
              </motion.div>
              <motion.div
                {...fadeInRight}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex items-center justify-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="relative w-full max-w-md overflow-hidden rounded-xl border bg-background p-2 shadow-xl"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-gradient-to-b from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50 rounded-lg p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                        >
                          <Sparkles className="h-5 w-5 text-purple-500" />
                        </motion.div>
                        <span className="font-medium">Genna AI</span>
                      </div>
                      <span className="text-sm text-gray-500">Just now</span>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-950"
                    >
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="text-sm"
                      >
                        Great news! Ive analyzed your spending this month. Youve spent 30% less on dining compared to
                        last month - excellent progress! 🎉 I notice you could save about $45 monthly by consolidating
                        your subscription services. Would you like me to create a personalized savings plan?
                      </motion.p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.4 }}
                      className="mt-4 flex gap-2"
                    >
                      <Button size="sm" variant="outline" className="text-xs">
                        Show Details
                      </Button>
                      <Button size="sm" className="text-xs">
                        Create Plan
                      </Button>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    className="mt-4 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Monthly Overview</span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.8 }}
                        className="text-sm text-green-500 font-medium"
                      >
                        +$1,240.00
                      </motion.span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-800">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "65%" }}
                        transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
                        className="h-2 rounded-full bg-green-500"
                      ></motion.div>
                    </div>
                    <motion.div
                      variants={staggerContainer}
                      initial="initial"
                      animate="animate"
                      className="grid grid-cols-3 gap-2"
                    >
                      {[
                        { label: "Income", value: "$3,240", icon: DollarSign, color: "text-green-500" },
                        { label: "Expenses", value: "$2,000", icon: CreditCard, color: "text-red-500" },
                        { label: "Savings", value: "$1,240", icon: TrendingUp, color: "text-blue-500" },
                      ].map((item, index) => (
                        <motion.div
                          key={item.label}
                          variants={staggerItem}
                          transition={{ delay: 2.2 + index * 0.1 }}
                          className="rounded-lg bg-gray-100 p-2 dark:bg-gray-800"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs">{item.label}</span>
                            <item.icon className={`h-3 w-3 ${item.color}`} />
                          </div>
                          <p className="text-sm font-medium">{item.value}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          id="features"
          className="bg-gray-50 py-12 md:py-24 dark:bg-gray-900"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              {...fadeInUp}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800"
                >
                  Powerful Features
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                >
                  Everything you need to master your finances
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
                >
                  FinBuddy combines intelligent expense tracking with AI-powered insights to help you make smarter
                  financial decisions.
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  icon: BarChart3,
                  title: "Smart Expense Tracking",
                  description:
                    "Automatically categorize transactions, track income and expenses, and get real-time insights into your spending patterns.",
                },
                {
                  icon: Sparkles,
                  title: "Genna AI Assistant",
                  description:
                    "Your personal AI financial advisor that analyzes spending, identifies savings opportunities, and provides actionable insights.",
                },
                {
                  icon: PieChart,
                  title: "Budget Management",
                  description:
                    "Create flexible budgets, set spending limits, and receive alerts when you're approaching your limits.",
                },
                {
                  icon: LineChart,
                  title: "Financial Analytics",
                  description:
                    "Visualize your financial data with interactive charts, trends, and detailed reports to understand your money flow.",
                },
                {
                  icon: TrendingUp,
                  title: "Savings Goals",
                  description:
                    "Set personalized savings targets and let Genna help you create achievable plans to reach your financial goals faster.",
                },
                {
                  icon: CreditCard,
                  title: "Bill Management",
                  description:
                    "Never miss a payment with smart bill reminders, recurring transaction tracking, and payment scheduling.",
                },
              ].map((feature, index) => (
                <motion.div key={feature.title} variants={staggerItem}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900"
                      >
                        <feature.icon className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                      </motion.div>
                      <div>
                        <CardTitle>{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* How It Works Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          id="how-it-works"
          className="py-12 md:py-24"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              {...fadeInUp}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <motion.div
                  {...scaleIn}
                  viewport={{ once: true }}
                  className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800"
                >
                  How It Works
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                >
                  Get started in minutes
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
                >
                  FinBuddy makes financial management simple and intuitive. Heres how you can start taking control of
                  your money today.
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3"
            >
              {[
                {
                  step: "1",
                  title: "Connect & Track",
                  description:
                    "Link your bank accounts or manually add transactions. FinBuddy automatically categorizes everything for you.",
                },
                {
                  step: "2",
                  title: "Get AI Insights",
                  description:
                    "Genna analyzes your spending habits and provides personalized recommendations to optimize your finances.",
                },
                {
                  step: "3",
                  title: "Save & Grow",
                  description:
                    "Follow AI-powered suggestions to reduce expenses, increase savings, and achieve your financial dreams.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  variants={staggerItem}
                  className="flex flex-col items-center space-y-4 text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900"
                  >
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-300">{item.step}</span>
                  </motion.div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          id="testimonials"
          className="bg-gray-50 py-12 md:py-24 dark:bg-gray-900"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              {...fadeInUp}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <motion.div
                  {...scaleIn}
                  viewport={{ once: true }}
                  className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800"
                >
                  Success Stories
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                >
                  Loved by thousands of users
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
                >
                  See how FinBuddy and Genna AI have helped people transform their financial lives.
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  initials: "SJ",
                  name: "Sarah Johnson",
                  role: "Marketing Manager",
                  gradient: "from-purple-400 to-pink-400",
                  testimonial:
                    "Genna's insights helped me cut my monthly expenses by 20%! The AI suggestions were incredibly accurate and helped me identify subscriptions I'd completely forgotten about. Best financial decision I've made!",
                },
                {
                  initials: "MC",
                  name: "Michael Chen",
                  role: "Software Developer",
                  gradient: "from-blue-400 to-cyan-400",
                  testimonial:
                    "The expense tracking is seamless, but what really sets FinBuddy apart is Genna. It's like having a personal financial advisor available 24/7. My savings have increased by 40% in just 3 months!",
                },
                {
                  initials: "ER",
                  name: "Emily Rodriguez",
                  role: "Small Business Owner",
                  gradient: "from-green-400 to-emerald-400",
                  testimonial:
                    "I've tried many expense trackers, but FinBuddy is the first one that actually changed my spending habits. Genna's personalized insights are incredibly valuable for both personal and business finances.",
                },
                {
                  initials: "DT",
                  name: "David Thompson",
                  role: "College Student",
                  gradient: "from-orange-400 to-red-400",
                  testimonial:
                    "As a student on a tight budget, FinBuddy has been a lifesaver. Genna helps me find ways to save money I never thought possible. I've saved over $200 this semester alone!",
                },
                {
                  initials: "LW",
                  name: "Lisa Wang",
                  role: "Freelance Designer",
                  gradient: "from-indigo-400 to-purple-400",
                  testimonial:
                    "Managing irregular freelance income was always stressful until I found FinBuddy. Genna helps me plan for lean months and optimize my spending during good months. Game changer!",
                },
                {
                  initials: "JM",
                  name: "James Miller",
                  role: "Retired Teacher",
                  gradient: "from-teal-400 to-blue-400",
                  testimonial:
                    "Even in retirement, FinBuddy helps me make the most of my fixed income. Genna's suggestions have helped me find extra money for travel and hobbies I thought I couldn't afford.",
                },
              ].map((testimonial, index) => (
                <motion.div key={testimonial.name} variants={staggerItem}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className={`h-12 w-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-bold`}
                        >
                          {testimonial.initials}
                        </motion.div>
                        <div>
                          <p className="text-sm font-medium">{testimonial.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                          <div className="flex mt-1">
                            {[...Array(5)].map((_, i) => (
                              <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i, duration: 0.3 }}
                                className="text-yellow-400"
                              >
                                ★
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-500 dark:text-gray-400">{testimonial.testimonial}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-12 md:py-24"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8 md:grid-cols-4"
            >
              {[
                { value: "30+", label: "Active Users" },
                { value: "$2M+", label: "Money Saved" },
                { value: "4.9★", label: "App Rating" },
                { value: "99%", label: "User Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center space-y-2 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                    className="text-3xl font-bold text-purple-600"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-12 md:py-24 bg-gradient-to-r from-purple-600 to-purple-800 text-white"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              {...fadeInUp}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                >
                  Ready to transform your financial future?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="max-w-[600px] text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  Join thousands of users who are taking control of their finances with FinBuddy and Genna AI. Start
                  your journey to financial freedom today.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col gap-2 min-[400px]:flex-row"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="px-8 bg-white text-purple-600 hover:bg-gray-100">
                    Start Free Trial
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-purple-600"
                  >
                    Schedule Demo
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center gap-4 text-sm text-purple-200 mt-4"
              >
                <span>✓ 14-day free trial</span>
                <span>✓ No setup fees</span>
                <span>✓ Cancel anytime</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="border-t py-12 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container px-4 md:px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-4"
          >
            <motion.div variants={staggerItem} className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <DollarSign className="h-6 w-6" />
                <span>FinBuddy</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Your AI-powered financial companion for smarter money management and better financial decisions.
              </p>
              <div className="flex gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="sm">
                    Download iOS
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="sm">
                    Download Android
                  </Button>
                </motion.div>
              </div>
            </motion.div>
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Security", "Integrations"],
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Blog", "Press"],
              },
              {
                title: "Support",
                links: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"],
              },
            ].map((section, index) => (
              <motion.div key={section.title} variants={staggerItem} className="space-y-4">
                <h4 className="font-semibold">{section.title}</h4>
                <div className="space-y-2 text-sm">
                  {section.links.map((link) => (
                    <motion.div key={link} whileHover={{ x: 5 }}>
                      <Link
                        href="#"
                        className="block text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                      >
                        {link}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">© 2025 FinBuddy. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <span className="text-sm text-gray-500">Made with ❤️ for better financial futures</span>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}
