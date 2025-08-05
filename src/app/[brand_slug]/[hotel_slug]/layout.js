// app/[brand_slug]/[city_alias]/[hotel_slug]/layout.js
export const dynamic = 'force-dynamic'; // if you're using fetch at runtime
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export default function HotelDetailLayout({ children }) {
  return <main>{children}</main>;
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { hotel_slug, brand_slug  } = resolvedParams;

  const city_alias = ""; // used as city_slug in the API

  try {
    const res = await fetch(`${API_BASE_URL}/hotel-overview`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        brand_slug:brand_slug,
        city_slug:city_alias,
        hotel_slug:hotel_slug,
        web_source: "alivaahotels.com"
      }),
      cache: 'no-store', // or 'force-cache' depending on your use case
    });

    const text = await res.text();
    const json = JSON.parse(text);

    const meta = json.hotel_meta?.[0] || {};

    return {
      title: meta.title || 'Default Title',
      description: meta.description || 'Default description',
      keywords: meta.meta_keyword || '',
      alternates: {
        canonical: `/${hotel_slug}`,
      },
    };
  } catch (err) {
    console.error('Metadata fetch failed:', err);
   
  }
}
