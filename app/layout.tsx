import type { Metadata } from "next";
import { Geist, Geist_Mono, Electrolize, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";

import { Toaster } from "@/components/ui/sonner";
import { generateLocalBusinessSchema } from "@/lib/schema";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
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
  title: {
    default:
      "Ηλεκτρολογικές Εγκαταστάσεις & Βιομηχανικοί Αυτοματισμοί | Συστήματα Ασφαλείας & Smart Home – Smarting.gr",
    template: "%s – Smarting.gr",
  },

  description:
    "Ηλεκτρολογικές εγκαταστάσεις και βιομηχανικοί αυτοματισμοί. Συστήματα ασφαλείας, κάμερες, συναγερμοί, access control, θυροτηλεοράσεις, ενσύρματα & ασύρματα δίκτυα και smart home λύσεις σε Θεσσαλονίκη και Βόρεια Ελλάδα.",
  keywords: [
    "ηλεκτρολογικές εγκαταστάσεις",
    "βιομηχανικοί αυτοματισμοί",
    "συστήματα ασφαλείας",
    "κάμερες CCTV",
    "συναγερμοί",
    "access control",
    "θυροτηλεοράσεις",
    "δομημένη καλωδίωση",
    "smart home",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title:
      "Ηλεκτρολογικές Εγκαταστάσεις & Βιομηχανικοί Αυτοματισμοί | Συστήματα Ασφαλείας & Smart Home",
    description:
      "Ηλεκτρολογικές εγκαταστάσεις, βιομηχανικοί αυτοματισμοί, κάμερες, συναγερμοί, access control, θυροτηλεοράσεις, ενσύρματα & ασύρματα δίκτυα και smart home λύσεις σε Θεσσαλονίκη και Βόρεια Ελλάδα.",
    url: "https://www.smarting.gr",
    siteName: "Smarting.gr",
    locale: "el_GR",
    type: "website",
    images: [
      {
        url: "https://www.smarting.gr/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Smarting.gr – Ηλεκτρολογικές Εγκαταστάσεις, Συστήματα Ασφαλείας & Smart Home",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ηλεκτρολογικές Εγκαταστάσεις & Αυτοματισμοί | Smarting.gr",
    description:
      "Συστήματα ασφαλείας, κάμερες, δίκτυα και smart home λύσεις για κατοικίες και επιχειρήσεις.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4A90A0",
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
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${electrolize.variable} ${poppins.variable} antialiased`}
      >
        <AnimatedBackground />
        <Header />
        <main className="min-h-screen pb-20 md:pb-0">
          {children}
          <Analytics />
        </main>
        <Footer />
        <StickyCTA />
        {/* <FacebookMessenger /> */}
        <Toaster />
      </body>
    </html>
  );
}
