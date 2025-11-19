import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { TrackingScripts } from "@/components/features/TrackingScripts";
import { MailerLiteScript } from "@/components/features/MailerLiteScript";
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
      { url: '/librus/favicon.ico', sizes: 'any' },
      { url: '/librus/icon.png', type: 'image/png' },
    ],
    shortcut: '/librus/favicon.ico',
    apple: '/librus/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        {/* Preconnect dla MailerLite */}
        <link rel="preconnect" href="https://assets.mailerlite.com" />
      </head>
      <body
        className={`${outfit.variable} antialiased font-sans`}
      >
        <Suspense fallback={null}>
          <TrackingScripts />
        </Suspense>
        {children}
        <MailerLiteScript />
      </body>
    </html>
  );
}
