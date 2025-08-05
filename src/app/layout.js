import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import AddBootstrap from "./components/bootstrap";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'font-awesome/css/font-awesome.min.css';
import "../app/styles/globals.css";
import "../app/styles/sideheader.css";

import Footer from "./components/Footer";
import 'animate.css';

import "../app/styles/main.css";
import "../app/styles/header.css";
import { FormProvider } from "./booking-engine-widget/FormContext";

export const metadata = {
  metadataBase: new URL('https://www.alivaahotels.com'),
  alternates: {
    canonical: '/',
  },
  title: 'Hotel Booking Website in Gurgaon | Hotel in Delhi, NCR - Alivaa Hotels',
  description: "Book your stay in Gurgaon at Alivaa Hotels, offering top-rated hotels in Delhi and NCR. Enjoy comfortable accommodations, exceptional service, and convenient locations for business or leisure travel. Reserve your room today!",
};

const GTM_ID = 'GTM-W9FC894C';


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head> 
 <meta name="google-site-verification" content="Qu2AFKDtM3jTzd_wkQznixUvhL43OM_p2hvFV3M1KI0" />
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
        
        {/* ✅ Fix favicon loading */}
        <link rel="icon" href="/favicon.png" type="image/png" />

        {/* ✅ Load Google Fonts properly */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mr+De+Haviland&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Grey+Qo&family=Mr+De+Haviland&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Grey+Qo&family=Inspiration&family=Mr+De+Haviland&display=swap" />
      </head>

      <body>
        
         {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <AddBootstrap />
        <FormProvider>
        <main>{children}</main>
        </FormProvider>
      <Footer/>
      </body>
    </html>
  );
}
