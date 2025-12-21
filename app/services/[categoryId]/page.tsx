import { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategoryById } from "@/data/categories";
import { AnimatedCategoriesContent } from "@/components/AnimatedCategoriesContent";

interface CategoryPageProps {
  params: Promise<{
    categoryId: string;
  }>;
}

// Generate static params for all categories
export async function generateStaticParams() {
  return categories.map((category) => ({
    categoryId: category.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { categoryId } = await params;
  const category = getCategoryById(categoryId);

  if (!category) {
    return {
      title: "Κατηγορία δεν βρέθηκε – Smarting.gr",
      robots: { index: false, follow: false },
    };
  }

  const title = `${category.title} – Υπηρεσίες | Smarting.gr`;
  const description = `Δείτε όλες τις υπηρεσίες στην κατηγορία ${category.title}. Επαγγελματικές λύσεις για οικίες και επιχειρήσεις.`;

  const url = `https://www.smarting.gr/services/${categoryId}`;

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
          url: "https://www.smarting.gr/og-services.jpg",
          width: 1200,
          height: 630,
          alt: category.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.smarting.gr/og-services.jpg"],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = await params;
  const category = getCategoryById(categoryId);

  if (!category) {
    notFound();
  }

  // Filter to show only this specific category
  const filteredCategories = categories.filter(c => c.id === categoryId);

  return <AnimatedCategoriesContent initialCategories={filteredCategories} />;
}