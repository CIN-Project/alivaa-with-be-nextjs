import Head from 'next/head'

export const metadata = {
  metadataBase: new URL('https://www.alivaahotels.com'),
  alternates: {
    canonical: '/mumbaihotel'
  },
  title: 'Alivaa Hotel Mumbai | A New Arrival in the Heart of the City',
  keywords: "",
  description: "Soon to rise in Mumbai, Alivaa Hotel will offer contemporary elegance and thoughtful service in one of India’s most dynamic cities.",
}

export default function AlivaaMumbaiLayout({
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
