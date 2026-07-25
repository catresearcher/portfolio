"use client";
import { GitHubCalendar } from "react-github-calendar";

export default function Activity() {
  return (
    <div className="mt-10">
      <GitHubCalendar
        username="catresearcher"
        blockMargin={3}
        fontSize={10}
        theme={{
          light: [
            "#ebedf0", // gray (0 contributions)
            "#c7ebe5",
            "#97d7cc",
            "#56a99b", // your primary
            "#3d8b7e",
          ],
          dark: [
            "oklch(0.2435 0 0)",
            "#245f57",
            "#3f887e",
            "#56a99b",
            "#7cc7bb",
          ],
        }}
      />
    </div>
  );
}
