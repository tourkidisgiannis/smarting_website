import type { Metadata } from "next";
import { Geist, Geist_Mono, Electrolize } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { FacebookMessenger } from "@/components/FacebookMessenger";
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

// Bold display font for hero headings
const electrolize = Electrolize({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title:
    "SMARTING.GR - Smart Solutions - Ηλεκτρολογική Τεχνική Υποστήριξη Θεσσαλονίκη | Δίκτυα, CCTV, Συστήματα Ασφαλείας",
  description:
    "Εξειδικευμένες υπηρεσίες ηλεκτρολογικής τεχνικής υποστήριξης, εγκατάστασης δικτύων, CCTV και συστημάτων ασφαλείας στη Θεσσαλονίκη και την Ιωνία. Βαθμολογία 5.0 από 60+ κριτικές.",
  keywords: [
    "ηλεκτρολόγος Θεσσαλονίκη",
    "CCTV Θεσσαλονίκη",
    "συστήματα ασφαλείας Θεσσαλονίκη",
    "εγκατάσταση δικτύων",
    "τεχνική υποστήριξη",
    "Ιωνία",
    "Θεσσαλονίκη",
    "ηλεκτρολογικές εργασίες",
    "Συστήματα Ασφαλείας",
    "Κάμερες Ασφαλείας",
    "Συναγερμοί",
    "Θυροτηλεοράσεις",
    "Access Control",
    "Ηλεκτρολογικές Εγκαταστάσεις",
    "Φωτισμός",
    "Φορτιστές Ηλεκτρικών Οχημάτων",
    "Smart Home",
    "Αυτοματισμοί",
    "Έξυπνος Φωτισμός",
    "Δίκτυα & Internet",
    "WiFi Mesh",
    "Δομημένη Καλωδίωση",
    "Οικιακές Λύσεις",
    "Πυρανίχνευση",
    "Πυρασφάλεια",
    "Φωτοβολταϊκά",
    "Ανιχνευτές Καπνού",
    "Ενεργειακή Διαχείριση",
    "Συντήρηση Συστημάτων",
  ],
  openGraph: {
    title: "SMARTING.GR - Smart Solutions",
    description:
      "Προηγμένες υπηρεσίες ηλεκτρολογικών εγκαταστάσεων, δικτύων, CCTV και συστημάτων ασφαλείας στη Θεσσαλονίκη και τις γύρω περιοχές.",
    type: "website",
    locale: "el_GR",
    siteName: "SMARTING.GR",
    url: "https://www.smarting.gr/",
    images: [
      {
        url: "https://www.smarting.gr/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SMARTING.GR - Ηλεκτρολογική Τεχνική Υποστήριξη Θεσσαλονίκη",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SMARTING.GR - Ηλεκτρολογικές Υπηρεσίες & Συστήματα Ασφαλείας στη Θεσσαλονίκη",
    description:
      "Επαγγελματικές υπηρεσίες ηλεκτρολογικής υποστήριξης, δικτύων, CCTV και ασφαλείας στη Θεσσαλονίκη.",
    images: ["https://www.smarting.gr/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.smarting.gr/",
  },
  // Extra metadata beneficial for location-based SEO
  other: {
    service_area: "Thessaloniki, Ionía, Central Macedonia",
    business_type:
      "Electrical Support, CCTV, Security Systems, Network Installations",
  },
  icons: {
    icon: "/images/smarting_logo_vertical.png",
    shortcut: "/images/smarting_logo_vertical.png",
    apple: "/images/smarting_logo_vertical.png",
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
        className={`${geistSans.variable} ${geistMono.variable} ${electrolize.variable} antialiased`}
      >
        <AnimatedBackground />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyCTA />
        <FacebookMessenger />
        <Toaster />
      </body>
    </html>
  );
}
