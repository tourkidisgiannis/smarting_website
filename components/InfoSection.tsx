"use client";

import { Building2, ShieldCheck, Clock } from "lucide-react";

export function InfoSection() {
  return (
    <section className="space-y-10">
      {/* Company */}
      <div className="anim-item flex items-start gap-4">
        <div className="anim-icon text-primary mt-1">
          <Building2 size={28} />
        </div>

        <div className="anim-text space-y-1">
          <h3 className="text-lg font-semibold">Η Εταιρεία μας</h3>
          <p className="text-foreground/80 leading-relaxed">
            Παρέχουμε εξειδικευμένες τεχνολογικές λύσεις με έμφαση στην
            ποιότητα, τη συνέπεια και τη μακροχρόνια υποστήριξη των πελατών μας.
          </p>
        </div>
      </div>

      {/* Certifications */}
      <div className="anim-item flex items-start gap-4">
        <div className="anim-icon text-primary mt-1">
          <ShieldCheck size={28} />
        </div>

        <div className="anim-text space-y-1">
          <h3 className="text-lg font-semibold">Πιστοποιήσεις</h3>
          <p className="text-foreground/80 leading-relaxed">
            Διαθέτουμε αναγνωρισμένες πιστοποιήσεις που εγγυώνται ασφάλεια,
            τεχνογνωσία και συμμόρφωση με τα σύγχρονα πρότυπα.
          </p>
        </div>
      </div>

      {/* Opening Hours */}
      <div className="anim-item flex items-start gap-4">
        <div className="anim-icon text-primary mt-1">
          <Clock size={28} />
        </div>

        <div className="anim-text space-y-1">
          <h3 className="text-lg font-semibold">Ωράριο Λειτουργίας</h3>
          <p className="text-foreground/80 leading-relaxed">
            Δευτέρα – Παρασκευή: 09:00 – 17:00
            <br />
            Σάββατο – Κυριακή: Κλειστά
          </p>
        </div>
      </div>
    </section>
  );
}
