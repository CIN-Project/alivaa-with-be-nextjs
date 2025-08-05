// app/[brand_slug]/[city_alias]/[hotel_slug]/special-offers/layout.js

export const dynamic = 'force-dynamic'; // Optional, to force fresh fetch on every request

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function HattractionPageLayout({ children }) {
  return <main>{children}</main>;
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
     
      const city_alias = "";
  const { brand_slug, hotel_slug } = resolvedParams;

  try {
    const res = await fetch(`${API_BASE_URL}/hotel-attraction`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
              brand_slug,
          city_slug: city_alias,
          hotel_slug,
          web_source: "alivaahotels.com",
      }),
      cache: 'no-store', // Disable cache if needed
    });

    const data = await res.json();
    const meta = data.hotel_meta?.[0] || {};

    return {
      title: meta.title,
      description: meta.description,
      keywords: meta.meta_keyword,
      alternates: {
        canonical: `/${hotel_slug}/attractions`,
      },
    };
  } catch (err) {
    console.error('Metadata fetch failed:', err);
   
  }
}
