import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Darmowy Webinar: Egzamin Ósmoklasisty - Paulina od Matematyki",
  description: "Dołącz do darmowego webinaru i odbierz plan nauki na 6 miesięcy. Bez stresu i kłótni.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={cn(outfit.className, "antialiased min-h-screen bg-white")}>
        {children}
      </body>
    </html>
  );
}
