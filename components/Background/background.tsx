"use client";

import { motion } from "framer-motion";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export function Background() {
  return (
    <motion.div
      className="absolute inset-0 -z-10 h-45 overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <FlickeringGrid
        className="h-full w-full"
        squareSize={2}
        gridGap={6}
        color="oklch(0.3803 0 0)"
        maxOpacity={0.9}
        flickerChance={0.2}
        width={2000}
        height={300}
      />

      <div className="absolute inset-0 bg-linear-to-b from-background/6 via-background to-background" />
    </motion.div>
  );
}
