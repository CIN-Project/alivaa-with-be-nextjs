import Head from 'next/head'

export const metadata = {
  metadataBase: new URL('https://www.alivaahotels.com'),
  alternates: {
    canonical: '/udaipurhotel'
  },
  title: 'Alivaa Hotel Udaipur | A New Chapter in Luxury Coming Soon',
  keywords: "",
  description: "Get ready to experience refined hospitality in the City of Lakes. Alivaa Hotel Udaipur is coming soon with elegant stays, warm service, and scenic charm.",
}

export default function AlivaaUdaipurLayout({
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
