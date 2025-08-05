  export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/contactus'
     },
    title: 'Meeting & Events Halls In Gurugram - hoften',
    keywords : "",
    description:"Host successful meetings and events in Gurugram with hoften. Discover well-equipped meeting halls and event spaces that cater to your business and social needs, with top-notch facilities and services.", 
   
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