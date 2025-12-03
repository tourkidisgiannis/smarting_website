'use client';

import { Clock, Award, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import businessInfo from '@/app/mocks/business-info.json';

export function InfoSection() {
  return (
    <div className="space-y-8">
      {/* About */}
      <Card>
        <CardHeader>
          <CardTitle>Σχετικά με εμάς</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Η SMARTING.GR είναι μια εξειδικευμένη εταιρεία που παρέχει ολοκληρωμένες λύσεις ηλεκτρολογικής τεχνικής υποστήριξης, 
            εγκατάστασης δικτύων, συστημάτων CCTV και ασφαλείας. Με χρόνια εμπειρίας και εξειδίκευσης, εξυπηρετούμε τόσο 
            ιδιώτες όσο και επιχειρήσεις, προσφέροντας αξιόπιστες και σύγχρονες τεχνολογικές λύσεις.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Η ομάδα μας αποτελείται από πιστοποιημένους τεχνικούς που εγγυώνται την υψηλή ποιότητα των υπηρεσιών μας. 
            Χρησιμοποιούμε μόνο πιστοποιημένα υλικά και ακολουθούμε τις διεθνείς προδιαγραφές ασφαλείας.
          </p>
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="text-primary" />
            Πιστοποιήσεις & Εγγυήσεις
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary">✓</span>
              <span>Πιστοποιημένοι τεχνικοί με εξειδίκευση σε ηλεκτρολογικές εγκαταστάσεις</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">✓</span>
              <span>Χρήση πιστοποιημένων υλικών με εγγύηση καλής λειτουργίας</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">✓</span>
              <span>Συμμόρφωση με τα διεθνή πρότυπα ασφαλείας και ποιότητας</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">✓</span>
              <span>Εγγύηση εργασίας και υλικών</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Full Hours */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="text-primary" />
            Πλήρες Ωράριο Λειτουργίας
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {businessInfo.hours.map((h) => (
              <div key={h.day} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0">
                <span className="font-medium">{h.day}</span>
                <span className={h.time === 'Κλειστά' ? 'text-destructive' : 'text-primary'}>
                  {h.time}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2">Προτείνετε νέες ώρες λειτουργίας</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Θα θέλατε να λειτουργούμε σε διαφορετικές ώρες; Πείτε μας τη γνώμη σας!
            </p>
            <Button variant="outline" size="sm">Προτείνετε ώρες</Button>
          </div>
        </CardContent>
      </Card>

      {/* Location */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="text-primary" />
            Τοποθεσία
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            <span className="font-medium">{businessInfo.address.street}</span><br />
            {businessInfo.address.city} {businessInfo.address.postalCode}<br />
            {businessInfo.address.country}
          </p>
          <Button asChild>
            <a 
              href={`https://maps.google.com/?q=${businessInfo.address.plusCode}`}
              target="_blank" 
              rel="noopener noreferrer"
            >
              Ανοίξτε στο Google Maps
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
