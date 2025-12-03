import businessInfo from '@/app/mocks/business-info.json';

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Electrician', // More specific than LocalBusiness
    name: businessInfo.name,
    image: 'https://smarting.gr/og-image.jpg', // Placeholder
    '@id': 'https://smarting.gr',
    url: 'https://smarting.gr',
    telephone: businessInfo.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.city,
      postalCode: businessInfo.address.postalCode,
      addressCountry: 'GR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: businessInfo.coordinates.lat,
      longitude: businessInfo.coordinates.lng,
    },
    openingHoursSpecification: businessInfo.hours.map((h) => {
      // Simple mapping, might need more robust parsing if format changes
      // Assuming format "Day 9:00 π.μ.–5:00 μ.μ." or "Day Κλειστά"
      if (h.time === 'Κλειστά') return null;
      
      const dayMap: Record<string, string> = {
        'Δευτέρα': 'Monday',
        'Τρίτη': 'Tuesday',
        'Τετάρτη': 'Wednesday',
        'Πέμπτη': 'Thursday',
        'Παρασκευή': 'Friday',
        'Σάββατο': 'Saturday',
        'Κυριακή': 'Sunday',
      };

      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: dayMap[h.day] || h.day,
        opens: '09:00', // Simplified for now, would need regex to parse "9:00 π.μ."
        closes: '17:00',
      };
    }).filter(Boolean),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: businessInfo.rating,
      reviewCount: businessInfo.reviewCount,
    },
    priceRange: '$$',
  };
}
