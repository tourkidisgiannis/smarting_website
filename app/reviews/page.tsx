import { GoogleReviews } from "@/components/sections/GoogleReviews";

export const metadata = {
  title: "Κριτικές Πελατών",
  description: "Δείτε τι λένε οι πελάτες μας για τις ηλεκτρολογικές εγκαταστάσεις & τα συστήματα ασφαλείας της Smarting.gr.",
};

export default function ReviewsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <GoogleReviews />
      </div>
    </div>
  );
}
