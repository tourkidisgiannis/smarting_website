'use client';

import { useState } from 'react';
import { Star, User } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import reviewsData from '@/app/mocks/reviews.json';

export function ReviewsList() {
  const [filter, setFilter] = useState('all');
  const [reviews, setReviews] = useState(reviewsData);

  const handleFilterChange = (value: string) => {
    setFilter(value);
    if (value === 'all') {
      setReviews(reviewsData);
    } else {
      setReviews(reviewsData.filter((r) => r.rating === parseInt(value)));
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-bold">Τι λένε οι πελάτες μας</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Φίλτρο:</span>
          <Select value={filter} onValueChange={handleFilterChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Όλες οι κριτικές" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Όλες οι κριτικές</SelectItem>
              <SelectItem value="5">5 Αστέρια</SelectItem>
              <SelectItem value="4">4 Αστέρια</SelectItem>
              <SelectItem value="3">3 Αστέρια</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((review) => (
          <Card key={review.id} className="bg-muted/50">
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{review.author}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating ? 'fill-primary text-primary' : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{review.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold mb-2">Προσθέστε την κριτική σας</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Η γνώμη σας μας βοηθάει να γινόμαστε καλύτεροι.
        </p>
        <Button variant="outline">Γράψτε μια κριτική</Button>
      </div>
    </div>
  );
}
