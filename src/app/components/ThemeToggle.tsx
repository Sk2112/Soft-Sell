"use client"; // <-- Add this line at the top

import { motion } from "framer-motion";
import { useTheme } from "../hooks";

export function ThemeToggle() {
  const [theme, toggleTheme] = useTheme();

  return (
    <motion.button
      onClick={() => toggleTheme()}
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
    >
      <motion.span
        key={theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-2xl"
      >
        {theme === 'light' ? "🌙" : "🌞"}
      </motion.span>
    </motion.button>
  );
}
