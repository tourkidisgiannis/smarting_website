
'use client';

import { 
  Zap, 
  Network, 
  ShieldCheck, 
  Home, 
  Flame, 
  Sun, 
  Briefcase, 
  Headphones, 
  Lightbulb,
  ChevronRight
} from 'lucide-react';
import { categories } from '@/data/categories';
import Link from 'next/link';
import { cn } from '@/lib/utils';


const iconMap: Record<string, React.ElementType> = {
  'security-systems': ShieldCheck,
  'electrical': Zap,
  'smart-home': Home,
  'networks': Network,
  'home-solutions': Lightbulb,
  'fire-safety': Flame,
  'pv-energy': Sun,
  'specialized': Briefcase,
  'support': Headphones,
};

export function BentoGrid() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Οι Υπηρεσίες <span className="text-primary">Μας</span>
          </h2>
          <p className="text-foreground/80 text-lg">
            Εξερευνήστε τις κατηγορίες υπηρεσιών μας και βρείτε ακριβώς αυτό που ψάχνετε.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {categories.map((category, index) => {
            const Icon = iconMap[category.id] || Zap;
            
            // Define spans based on index for 9 items
            let spanClasses = "";
            switch(index) {
              case 0: // Security (2x2)
                spanClasses = "col-span-1 md:col-span-2 lg:col-span-2 row-span-2";
                break;
              case 1: // Electrical (1x1)
                spanClasses = "col-span-1 md:col-span-1 md:row-span-1";
                break;
              case 2: // Smart Home (1x2 Tall)
                spanClasses = "col-span-1 md:col-span-1 md:row-span-2";
                break;
              case 3: // Networks (1x1)
                spanClasses = "col-span-1 md:col-span-1 md:row-span-1";
                break;
              case 4: // Home Sol (1x1)
                spanClasses = "col-span-1 md:col-span-1 md:row-span-1";
                break;
              case 5: // Fire Safety (1x1)
                spanClasses = "col-span-1 md:col-span-1 md:row-span-1";
                break;
              case 6: // PV Energy (2x1 Wide)
                 spanClasses = "col-span-1 md:col-span-2 lg:col-span-2 row-span-1"; 
                 break;
              case 7: // Specialized (2x1 Wide)
                 spanClasses = "col-span-1 md:col-span-2 lg:col-span-2 row-span-1";
                 break;
              case 8: // Support (2x1 Wide)
                 spanClasses = "col-span-1 md:col-span-2 lg:col-span-2 row-span-1";
                 break;
              default:
                 spanClasses = "col-span-1";
            }

            return (
              <div 
                key={category.id} 
                className={cn(
                  "category-card group relative rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/90 via-zinc-900/60 to-zinc-900/30 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20",
                  spanClasses
                )}
              >
                {/* Default State Content */}
                <div className="absolute inset-0 z-10 p-6 flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
                  <div className={cn(
                    "rounded-2xl bg-white/5 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-500",
                    (index === 0 || index === 2) ? "w-20 h-20" : "w-14 h-14"
                  )}>
                    <Icon className={cn(
                      "text-primary",
                      (index === 0 || index === 2) ? "w-10 h-10" : "w-7 h-7"
                    )} />
                  </div>
                  <h3 className={cn(
                    "font-bold text-white mb-2",
                    (index === 0 || index === 2) ? "text-2xl" : "text-lg"
                  )}>{category.title}</h3>
                  <p className="text-sm text-zinc-400">
                    {category.subcategories.length} υπηρεσίες
                  </p>
                </div>

                {/* Hover State - Subcategories List */}
                <div className="absolute inset-0 z-20 bg-zinc-950/90 backdrop-blur-md p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex flex-col">
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10 shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-white text-sm truncate">{category.title}</h4>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-2">
                    {category.subcategories.map((sub) => (
                      <Link 
                        key={sub.id}
                        href={`/categories/${category.id}/${sub.id}`}
                        className="block group/link"
                      >
                        <div className="flex items-center justify-between text-sm py-1.5 px-2 rounded-lg hover:bg-white/5 text-zinc-300 hover:text-primary transition-colors">
                          <span className="truncate mr-2">{sub.title}</span>
                          <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-2 border-t border-white/10 text-center shrink-0">
                    <a
                      href="/categories"
                      className="text-xs text-foreground/80 group-hover:text-primary transition-colors hover:underline"
                    >
                      Δείτε περισσότερα
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
