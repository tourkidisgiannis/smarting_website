import { Metadata } from "next";
import businessInfo from "@/app/mocks/business-info.json";

export const metadata: Metadata = {
  title: "Πολιτική Απορρήτου - SMARTING.GR",
  description:
    "Πολιτική απορρήτου σχετικά με τη συλλογή και επεξεργασία προσωπικών δεδομένων σύμφωνα με τον GDPR.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Πολιτική Απορρήτου
        </h1>
        <p className="text-muted-foreground">
          Τελευταία ενημέρωση: Δεκέμβριος 2025
        </p>
      </div>

      <div className="prose prose-gray max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Εισαγωγή</h2>
          <p className="mb-4">
            Η εταιρεία {businessInfo.name} («εμείς», «η Εταιρεία») αποδίδει
            ιδιαίτερη σημασία στην προστασία των προσωπικών δεδομένων και
            συμμορφώνεται πλήρως με τον Γενικό Κανονισμό Προστασίας Δεδομένων
            (ΕΕ 2016/679 – GDPR) και την ελληνική νομοθεσία.
          </p>
          <p className="mb-4">
            Η παρούσα Πολιτική Απορρήτου περιγράφει τον τρόπο με τον οποίο
            συλλέγουμε, επεξεργαζόμαστε και προστατεύουμε τα προσωπικά δεδομένα
            που μας παρέχετε μέσω της ιστοσελίδας μας.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Τα δικαιώματά σας</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Πρόσβαση στα προσωπικά σας δεδομένα</li>
            <li>Διόρθωση ή διαγραφή</li>
            <li>Περιορισμό ή εναντίωση στην επεξεργασία</li>
            <li>Φορητότητα δεδομένων</li>
            <li>Ανάκληση συγκατάθεσης, όπου αυτή αποτελεί τη νομική βάση</li>
          </ul>
          <p className="mb-4">
            Για την άσκηση των δικαιωμάτων σας, μπορείτε να επικοινωνήσετε στο{" "}
            info@smarting.gr.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Υπεύθυνος επεξεργασίας
          </h2>
          <p className="mb-4">
            Υπεύθυνος επεξεργασίας είναι η εταιρεία{" "}
            <strong>{businessInfo.name}</strong>, με έδρα{" "}
            {businessInfo.address.street}, {businessInfo.address.city},{" "}
            {businessInfo.address.postalCode}, {businessInfo.address.country},
            Αριθμός Γ.Ε.ΜΗ.: {businessInfo["business-registry-number"]}.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Ποια δεδομένα συλλέγουμε
          </h2>
          <p className="mb-2">
            Μέσω της φόρμας επικοινωνίας συλλέγονται τα ακόλουθα δεδομένα:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Ονοματεπώνυμο</li>
            <li>Διεύθυνση email</li>
            <li>Αριθμός τηλεφώνου, εφόσον απαιτείται</li>
            <li>Υπηρεσία ενδιαφέροντος</li>
            <li>Περιεχόμενο μηνύματος</li>
          </ul>
          <p className="mb-4">
            Δεν συλλέγονται ειδικές κατηγορίες (ευαίσθητα) προσωπικών δεδομένων.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Σκοπός επεξεργασίας</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Διαχείριση και απάντηση αιτημάτων επικοινωνίας</li>
            <li>Παροχή πληροφοριών σχετικά με τις υπηρεσίες της Εταιρείας</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Νομική βάση επεξεργασίας
          </h2>
          <p className="mb-4">
            Η επεξεργασία των προσωπικών δεδομένων βασίζεται:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              στο Άρθρο 6 παρ. 1 στοιχ. β΄ GDPR, όταν το αίτημα αφορά
              προσυμβατική επικοινωνία
            </li>
            <li>
              στο Άρθρο 6 παρ. 1 στοιχ. στ΄ GDPR (έννομο συμφέρον), για τη
              διαχείριση γενικών αιτημάτων επικοινωνίας
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Χρονικό διάστημα αποθήκευσης
          </h2>
          <p className="mb-4">
            Τα δεδομένα διατηρούνται για χρονικό διάστημα έως{" "}
            <strong>12 μήνες</strong> μετά την ολοκλήρωση της επικοινωνίας,
            εκτός εάν απαιτείται μεγαλύτερη διατήρηση λόγω νόμιμης υποχρέωσης.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Εκτελούντες την επεξεργασία
          </h2>
          <p className="mb-4">
            Η αποστολή των δεδομένων της φόρμας επικοινωνίας πραγματοποιείται
            μέσω email με χρήση της βιβλιοθήκης Nodemailer. Τα δεδομένα
            διαβιβάζονται αποκλειστικά στον πάροχο υπηρεσιών email/hosting, ο
            οποίος ενεργεί ως εκτελών την επεξεργασία σύμφωνα με το Άρθρο 28
            GDPR.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
          <p className="mb-4">
            Η ιστοσελίδα χρησιμοποιεί μόνο απολύτως απαραίτητα cookies για τη
            σωστή λειτουργία της. Δεν χρησιμοποιούνται cookies ανάλυσης,
            marketing ή παρακολούθησης και δεν πραγματοποιείται profiling.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Ασφάλεια δεδομένων</h2>
          <p className="mb-4">
            Εφαρμόζουμε κατάλληλα τεχνικά και οργανωτικά μέτρα για την προστασία
            των προσωπικών δεδομένων από μη εξουσιοδοτημένη πρόσβαση, απώλεια,
            αλλοίωση ή παράνομη επεξεργασία.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Υποβολή καταγγελίας</h2>
          <p className="mb-4">
            Εάν θεωρείτε ότι η επεξεργασία των δεδομένων σας παραβιάζει τον
            GDPR, έχετε δικαίωμα υποβολής καταγγελίας στην Αρχή Προστασίας
            Δεδομένων Προσωπικού Χαρακτήρα (ΑΠΔΠΧ).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Αλλαγές στην πολιτική</h2>
          <p className="mb-4">
            Η παρούσα Πολιτική Απορρήτου ενδέχεται να τροποποιείται. Η
            επικαιροποιημένη έκδοση θα είναι πάντοτε διαθέσιμη στην ιστοσελίδα
            μας.
          </p>
        </section>
      </div>
    </div>
  );
}
