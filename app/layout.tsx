import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { Toaster } from "@/components/ui/sonner";
import { generateLocalBusinessSchema } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SMARTING.GR - Ηλεκτρολογική Τεχνική Υποστήριξη | Δίκτυα, CCTV, Συστήματα Ασφαλείας",
  description: "Εξειδικευμένες υπηρεσίες ηλεκτρολογικής τεχνικής υποστήριξης, εγκατάστασης δικτύων, CCTV και συστημάτων ασφαλείας στην Ιωνία. Βαθμολογία 5.0 από 60 κριτικές.",
  keywords: ["ηλεκτρολόγος", "CCTV", "συστήματα ασφαλείας", "δίκτυα", "Ιωνία", "τεχνική υποστήριξη"],
  openGraph: {
    title: "SMARTING.GR - Ηλεκτρολογική Τεχνική Υποστήριξη",
    description: "Εξειδικευμένες υπηρεσίες ηλεκτρολογικής τεχνικής υποστήριξης, εγκατάστασης δικτύων, CCTV και συστημάτων ασφαλείας.",
    type: "website",
  },
};

import { AnimatedBackground } from "@/components/layout/AnimatedBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = generateLocalBusinessSchema();

  return (
    <html lang="el">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnimatedBackground />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyCTA />
        <Toaster />
      </body>
    </html>
  );
}
