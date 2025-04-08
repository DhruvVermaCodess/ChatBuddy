import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const LandingPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const socialHoverEffect = {
    scale: 1.2,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
    },
  };

  const linkHoverEffect = {
    color: "#ffffff",
    x: 3,
    transition: {
      duration: 0.2,
    },
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-black font-sans text-white">
      {/* Navigation */}
      <motion.nav
        className="bg-black border-b border-gray-800"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <motion.span
                className="text-2xl font-bold text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                ChatBuddy
              </motion.span>
            </div>
            <div
              className={`flex items-center space-x-4 ${
                isAuthenticated ? "hidden" : "block"
              }`}
            >
              <Link
                to="/about"
                className="text-gray-300 hover:text-white px-4 py-2 transition"
              >
                About
              </Link>
              <motion.button
                className="px-4 py-2 rounded-md text-gray-300 hover:text-white transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/login" className="text-gray-300 hover:text-white">
                  Log In
                </Link>
              </motion.button>
              <motion.button
                className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/signup" className="text-black hover:text-gray-800">
                  Sign Up
                </Link>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              variants={slideUp}
            >
              Your Personal AI Assistant, Available 24/7
            </motion.h1>
            <motion.p className="text-lg text-gray-400 mb-8" variants={slideUp}>
              ChatBuddy helps you get answers, automate tasks, and solve
              problems—all through simple conversation.
            </motion.p>
            <motion.button
              className="px-8 py-3 bg-white text-black rounded-md text-lg hover:bg-gray-200 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={slideUp}
            >
              <Link to="/chatbot" className="text-black hover:text-gray-800">
                Get Started For Free
              </Link>
            </motion.button>
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div
              className="bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-800"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-black rounded-t-md p-3 flex items-center">
                <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="p-4 border-t border-gray-800">
                <motion.div
                  className="flex mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="bg-gray-800 text-white px-4 py-2 rounded-lg rounded-tr-none">
                    Hi! How can I help you today?
                  </div>
                </motion.div>
                <motion.div
                  className="flex justify-end mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="bg-gray-700 text-white px-4 py-2 rounded-lg rounded-tl-none">
                    I need to schedule a meeting for tomorrow
                  </div>
                </motion.div>
                <motion.div
                  className="flex mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 }}
                >
                  <div className="bg-gray-800 text-white px-4 py-2 rounded-lg rounded-tr-none">
                    I can help with that. What time works best for you?
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Key Features
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="bg-black p-6 rounded-lg shadow-md border border-gray-800"
              variants={scaleIn}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="h-12 w-12 bg-gray-800 rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Natural Conversations
              </h3>
              <p className="text-gray-400">
                Our AI understands context and provides human-like responses.
              </p>
            </motion.div>
            <motion.div
              className="bg-black p-6 rounded-lg shadow-md border border-gray-800"
              variants={scaleIn}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="h-12 w-12 bg-gray-800 rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Lightning Fast
              </h3>
              <p className="text-gray-400">
                Get instant responses and solutions without any delay.
              </p>
            </motion.div>
            <motion.div
              className="bg-black p-6 rounded-lg shadow-md border border-gray-800"
              variants={scaleIn}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="h-12 w-12 bg-gray-800 rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Secure & Private
              </h3>
              <p className="text-gray-400">
                Your conversations are encrypted and never shared with third
                parties.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 md:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            How It Works
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerChildren}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="text-center" variants={fadeIn}>
              <motion.div
                className="h-16 w-16 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                1
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-white">Sign Up</h3>
              <p className="text-gray-400">
                Create your account in seconds with just an email and password.
              </p>
            </motion.div>
            <motion.div className="text-center" variants={fadeIn}>
              <motion.div
                className="h-16 w-16 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                2
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Ask Anything
              </h3>
              <p className="text-gray-400">
                Type your questions or requests in natural language.
              </p>
            </motion.div>
            <motion.div className="text-center" variants={fadeIn}>
              <motion.div
                className="h-16 w-16 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                3
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Get Solutions
              </h3>
              <p className="text-gray-400">
                Receive instant, helpful responses tailored to your needs.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-900 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            What You Can Do
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="bg-black p-6 rounded-lg shadow-md flex border border-gray-800"
              variants={slideUp}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div className="mr-4" whileHover={{ rotate: 10 }}>
                <div className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Get Research Assistance
                </h3>
                <p className="text-gray-400">
                  Find information, summarize content, and gather data
                  efficiently.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="bg-black p-6 rounded-lg shadow-md flex border border-gray-800"
              variants={slideUp}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div className="mr-4" whileHover={{ rotate: 10 }}>
                <div className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Schedule Management
                </h3>
                <p className="text-gray-400">
                  Plan your day, set reminders, and organize your calendar.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="bg-black p-6 rounded-lg shadow-md flex border border-gray-800"
              variants={slideUp}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div className="mr-4" whileHover={{ rotate: 10 }}>
                <div className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Creative Assistance
                </h3>
                <p className="text-gray-400">
                  Get help with writing, brainstorming ideas, and creative
                  projects.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="bg-black p-6 rounded-lg shadow-md flex border border-gray-800"
              variants={slideUp}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div className="mr-4" whileHover={{ rotate: 10 }}>
                <div className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Shopping Assistance
                </h3>
                <p className="text-gray-400">
                  Get product recommendations and comparison insights.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-900 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div
            className="space-y-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="bg-black p-6 rounded-lg shadow-md border border-gray-800"
              variants={fadeIn}
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-white">
                How secure is my data with ChatBuddy?
              </h3>
              <p className="text-gray-400">
                Your data is encrypted end-to-end and we never share your
                conversations with third parties. We adhere to strict privacy
                policies to ensure your information remains confidential.
              </p>
            </motion.div>
            <motion.div
              className="bg-black p-6 rounded-lg shadow-md border border-gray-800"
              variants={fadeIn}
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-white">
                Is there a free plan available?
              </h3>
              <p className="text-gray-400">
                Yes! You can start with our free plan that includes up to 50
                messages per day. For more extensive usage, check out our
                affordable premium plans.
              </p>
            </motion.div>
            <motion.div
              className="bg-black p-6 rounded-lg shadow-md border border-gray-800"
              variants={fadeIn}
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-white">
                Can I use ChatBuddy on mobile devices?
              </h3>
              <p className="text-gray-400">
                Absolutely! ChatBuddy works seamlessly on all devices including
                smartphones, tablets, and desktop computers.
              </p>
            </motion.div>
            <motion.div
              className="bg-black p-6 rounded-lg shadow-md border border-gray-800"
              variants={fadeIn}
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-white">
                How accurate are the responses?
              </h3>
              <p className="text-gray-400">
                Our AI is trained on extensive data to provide accurate and
                helpful responses. However, for critical decisions, we always
                recommend verifying information from official sources.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-black border-t border-b border-gray-800">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-6 text-white"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to Experience the Future of Conversation?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join thousands of satisfied users who rely on ChatBuddy every day.
          </motion.p>
          <motion.button
            className="px-8 py-3 bg-white text-black rounded-md text-lg font-semibold hover:bg-gray-200 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Get Started For Free
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12 px-4 md:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerChildren}
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div variants={fadeIn}>
              <h3 className="text-xl font-bold text-white mb-4">ChatBuddy</h3>
              <p className="mb-4">
                Your intelligent conversation partner for everyday tasks and
                complex problems.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="text-gray-500 hover:text-white"
                  whileHover={socialHoverEffect}
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-500 hover:text-white"
                  whileHover={socialHoverEffect}
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-500 hover:text-white"
                  whileHover={socialHoverEffect}
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.a>
              </div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                {["Features", "Pricing", "API", "Integrations"].map(
                  (item, index) => (
                    <motion.li key={index} whileHover={{ x: 2 }}>
                      <motion.a
                        href="#"
                        className="hover:text-white"
                        whileHover={linkHoverEffect}
                      >
                        {item}
                      </motion.a>
                    </motion.li>
                  )
                )}
              </ul>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                {["Documentation", "Tutorials", "Blog", "Support"].map(
                  (item, index) => (
                    <motion.li key={index} whileHover={{ x: 2 }}>
                      <motion.a
                        href="#"
                        className="hover:text-white"
                        whileHover={linkHoverEffect}
                      >
                        {item}
                      </motion.a>
                    </motion.li>
                  )
                )}
              </ul>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                {[
                  "About Us",
                  "Careers",
                  "Privacy Policy",
                  "Terms of Service",
                ].map((item, index) => (
                  <motion.li key={index} whileHover={{ x: 2 }}>
                    <motion.a
                      href="#"
                      className="hover:text-white"
                      whileHover={linkHoverEffect}
                    >
                      {item}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="border-t border-gray-800 mt-8 pt-8 text-sm text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>
              &copy; {new Date().getFullYear()} ChatBuddy. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
