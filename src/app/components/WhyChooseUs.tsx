"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px 0px" });

  const reasons = [
    { icon: "⚡", title: "Fast Process", desc: "Quick valuation and payment turnaround." },
    { icon: "🔒", title: "Secure & Private", desc: "Your data is safe and encrypted." },
    { icon: "💸", title: "Best Offers", desc: "We offer the highest possible value." },
    { icon: "🤝", title: "Trusted by Thousands", desc: "We’re the go-to for license resale." },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.7 }}
      className="py-20 px-6 bg-white dark:bg-gray-900 text-center transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-gray-100">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="flex items-start space-x-4 bg-gray-50 dark:bg-gray-800 p-4 rounded shadow-sm dark:shadow-gray-700/40 text-left transition-colors duration-300"
          >
            <div className="text-3xl">{item.icon}</div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
