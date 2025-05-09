"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ImageResgistry } from "../constant";

export function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px 0px" });

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-center"
    >
      <motion.h2
        className="text-3xl font-bold mb-8 text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
      >
        How it Works
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[ImageResgistry.Upload, ImageResgistry.Valuation, ImageResgistry.Payment].map((src, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={itemVariants}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md dark:shadow-gray-700/40 transition-colors duration-300"
          >
            <Image src={src} alt={`Icon ${i}`} className="w-16 h-16 mb-4" />
            <p className="text-gray-700">
              {["Upload License", "Get Valuation", "Get Paid"][i]}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
