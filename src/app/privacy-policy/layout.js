
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/privacy-policy'
     },
    title: 'Privacy Policy | Alivaa Hotels',
    keywords : "",
    description:"Read the privacy policy of Alivaa Hotels to understand how we collect, use, and protect your personal information during your stay and website interactions.", 
  }
  
  export default function GurumeetingeventsLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }