// app/[brand_slug]/[city_alias]/[hotel_slug]/page.js
export default function HotelStayLayout({ children }) {
  return <main>{children}</main>;
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { hotel_slug, brand_slug } = resolvedParams

  const city_alias = "";

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/hotel-rooms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
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
      title: meta.title || 'Default Title',
      description: meta.description || 'Default description',
      keywords: meta.meta_keyword || '',
      alternates: {
        canonical: `/${hotel_slug}/rooms`
      }
    };
  } catch (err) {
    console.error('Metadata fetch error:', err);
   
  }
}
