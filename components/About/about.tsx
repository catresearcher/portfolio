"use client";
import { useInfo } from "@/context/infoContext";

export default function About() {
  const { info } = useInfo();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium text-primary-foreground">About</h1>
      <p className="text-muted-foreground">{info.hero_description}</p>
    </div>
  );
}
