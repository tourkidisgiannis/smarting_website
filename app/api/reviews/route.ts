import { NextResponse } from 'next/server';
import mockReviews from '@/app/mocks/reviews.json';

const GOOGLE_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;

export async function GET() {
  // If no keys, return mock data immediately
  if (!GOOGLE_API_KEY || !PLACE_ID) {
    console.log('Google API keys missing, using mock data for reviews.');
    return NextResponse.json({ 
      reviews: mockReviews,
      source: 'mock' 
    });
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,user_ratings_total,rating&key=${GOOGLE_API_KEY}&language=el`
    );

    const data = await response.json();

    if (!response.ok || data.status !== 'OK') {
      console.error('Google Places API error:', data.status, data.error_message);
      throw new Error(data.error_message || 'Failed to fetch reviews');
    }

    // Transform Google reviews
    const googleReviews = data.result.reviews || [];
    
    interface GoogleReview {
      author_name: string;
      relative_time_description: string;
      rating: number;
      text: string;
      profile_photo_url: string;
    }

    const formattedReviews = googleReviews.map((r: GoogleReview, index: number) => ({
      id: `google-${index}`,
      author: r.author_name,
      date: r.relative_time_description, // e.g., "a week ago"
      rating: r.rating,
      text: r.text,
      avatar: r.profile_photo_url
    }));

    return NextResponse.json({ 
      reviews: formattedReviews,
      total_reviews: data.result.user_ratings_total || formattedReviews.length,
      average_rating: data.result.rating || 5,
      place_id: PLACE_ID,
      source: 'google' 
    });

  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    // Fallback to mock data on error
    return NextResponse.json({ 
      reviews: mockReviews,
      total_reviews: mockReviews.length, // Fallback count
      average_rating: 5,
      place_id: PLACE_ID, // Return even if fallback, provided it exists on server
      source: 'mock_fallback',
      error: 'Failed to fetch live reviews'
    });
  }
}
