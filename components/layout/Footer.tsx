import Link from "next/link";
import { MapPin, Phone, Facebook, Instagram } from "lucide-react";
import businessInfo from "@/app/mocks/business-info.json";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-card text-card-foreground pb-20 md:pb-0">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Tagline */}
          <div>
            <h3 className="text-4xl mb-4 text-primary font-semibold font-poppins tracking-tighter">
              SMARTING<span>.GR</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {businessInfo.tagline}
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              {businessInfo.description}
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={businessInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={businessInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-poppins ">
              Επικοινωνία
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-primary shrink-0" />
                <span>
                  {businessInfo.address.street}, {businessInfo.address.city}
                  <br />
                  {businessInfo.address.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href={`tel:${businessInfo.phone}`} className="hover-link">
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-primary shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <a href={`mailto:info@smarting.gr`} className="hover-link">
                  info@smarting.gr
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-primary shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                <span>
                  ΑΡΙΘΜΟΣ Γ.Ε.ΜΗ: {businessInfo["business-registry-number"]}
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-[family-name:var(--font-poppins)]">
              Ωράριο Λειτουργίας
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {businessInfo.hours.slice(0, 4).map((h) => (
                <li key={h.day} className="flex justify-between">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
              <li>
                <Link href="/info" className="hover-link text-primary text-xs">
                  Δείτε όλο το ωράριο &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-poppins">
              Σύνδεσμοι
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services" className="hover-link">
                  Υπηρεσίες
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover-link">
                  Κριτικές
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover-link">
                  Επικοινωνία
                </Link>
              </li>
              <li>
                <Link href="/info" className="hover-link">
                  Πληροφορίες
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover-link">
                  Πολιτική Απορρήτου
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} SMARTING.GR. All rights reserved.
          </p>
          <p className="mt-2 flex items-center justify-center gap-1.5">
            made with <span className="text-red-500 animate-pulse">❤️</span> by{" "}
            <Link
              href="https://web.smarting.gr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              web.smarting.gr
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
