// app/[brand_slug]/[city_alias]/[hotel_slug]/hotel-facilities/layout.js

export const dynamic = 'force-dynamic'; // Optional: use for fresh data every time
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export default function HotelDetailLayout({ children }) {
  return <main>{children}</main>;
}

export async function generateMetadata({ params }) {
const resolvedParams = await params;
  const { brand_slug, city_alias, hotel_slug } = resolvedParams;

  try {
    const res = await fetch(`${API_BASE_URL}/hotel-facilities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        brand_slug,
        city_slug: city_alias,
        hotel_slug
      }),
      cache: 'no-store' // Optional: prevent caching
    });

    const data = await res.json();
    const meta = data.hotel_meta?.[0] || {};

    return {
      title: meta.title || 'Alivaa Hotels and Resorts',
      description: meta.description || 'Alivaa Hotels and Resorts',
      keywords: meta.meta_keyword || '',
      alternates: {
        canonical: `/${brand_slug}/${hotel_slug}/facilities`
      }
    };
  } catch (err) {
    console.error('Metadata fetch failed:', err);
   
  }
}
