"use client";
import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-6 inset-x-0 mx-auto w-fit text-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
    >
      <div className="text-xs text-text-low">Scroll para explorar</div>
      <motion.span
        aria-hidden
        className="mt-1 block text-text-low"
        initial={{ y: 0 }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        ↓
      </motion.span>
    </motion.div>
  );
}
