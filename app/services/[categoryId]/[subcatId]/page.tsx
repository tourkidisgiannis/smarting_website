import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  categories,
  getCategoryById,
  getSubcategoryById,
} from "@/data/categories";
import { AnimatedSubcategoryContent } from "@/components/AnimatedSubcategoryContent";

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
export async function generateMetadata({
  params,
}: SubcategoryPageProps): Promise<Metadata> {
  const { categoryId, subcatId } = await params;
  const category = getCategoryById(categoryId);
  const sub = getSubcategoryById(categoryId, subcatId);

  if (!category || !sub) {
    return {
      title: "Υπηρεσία δεν βρέθηκε – Smarting.gr",
      robots: { index: false, follow: false },
    };
  }

  const title = `${sub.title} – ${category.title}`;
  const description = `${sub.description} Επαγγελματική εγκατάσταση και υποστήριξη για οικίες και επιχειρήσεις.`;

  const url = `https://www.smarting.gr/services/${categoryId}/${subcatId}`;

  return {
    title: {
      default: title,
      template: "%s – Smarting.gr",
    },

    description,

    alternates: {
      canonical: url,
      languages: {
        "el-GR": url,
      },
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "Smarting.gr",
      locale: "el_GR",
      type: "website",
      images: [
        {
          url: sub.image || "https://www.smarting.gr/og-services.jpg",
          width: 1200,
          height: 630,
          alt: sub.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [sub.image || "https://www.smarting.gr/og-services.jpg"],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function SubcategoryPage({
  params,
}: SubcategoryPageProps) {
  const { categoryId, subcatId } = await params;
  const category = getCategoryById(categoryId);
  const sub = getSubcategoryById(categoryId, subcatId);

  if (!category || !sub) {
    notFound();
  }

  // Find related subcategories (other services in same category)
  const relatedServices = category.subcategories
    .filter((s) => s.id !== subcatId)
    .slice(0, 4);

  return (
    <AnimatedSubcategoryContent
      category={category}
      sub={sub}
      relatedServices={relatedServices}
    />
  );
}
