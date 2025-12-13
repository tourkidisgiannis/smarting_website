import type { Metadata } from "next";
import { Geist, Geist_Mono, Electrolize, Poppins } from "next/font/google";
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
  metadataBase: new URL("https://www.smarting.gr"),
  title:
    "SMARTING.GR - Smart Solutions - Ηλεκτρολόγος Θεσσαλονίκη | CCTV, Συναγερμοί, Ηλεκτρολογικές Εργασίες",
  description:
    "Εξειδικευμένος ηλεκτρολόγος στη Θεσσαλονίκη και όλη τη Βόρεια Ελλάδα. Ασύρματα συστήματα Καμερών, συναγερμοί, εγκατάσταση δικτύων,κατασκευή ιστιοσελίδας, ηλεκτρολογικές εργασίες. Εταιρεία βιομηχανικών λύσεων σε κτίρια, ιδιωτικούς και κοινόχρηστους χώρους. Εξειδικευμένοι σε έξυπνα σπίτια, ηλεκτρικούς φορτιστές, πυρανίχνευση, φωτοβολταϊκά & ζεστό νερό. Περισσότεροι από 1000 πελάτες σε Όλη την Ελλάδα.",
  keywords: [
    "ηλεκτρολόγος Θεσσαλονίκη",
    "ηλεκτρολόγος ιωνία",
    "ηλεκτρολόγος κορδελιόπολη",
    "ηλεκτρολόγος Εύοσμος",
    "ηλεκτρολόγος Πυλαία",
    "ηλεκτρολόγος ολύμπια",
    "κάμερες Θεσσαλονίκη",
    "συστήματα ασφαλείας Θεσσαλονίκη",
    "συναγερμοί Θεσσαλονίκη",
    "θυροτηλεόραση Θεσσαλονίκη",
    "έξυπνο σπίτι Θεσσαλονίκη",
    "φωτοβολταϊκά Θεσσαλονίκη",
    "φορτιστές ηλεκτρικών οχημάτων Θεσσαλονίκη",
    "εγκατάσταση δικτύων Θεσσαλονίκη",
    "WiFi mesh Θεσσαλονίκη",
    "ηλεκτρολογικές εργασίες Θεσσαλονίκη",
    "έξυπνα συστήματα ασφάλειας",
    "πυρασφάλεια Θεσσαλονίκη",
    "φωτοβολταϊκά και ζεστό νερό",
    "εταιρεία ηλεκτρολογικών λύσεων",
    "εταιρεία εγκατάστασης και βιομηχανικών λύσεων",
    "εγκατάσταση κτιρίου Θεσσαλονίκη",
    "έξυπνο σπίτι ιωνία",
    "έξυπνο σπίτι κορδελιό",
    "έξυπνο σπίτι Εύοσμος",
    "έξυπνο σπίτι Πυλαία",
    "έξυπνο σπίτι ολύμπια",
    "έξυπνη θυροτηλεόραση",
    "έξυπνη πόρτα",
    "έξυπνη κλειδαριά",
    "έξυπνος φωτισμός",
    "έξυπνος θερμοστάτης",
    "έξυπνες θερμοσίφωνες",
    "έξυπνες λύσεις",
    "έξυπνες εγκαταστάσεις",
    "έξυπνες λύσεις εγκατάστασης",
    "έξυπνες λύσεις για κτίρια",
    "έξυπνες λύσεις για κοινόχρηστα",
    "έξυπνες λύσεις για κατοικίες",
    "έξυπνες λύσεις για κτίριο",
    "έξυπνες λύσεις για οικοδομή",
    "έξυπνες λύσεις για ολόκληρο κτίριο",
    "έξυπνες λύσεις για μικρό κτίριο",
    "έξυπνες λύσεις για μεγάλο κτίριο",
    "έξυπνες λύσεις για γραφεία",
    "έξυπνες λύσεις για επιχειρήσεις",
    "έξυπνες λύσεις για επαγγελματικά κτίρια",
    "έξυπνες λύσεις για κτίρια γραφείων",
    "έξυπνες λύσεις για κτίρια κατοικίας",
    "έξυπνες λύσεις για εταιρείες",
    "έξυπνες λύσεις για επιχειρήσεις",
    "έξυπνες λύσεις για οργανισμούς",
    "έξυπνες λύσεις για κοινόχρηστα διαμερίσματα",
    "έξυπνες λύσεις για επιχειρηματίες",
    "έξυπνες λύσεις για κοινόχρηστα κτίρια",
    "έξυπνες λύσεις για πολυκατοικίες",
    "έξυπνες λύσεις για πολυκατοικίες γραφείων",
    "έξυπνες λύσεις για πολυκατοικίες κατοικίας",
    "έξυπνες λύσεις για πολυκατοικίες επαγγελματικά",
    "έξυπνες λύσεις για πολυκατοικίες επιχειρήσεων",
    "έξυπνες λύσεις για πολυκατοικίες οργανισμών",
    "έξυπνες λύσεις για πολυκατοικίες εταιρειών",
    "έξυπνες λύσεις για πολυκατοικίες επιχειρήσεων",
    "έξυπνες λύσεις για πολυκατοικίες ιδιωτών",
    "έξυπνες λύσεις για πολυκατοικίες ιδιοκτητών",
    "έξυπνες λύσεις για πολυκατοικίες ενοικιαστών",
    "έξυπνες λύσεις για πολυκατοικίες κατοίκων",
    "έξυπνες λύσεις για πολυκατοικίες κατοίκων και επιχειρήσεων",
    "κατασκευή ιστιοσελίδων",
  ],
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon-16x16.png",
    apple: "/images/apple-touch-icon.png",
  },
  openGraph: {
    title:
      "SMARTING.GR - Smart Solutions - Ηλεκτρολόγος Θεσσαλονίκη | CCTV, Συναγερμοί, Ηλεκτρολογικές Εργασίες",
    description:
      "Εξειδικευμένος ηλεκτρολόγος στη Θεσσαλονίκη και όλη τη Βόρεια Ελλάδα. Ασύρματα συστήματα Καμερών, συναγερμοί, εγκατάσταση δικτύων, ηλεκτρολογικές εργασίες, κατασκευή ιστιοσελίδων.",
    url: "https://www.smarting.gr",
    siteName: "Smarting.gr",
    locale: "el_GR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Smarting.gr - Συστήματα Ασφαλείας & Τεχνολογία στην Ελλάδα",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SMARTING.GR - Smart Solutions - Ηλεκτρολόγος Θεσσαλονίκη | CCTV, Συναγερμοί, Ηλεκτρολογικές Εργασίες",
    description:
      "Εξειδικευμένος ηλεκτρολόγος στη Θεσσαλονίκη και όλη τη Βόρεια Ελλάδα. Ασύρματα συστήματα Καμερών, συναγερμοί, εγκατάσταση δικτύων, ηλεκτρολογικές εργασίες.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${electrolize.variable} ${poppins.variable} antialiased`}
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
