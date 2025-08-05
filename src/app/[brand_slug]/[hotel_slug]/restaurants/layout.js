// app/[brand_slug]/[city_alias]/[hotel_slug]/layout.js

export const dynamic = 'force-dynamic'; // Optional: always get fresh data
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export default function HotelDetailLayout({ children }) {
  return <main>{children}</main>;
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { hotel_slug, brand_slug } = resolvedParams

  const city_alias = "";

  try {
    const res = await fetch(`${API_BASE_URL}/hotel-restaurants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
         brand_slug,
        city_slug: city_alias,
        hotel_slug,
        web_source: "alivaahotels.com"
      }),
      cache: 'no-store',
    });

    const data = await res.json();
    const meta = data.hotel_meta?.[0] || {};

    return {
      title: meta.title || 'Hotel Overview | Lemon Tree Hotels',
      description: meta.description || 'Explore our hotel overview, amenities, and location.',
      keywords: meta.meta_keyword || '',
      alternates: {
        canonical: `/${brand_slug}/${city_alias}/${hotel_slug}/restaurants`,
      },
    };
  } catch (err) {
    console.error('Metadata fetch failed:', err);
   
  }
}
