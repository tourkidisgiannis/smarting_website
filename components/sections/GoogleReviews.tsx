"use client";

import { useEffect, useState } from "react";
import { Star, CheckCircle2, Quote } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const PLACE_ID = process.env.GOOGLE_PLACE_ID;

interface Review {
  id: string | number;
  author: string;
  date: string;
  rating: number;
  text: string;
  avatar?: string;
}
export function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState<'google' | 'mock'>('mock');
  const [totalReviews, setTotalReviews] = useState(0);
  const [averageRating, setAverageRating] = useState(5);
  const [placeId, setPlaceId] = useState('');

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch('/api/reviews');
        const data = await res.json();
        setReviews(data.reviews);
        setSource(data.source.includes('google') ? 'google' : 'mock');
        setTotalReviews(data.total_reviews || data.reviews.length);
        setAverageRating(data.average_rating || 5);
        if (data.place_id) setPlaceId(data.place_id);
      } catch (error) {
        console.error('Failed to load reviews:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="bg-muted/30 border-primary/10">
            <CardHeader className="flex flex-row items-center gap-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-16" />
              </div>
            </CardHeader>
            <CardContent>
              <Skeleton className="h-20 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-primary/10 pb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Τι λένε οι πελάτες μας</h2>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="flex items-center text-primary font-medium">
              {averageRating.toFixed(1)} <Star className="ml-1 w-4 h-4 fill-primary" />
            </span>
            <span>•</span>
            <span>Βάσει {totalReviews} αξιολογήσεων στο Google</span>
          </div>
        </div>
        
        {source === 'google' && (
           <Badge variant="outline" className="gap-1.5 py-1.5 px-3 border-blue-500/30 text-blue-500 bg-blue-500/5">
             <CheckCircle2 className="w-3.5 h-3.5" />
             Verified by Google
           </Badge>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <Card key={review.id} className="group relative bg-card border-muted hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
            <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors">
              <Quote className="w-8 h-8" />
            </div>
            
            <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-3">
              <Avatar className="h-10 w-10 border border-primary/10">
                <AvatarImage src={review.avatar} alt={review.author} />
                <AvatarFallback className="bg-primary/5 text-primary text-xs">
                  {review.author.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-sm leading-none mb-1">{review.author}</p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < review.rating ? 'fill-yellow-500 text-yellow-500' : 'fill-muted text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-muted-foreground">{review.date}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                &quot;{review.text}&quot;
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <Button size="lg" variant="secondary" className="group" asChild>
          <a href={`https://search.google.com/local/reviews?placeid=${placeId}`} target="_blank" rel="noopener noreferrer">
             Δείτε και τις {totalReviews} κριτικές
             <Star className="ml-2 w-4 h-4 group-hover:fill-current transition-colors" />
          </a>
        </Button>
      </div>
    </div>
  );
}
