"use client";

import { motion } from "framer-motion";
import { InfoProvider } from "@/context/infoContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <InfoProvider>
      <motion.div
        className="relative min-h-screen flex flex-col items-center"
        initial={{
          opacity: 0,
          filter: "blur(12px)",
        }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </InfoProvider>
  );
}
