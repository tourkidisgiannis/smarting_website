import { ServicesList } from "@/components/sections/ServicesList";

export const metadata = {
  title: "Υπηρεσίες - SMARTING.GR",
  description: "Εξειδικευμένες υπηρεσίες: Ηλεκτρολογική Τεχνική Υποστήριξη, Δίκτυα & Καλωδιώσεις, CCTV, Συστήματα Ασφαλείας.",
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Οι Υπηρεσίες μας
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Προσφέρουμε ολοκληρωμένες λύσεις ηλεκτρολογικής τεχνικής υποστήριξης, 
            δικτύων και συστημάτων ασφαλείας για κάθε ανάγκη.
          </p>
        </div>

        <ServicesList />
      </div>
    </div>
  );
}
