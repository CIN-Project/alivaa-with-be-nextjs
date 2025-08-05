import Head from 'next/head'

export const metadata = {
  metadataBase: new URL('https://www.alivaahotels.com'),
  alternates: {
    canonical: '/corbetthotel'
  },
  title: 'Upcoming properties | Alivaa Jungle Resort, Jim Corbett',
  keywords: "",
  description: "Experience the upcoming Alivaa Jungle Resort in Jim Corbett, offering elegantly designed rooms amidst lush greenery. This luxury retreat promises modern amenities, serene surroundings, and personalized services for both leisure and business travelers.",
}

export default function GurumeetingeventsLayout({
  children, // will be a page or nested layout
}) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow,noarchive" />
      </Head>
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        {children}
      </section>
    </>
  )
}
