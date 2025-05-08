"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-blue-600 text-white dark:bg-gray-900 dark:text-white py-20 px-6 text-center"
    >
      <h1 className="text-4xl font-bold mb-4">
        Sell Your Unused Software Licenses
      </h1>
      <p className="text-lg mb-6">
        Turn unused licenses into cash quickly and securely.
      </p>
      <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-100">
        Get a Quote
      </button>
    </motion.section>
  );
}
