import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { categories, getCategoryById, getSubcategoryById } from '@/data/categories';
import { AnimatedSubcategoryContent } from '@/components/AnimatedSubcategoryContent';

interface SubcategoryPageProps {
  params: Promise<{
    categoryId: string;
    subcatId: string;
  }>;
}

// Generate static params for all subcategories
export async function generateStaticParams() {
  const params: { categoryId: string; subcatId: string }[] = [];
  
  for (const category of categories) {
    for (const sub of category.subcategories) {
      params.push({
        categoryId: category.id,
        subcatId: sub.id,
      });
    }
  }
  
  return params;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: SubcategoryPageProps): Promise<Metadata> {
  const { categoryId, subcatId } = await params;
  const category = getCategoryById(categoryId);
  const sub = getSubcategoryById(categoryId, subcatId);
  
  if (!category || !sub) {
    return {
      title: 'Υπηρεσία δεν βρέθηκε - SMARTING.GR',
    };
  }
  
  return {
    title: `${sub.title} | ${category.title} – SMARTING.GR`,
    description: sub.description,
    openGraph: {
      title: `${sub.title} | ${category.title} – SMARTING.GR`,
      description: sub.description,
      images: [{ url: sub.image, width: 1200, height: 675, alt: sub.title }],
      type: 'article',
    },
  };
}

export default async function SubcategoryPage({ params }: SubcategoryPageProps) {
  const { categoryId, subcatId } = await params;
  const category = getCategoryById(categoryId);
  const sub = getSubcategoryById(categoryId, subcatId);
  
  if (!category || !sub) {
    notFound();
  }

  // Find related subcategories (other services in same category)
  const relatedServices = category.subcategories
    .filter(s => s.id !== subcatId)
    .slice(0, 4);

  return (
    <AnimatedSubcategoryContent 
      category={category}
      sub={sub}
      relatedServices={relatedServices}
    />
  );
}
