import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Background } from "@/components/Background/background";
import Providers from "./providers";
import { DockDemo } from "@/components/Navbar/navbar";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Aleksi Tiainen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.className} h-full antialiased`}>
      <body>
        <Background />

        <Providers>{children}</Providers>
        <DockDemo />
      </body>
    </html>
  );
}
