"use client"; // <-- Add this line at the top

import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes"; // Make sure you have 'next-themes' installed

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isToggled, setIsToggled] = useState(theme === "dark");

  const handleToggle = () => {
    setIsToggled(!isToggled);
    setTheme(isToggled ? "light" : "dark");
  };

  return (
    <motion.button
      onClick={handleToggle}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      className="p-3 bg-gray-800 text-white rounded-full dark:bg-gray-300 dark:text-gray-800"
    >
      {isToggled ? "🌙" : "🌞"}
    </motion.button>
  );
}
