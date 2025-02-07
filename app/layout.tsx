import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils"
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "electrobaba",
  description: "Online catalog for all your  electrical components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden", font.className)}
      >
        {children}
      </body>
    </html>
  );
}
