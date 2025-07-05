
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'business.business';
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Ashiyana PG - Best Paying Guest Accommodation near YMCA Faridabad | NST Hospitality',
  description = 'Premium PG near YMCA Faridabad & J.C. Bose University. Safe girls PG, boys hostel in Sector 11. Ashiyana PG with food, WiFi, parking. Best PG services near YAMCA University.',
  keywords = 'PG near YMCA Faridabad, PG near YAMCA University, PG near J.C. Bose University Faridabad, Girls PG near YMCA Faridabad, Safe PG near YAMCA, Affordable PG near YMCA University, Hostel near YMCA Faridabad, Best PG near YAMCA Sector 6, Hotel near YMCA Faridabad, Ashiyana PG Faridabad, Best PG services in Faridabad, Girls PG in Sector 11 Faridabad, Shree Ji Girls PG, NST Hospitality PG Faridabad, PG near NST Hospital Faridabad, Safe girls PG in Faridabad, PG with food and parking in Faridabad, Fully furnished PG Faridabad, Community living PG Faridabad, Short & long-term PG stays, High View Hotel Faridabad, La Casa Hotel Faridabad, Hotels in Sector 11 Faridabad, Hotel near YMCA Faridabad, Budget hotels in Faridabad Sector 11, Hygienic homemade meals PG, Secure PG with parking, Prime location PG, Flexible PG stays Faridabad, Women-friendly PG accommodation',
  image = '/lovable-uploads/f15e7321-47b5-43cc-a04f-6548f400207c.png',
  url = 'https://ashiyanapg.com',
  type = 'website',
  structuredData
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Ashiyana PG - NST Hospitality",
    "description": description,
    "image": image,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near YMCA Chowk, Sector 11",
      "addressLocality": "Faridabad",
      "addressRegion": "Haryana",
      "postalCode": "121006",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.4089",
      "longitude": "77.3178"
    },
    "telephone": "+91-9870366759",
    "email": "nsthospitality75@gmail.com",
    "url": url,
    "priceRange": "₹6,000 - ₹12,000",
    "starRating": {
      "@type": "Rating",
      "ratingValue": "4.7",
      "bestRating": "5"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "114"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "WiFi",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Parking",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Security",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Laundry",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Food Service",
        "value": true
      }
    ],
    "openingHours": "Mo-Su 00:00-23:59",
    "paymentAccepted": ["Cash", "Credit Card", "UPI"],
    "nearbyAttractions": [
      "YMCA Faridabad",
      "J.C. Bose University",
      "YAMCA University",
      "NST Hospital"
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="NST Hospitality - Ashiyana PG" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="NST Hospitality - Ashiyana PG" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="IN-HR" />
      <meta name="geo.placename" content="Faridabad, Near YMCA" />
      <meta name="geo.position" content="28.4089;77.3178" />
      <meta name="ICBM" content="28.4089, 77.3178" />
      
      {/* Local Business Meta Tags */}
      <meta name="business:contact_data:street_address" content="Near YMCA Chowk, Sector 11" />
      <meta name="business:contact_data:locality" content="Faridabad" />
      <meta name="business:contact_data:region" content="Haryana" />
      <meta name="business:contact_data:postal_code" content="121006" />
      <meta name="business:contact_data:country_name" content="India" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
