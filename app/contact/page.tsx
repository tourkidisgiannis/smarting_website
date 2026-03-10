import { Metadata } from "next";
import ContactPageClient from "@/components/ContactPageClient";

export const metadata: Metadata = {
  title: "Επικοινωνία",
  description:
    "Επικοινωνήστε με την Smarting.gr για ηλεκτρολογικές εργασίες, συστήματα ασφαλείας & smart home. Βρισκόμαστε στη Θεσσαλονίκη και είμαστε έτοιμοι να σας βοηθήσουμε.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
