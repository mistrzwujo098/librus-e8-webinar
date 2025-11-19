import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { TrackingScripts } from "@/components/features/TrackingScripts";
import { Suspense } from "react";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Egzamin Ósmoklasisty i Matura - Paulina od Matematyki",
  description: "Skuteczne przygotowanie do egzaminów z matematyki. Sprawdź darmowe materiały i kursy.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${outfit.variable} antialiased font-sans`}
      >
        <Suspense fallback={null}>
          <TrackingScripts />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
