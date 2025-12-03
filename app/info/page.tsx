import { InfoSection } from "@/components/sections/InfoSection";

export const metadata = {
  title: "Πληροφορίες - SMARTING.GR",
  description: "Μάθετε περισσότερα για την SMARTING.GR, τις πιστοποιήσεις μας και το ωράριο λειτουργίας.",
};

export default function InfoPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Πληροφορίες
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Μάθετε περισσότερα για την εταιρεία μας, τις πιστοποιήσεις και το ωράριο λειτουργίας.
          </p>
        </div>

        <InfoSection />
      </div>
    </div>
  );
}
