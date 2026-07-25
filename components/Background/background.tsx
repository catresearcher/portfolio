"use client";

import { FlickeringGrid } from "@/components/ui/flickering-grid";

export function Background() {
  return (
    <div className="absolute inset-0 -z-10 h-45  overflow-hidden pointer-events-none">
      <FlickeringGrid
        className="h-full w-full"
        squareSize={3}
        gridGap={4}
        color="oklch(0.3203 0 0)"
        maxOpacity={0.9}
        flickerChance={0.1}
        width={2000}
        height={300}
      />

      <div className="absolute inset-0 bg-linear-to-b from-background/30 via-background/75 to-background" />
    </div>
  );
}
