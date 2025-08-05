// app/[brand_slug]/[city_alias]/[hotel_slug]/contact-us/layout.js

export const dynamic = 'force-dynamic'; // Optional: forces fresh data per request
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export default function ContactUsLayout({ children }) {
  return <main>{children}</main>;
}

export async function generateMetadata({ params }) {
 const resolvedParams = await params;
  const { brand_slug, hotel_slug } = resolvedParams;
 const city_alias = "";
  try {
    const res = await fetch(`${API_BASE_URL}/hotel-contact-us`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
           brand_slug: brand_slug,
            city_slug: city_alias,
            hotel_slug: hotel_slug,
            web_source: "alivaahotels.com",
      }),
      cache: 'no-store'
    });

    const data = await res.json();
    const meta = data.hotel_meta?.[0] || {};
    

    return {
      title: meta.title || 'Contact Us | Lemon Tree Hotels',
      description: meta.description || 'Get in touch with Lemon Tree Hotels.',
      keywords: meta.meta_keyword || '',
      alternates: {
        canonical: `/${brand_slug}/${city_alias}/${hotel_slug}/contact-us`
      }
    };
  } catch (err) {
    console.error('Metadata fetch failed:', err);
    
  }
}
