import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import businessInfo from '@/app/mocks/business-info.json';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Tagline */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              SMARTING<span className="text-primary">.GR</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {businessInfo.tagline}
            </p>
            <p className="text-sm text-muted-foreground">
              {businessInfo.description}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Επικοινωνία</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-primary shrink-0" />
                <span>
                  {businessInfo.address.street}, {businessInfo.address.city}<br />
                  {businessInfo.address.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href={`tel:${businessInfo.phone}`} className="hover:text-primary transition-colors">
                  {businessInfo.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-white mb-4">Ωράριο Λειτουργίας</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {businessInfo.hours.slice(0, 4).map((h) => (
                <li key={h.day} className="flex justify-between">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
              <li>
                <Link href="/info" className="text-primary hover:underline text-xs">
                  Δείτε όλο το ωράριο &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Σύνδεσμοι</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services" className="hover:text-primary transition-colors">Υπηρεσίες</Link></li>
              <li><Link href="/reviews" className="hover:text-primary transition-colors">Κριτικές</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Επικοινωνία</Link></li>
              <li><Link href="/info" className="hover:text-primary transition-colors">Πληροφορίες</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SMARTING.GR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
