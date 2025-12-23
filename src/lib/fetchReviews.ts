// Server-side utility to fetch Google reviews
// This runs on the server only, never exposed to client

interface GooglePlacesReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
  profile_photo_url?: string;
  author_url?: string;
}

interface GooglePlacesResponse {
  result: {
    reviews?: GooglePlacesReview[];
    name?: string;
    url?: string;
  };
  status: string;
}

export interface Review {
  id: string;
  rating: number;
  title: string;
  text: string;
  author: string;
  link: string;
  time: number;
  profile_photo_url?: string;
}

// Helper function to generate Polish title based on rating
function getReviewTitle(rating: number): string {
  const titles: { [key: number]: string[] } = {
    5: [
      'Świetna opieka!',
      'Polecam z całego serca!',
      'Najlepszy hotel dla zwierząt!',
      'Wspaniałe doświadczenie!',
      'Profesjonalna obsługa!',
    ],
    4: ['Bardzo dobra opieka', 'Polecam!', 'Dobre miejsce', 'Solidna opieka'],
  };

  const options = titles[rating] || titles[5];
  return options[Math.floor(Math.random() * options.length)];
}

export async function fetchGoogleReviews(): Promise<Review[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return [];
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,reviews,url&key=${apiKey}&language=pl`;

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      return [];
    }

    const data: GooglePlacesResponse = await response.json();

    if (data.status !== 'OK') {
      return [];
    }

    const reviews = data.result.reviews || [];
    const placeUrl = data.result.url || 'https://www.google.com/maps';

    // Construct review link to the place's reviews section
    const reviewLink = placeUrl.includes('?') ? `${placeUrl}&reviews` : `${placeUrl}?reviews`;

    // Transform and sort reviews
    return (
      reviews
        // Filter only 4-5 star reviews
        .filter(review => review.rating >= 4)
        .map((review, index) => ({
          id: `review-${review.time}-${index}`,
          rating: review.rating,
          title: getReviewTitle(review.rating),
          text: review.text || '',
          author: review.author_name,
          link: reviewLink,
          time: review.time,
          profile_photo_url: review.profile_photo_url,
        }))
        // Sort by time (newest first), then by rating (5 stars first)
        .sort((a, b) => {
          // First priority: newest reviews
          const timeDiff = b.time - a.time;
          if (timeDiff !== 0) {
            return timeDiff;
          }
          // Second priority: higher rating
          return b.rating - a.rating;
        })
        // Get top 10 reviews
        .slice(0, 10)
    );
  } catch {
    return [];
  }
}
