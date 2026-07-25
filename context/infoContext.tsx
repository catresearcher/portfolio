"use client";

import { InfoProps } from "@/types/info";
import { createContext, useContext } from "react";
import { info } from "@/data/info";

type InfoContextProps = {
  info: InfoProps;
};

export const InfoContext = createContext<InfoContextProps | null>(null);

export function InfoProvider({ children }: { children: React.ReactNode }) {
  return (
    <InfoContext.Provider value={{ info }}>{children}</InfoContext.Provider>
  );
}

export function useInfo() {
  const ctx = useContext(InfoContext);
  if (!ctx) throw new Error("useInfo must be used within InfoProvider");
  return ctx;
}
