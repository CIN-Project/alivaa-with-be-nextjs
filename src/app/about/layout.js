
export const metadata = {
    metadataBase: new URL('https://www.alivaahotels.com'),
    alternates: {
      canonical: '/about'
     },
    title: 'About Us | Alivaa Hotels & Resorts - Luxury & Comfort Redefined',
    keywords : "",
    description:"Discover Alivaa Hotels & Resorts, where luxury meets comfort. Learn about our exceptional services, world-class amenities, and our commitment to providing an unforgettable stay for every guest.", 
  }
  
  export default function AboutLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      
      </section>
      
    )
  }