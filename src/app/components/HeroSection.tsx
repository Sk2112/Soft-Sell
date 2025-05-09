"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px 0px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.7 }}
      className="bg-blue-600 text-white dark:bg-gray-900 py-20 px-6 text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-white text-4xl font-bold mb-4"
      >
        Sell Your Unused Software Licenses
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-lg mb-6"
      >
        Turn unused licenses into cash quickly and securely.
      </motion.p>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="bg-white text-blue-600 font-semibold py-2 px-6 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      >
        Get a Quote
      </motion.button>
    </motion.section>
  );
}
