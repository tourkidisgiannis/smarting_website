import { ReviewsList } from "@/components/sections/ReviewsList";

export const metadata = {
  title: "Κριτικές - SMARTING.GR",
  description: "Δείτε τι λένε οι πελάτες μας. Βαθμολογία 5.0 από 60 κριτικές.",
};

export default function ReviewsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <ReviewsList />
      </div>
    </div>
  );
}
