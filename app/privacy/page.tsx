import { Metadata } from "next";
import businessInfo from "@/app/mocks/business-info.json";

export const metadata: Metadata = {
  title: "Πολιτική Απορρήτου - SMARTING.GR",
  description:
    "Η πολιτική απορρήτου της εταιρείας μας που περιγράφει τον τρόπο συλλογής και επεξεργασίας των προσωπικών δεδομένων",
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
            Η εταιρεία <strong>{businessInfo.name}</strong> («εμείς» ή «η
            Εταιρεία») αποδίδει ιδιαίτερη σημασία στην προστασία των προσωπικών
            δεδομένων των επισκεπτών της ιστοσελίδας της και των πελατών της. Η
            παρούσα Πολιτική Απορρήτου περιγράφει τον τρόπο με τον οποίο
            συλλέγουμε, χρησιμοποιούμε, αποθηκεύουμε και προστατεύουμε τα
            προσωπικά δεδομένα που μας παρέχετε μέσω της ιστοσελίδας μας.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Τα δικαιώματά σας</h2>
          <p className="mb-4">Έχετε το δικαίωμα να ζητήσετε:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Πρόσβαση στα προσωπικά σας δεδομένα</li>
            <li>Διόρθωση ανακριβών δεδομένων</li>
            <li>Διαγραφή των δεδομένων σας</li>
            <li>Περιορισμό της επεξεργασίας των δεδομένων σας</li>
            <li>Μεταφορά των δεδομένων σας σε άλλο φορέα</li>
            <li>Αντιταχθείτε στην επεξεργασία</li>
            <li>Αποσύρετε τη συγκατάθεσή σας ανά πάσα στιγμή</li>
          </ul>
          <p className="mb-4">
            Για να ασκήσετε τα παραπάνω δικαιώματα, επικοινωνήστε μαζί μας στη
            διεύθυνση {businessInfo.email}.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Ποιος είναι ο υπεύθυνος για την επεξεργασία δεδομένων;
          </h2>
          <p className="mb-4">
            Ο υπεύθυνος για την επεξεργασία δεδομένων είναι η εταιρεία{" "}
            <strong>{businessInfo.name}</strong>, με έδρα στην{" "}
            {businessInfo.address.street}, {businessInfo.address.city},{" "}
            {businessInfo.address.postalCode}, {businessInfo.address.country},
            με αριθμό ΓΕΜΗ {businessInfo["business-registry-number"]}.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Ποια δεδομένα συλλέγουμε;
          </h2>
          <h3 className="text-xl font-medium mb-2">
            Δεδομένα που συλλέγουμε μέσω της φόρμας επικοινωνίας:
          </h3>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Όνομα:</strong> Για να γνωρίζουμε πώς να σας απευθυνθούμε
            </li>
            <li>
              <strong>Email:</strong> Για να σας απαντήσουμε και να σας
              στείλουμε επιβεβαίωση λήψης
            </li>
            <li>
              <strong>Τηλέφωνο:</strong> Για να μπορέσουμε να επικοινωνήσουμε
              μαζί σας για το αίτημά σας
            </li>
            <li>
              <strong>Υπηρεσία ενδιαφέροντος:</strong> Για να ταξινομήσουμε και
              να σας παρέχουμε την κατάλληλη υποστήριξη
            </li>
            <li>
              <strong>Μήνυμα:</strong> Για να κατανοήσουμε τις ανάγκες και τις
              ερωτήσεις σας
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Ποιος είναι ο σκοπός της επεξεργασίας;
          </h2>
          <p className="mb-4">
            Τα προσωπικά σας δεδομένα χρησιμοποιούνται για τους εξής σκοπούς:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Αποστολή επιβεβαίωσης στην φόρμα επικοινωνίας</li>
            <li>Ανταπόκριση στην αίτηση επικοινωνίας σας</li>
            <li>
              Παροχή υποστήριξης και πληροφοριών σχετικά με τις υπηρεσίες μας
            </li>
            <li>Βελτίωση των υπηρεσιών μας</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Νομική βάση επεξεργασίας
          </h2>
          <p className="mb-4">
            Η νομική βάση για την επεξεργασία των προσωπικών δεδομένων σας είναι
            το Άρθρο 6 παρ. 1 στοιχ. β΄ του Γενικού Κανονισμού Προστασίας
            Δεδομένων (GDPR), καθώς η επεξεργασία είναι απαραίτητη για την
            εκτέλεση σύμβασης ή για τη λήψη προσυμβατικών μέτρων κατόπιν
            αιτήματός σας, ιδίως στο πλαίσιο της επικοινωνίας μέσω της φόρμας
            επικοινωνίας και της παροχής των σχετικών υπηρεσιών.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Χρονικό διάστημα αποθήκευσης
          </h2>
          <p className="mb-4">
            Τα προσωπικά δεδομένα που συλλέγονται από τη φόρμα επικοινωνίας
            αποθηκεύονται για χρονικό διάστημα που δεν υπερβαίνει την ανάγκη που
            απαιτείται για την εκτέλεση των παραπάνω σκοπών. Συνήθως αυτό είναι
            μέχρι να ολοκληρωθεί η επικοινωνία και να μην υπάρχει περαιτέρω
            ανάγκη για αποθήκευση, σύμφωνα με την ελληνική και ευρωπαϊκή
            νομοθεσία.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Μεταβίβαση δεδομένων</h2>
          <p className="mb-4">
            Δεν μεταβιβάζουμε τα προσωπικά δεδομένα σε τρίτους, εκτός εάν:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Υπάρχει νόμιμη υποχρέωση για μεταβίβαση</li>
            <li>Έχετε παράσχει ρητή συγκατάθεση για τη μεταβίβαση</li>
            <li>
              Η μεταβίβαση απαιτείται για την προστασία των νόμιμων δικαιωμάτων
              μας
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Ασφάλεια δεδομένων</h2>
          <p className="mb-4">
            Χρησιμοποιούμε κατάλληλα μέτρα ασφαλείας για να προστατεύσουμε τα
            προσωπικά δεδομένα από την ανεξουσιότητη πρόσβαση, την ανεξουσιότητη
            χρήση, την ανεξουσιότητη τροποποίηση, τον ανεξουσιότητο διαμοιρασμό
            και τυχόν άλλη παράνομη διεργασία ή καταστροφή.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
          <p className="mb-4">
            Η ιστοσελίδα μας μπορεί να χρησιμοποιεί cookies για τη
            λειτουργικότητα και την βελτίωση της εμπειρίας του χρήστη. Τα
            cookies είναι μικρά αρχεία που αποθηκεύονται στη συσκευή σας και δεν
            περιέχουν προσωπικά δεδομένα.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Στοιχεία Επικοινωνίας</h2>

          <p className="mb-4">
            Για οποιαδήποτε ερώτηση σχετικά με την παρούσα Πολιτική Απορρήτου ή
            με την άσκηση των δικαιωμάτων σας σύμφωνα με τον Γενικό Κανονισμό
            Προστασίας Δεδομένων (GDPR), μπορείτε να επικοινωνήσετε με τον
            Υπεύθυνο Επεξεργασίας χρησιμοποιώντας τα ακόλουθα στοιχεία
            επικοινωνίας:
          </p>

          <div className="bg-muted p-4 rounded-lg mb-4">
            <p className="mb-2">
              <strong>Διεύθυνση:</strong> {businessInfo.address.street},{" "}
              {businessInfo.address.city}, {businessInfo.address.postalCode},{" "}
              {businessInfo.address.country}
            </p>
            <p className="mb-2">
              <strong>Τηλέφωνο:</strong> {businessInfo.phone}
            </p>
            <p className="mb-2">
              <strong>Email:</strong> {businessInfo.email}
            </p>
            <p>
              <strong>Αριθμός Μητρώου:</strong>{" "}
              {businessInfo["business-registry-number"]}
            </p>
          </div>

          <p className="mb-4">
            Σε περίπτωση που θεωρείτε ότι η επεξεργασία των προσωπικών δεδομένων
            σας παραβιάζει τις διατάξεις του Γενικού Κανονισμού Προστασίας
            Δεδομένων (GDPR), έχετε το δικαίωμα να υποβάλετε καταγγελία στην
            αρμόδια εποπτική αρχή, ήτοι την Αρχή Προστασίας Δεδομένων Προσωπικού
            Χαρακτήρα (ΑΠΔΠΧ).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Αλλαγές στην πολιτική απορρήτου
          </h2>
          <p className="mb-4">
            Μπορούμε να ενημερώσουμε αυτήν την πολιτική απορρήτου κατά καιρούς.
            Οι σημαντικές αλλαγές θα ανακοινωθούν σε αυτήν την ιστοσελίδα και με
            άλλα νόμιμα μέσα. Σας συνιστούμε να ελέγχετε περιοδικά την πολιτική
            απορρήτου για ενημερώσεις.
          </p>
        </section>
      </div>
    </div>
  );
}
