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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        {/* Favicon - using PNG (original file was PNG disguised as .ico) */}
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-original.png" />
        <link rel="icon" type="image/png" sizes="180x180" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="shortcut icon" href="/favicon-original.png" />

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
