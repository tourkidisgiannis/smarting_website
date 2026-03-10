import { Metadata } from "next";
import { AnimatedCategoriesContent } from "@/components/AnimatedCategoriesContent";

export const metadata: Metadata = {
  title: "Υπηρεσίες Ηλεκτρολογικών Εγκαταστάσεων",

  description:
    "Ολοκληρωμένες υπηρεσίες: ηλεκτρολογικές εγκαταστάσεις, CCTV, συστήματα ασφαλείας & smart home λύσεις για κατοικίες και επιχειρήσεις στη Θεσσαλονίκη.",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Υπηρεσίες Ηλεκτρολογικών Εγκαταστάσεων & Συστημάτων Ασφαλείας",
    description:
      "Εξειδικευμένες υπηρεσίες: ηλεκτρολογικές εγκαταστάσεις, CCTV, συστήματα ασφαλείας & smart home λύσεις για κάθε ανάγκη.",
    type: "website",
    locale: "el_GR",
    url: "https://www.smarting.gr/services",
    siteName: "Smarting.gr",
    images: [
      {
        url: "https://www.smarting.gr/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Smarting.gr – Υπηρεσίες Ηλεκτρολογικών Εγκαταστάσεων & Ασφάλειας",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Υπηρεσίες | Smarting.gr",
    description:
      "Ηλεκτρολογικές εγκαταστάσεις, CCTV, συστήματα ασφαλείας και smart home λύσεις.",
    images: ["https://www.smarting.gr/og-services.jpg"],
  },
};

export default function CategoriesPage() {
  return <AnimatedCategoriesContent />;
}
