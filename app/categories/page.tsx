import { Metadata } from 'next';
import { AnimatedCategoriesContent } from '@/components/AnimatedCategoriesContent';

export const metadata: Metadata = {
  title: 'Υπηρεσίες - SMARTING.GR',
  description: 'Εξερευνήστε τις υπηρεσίες μας: Συστήματα Ασφαλείας, Smart Home, Ηλεκτρολογικές Εγκαταστάσεις, Δίκτυα και πολλά άλλα.',
  openGraph: {
    title: 'Υπηρεσίες - SMARTING.GR',
    description: 'Εξερευνήστε τις υπηρεσίες μας: Συστήματα Ασφαλείας, Smart Home, Ηλεκτρολογικές Εγκαταστάσεις, Δίκτυα και πολλά άλλα.',
  },
};

export default function CategoriesPage() {
  return <AnimatedCategoriesContent />;
}
