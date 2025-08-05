'use client';

   

import { useEffect } from "react";

import Link from 'next/link';

import { useState } from 'react';



  //  import Script from "next/script";


  //  const BookingForm = () => {

  //   const handleScriptLoad = () => {

  //     console.log("Booking script loaded");

  

  //     const script = document.getElementById("propInfo");

  //     if (script) {

  //       script.setAttribute(

  //         "propertyid",

  //         "981NJ8TQ49ro3Z7RTrbLaPgGZCWk8ihVQvzMylYvu085aOhvZIjS2TE3NTc="

  //       );

  //       script.setAttribute("cal-rendererId", "quickbook-widget");

  //       script.setAttribute("JDRN", "Y");

  //     }

  //   };

  

   

  //   return (

  //     <section className="booking-form-section" id="booking-engine">

  //       <article className="container">

  //         <div className="enqiure-inner">

  //           <div className="row">

  //             <div className="custom-form-outer-div">

  //               <div className="custom-form-outer-div">

  //                 {/* Make sure this div exists for the widget to render */}

  //                 <div id="quickbook-widget"></div>

  //               </div>

  //             </div>

  //           </div>

  //         </div>

  //       </article>

  

  //       {/* Load the booking script after the page is interactive */}

  //       <Script

  //         src="https://bookings.alivaahotels.com/plugin/js/booking-service.min.js"

  //         id="propInfo"

  //         strategy="afterInteractive"

  //         onLoad={handleScriptLoad} // Ensure attributes are set after load

  //       />

  //     </section>

  //   );

  //  };



  // const BookingForm = () => {

  //   useEffect(() => {

  //     const checkAndInitBookingWidget = () => {

  //       const script = document.getElementById("propInfo");

  

  //       if (script) {

  //         console.log("Booking script found, setting attributes...");

  

  //         script.setAttribute(

  //           "propertyid",

  //           "981NJ8TQ49ro3Z7RTrbLaPgGZCWk8ihVQvzMylYvu085aOhvZIjS2TE3NTc="

  //         );

  //         script.setAttribute("cal-rendererId", "quickbook-widget");

  //         script.setAttribute("JDRN", "Y");

  

  //         // Force the script to reinitialize (Some scripts may require this)

  //         script.remove();

  //         document.body.appendChild(script);

  //       }

  //     };

  

  //     // Delay execution to ensure the DOM is fully loaded

  //     setTimeout(() => {

  //       checkAndInitBookingWidget();

  //     }, 1000);

  //   }, []);

  

  //   return (

  //     <section className="booking-form-section" id="booking-engine">

  //       <article className="container">

  //         <div className="enqiure-inner">

  //           <div className="row">

  //             <div className="custom-form-outer-div">

  //               <div className="custom-form-outer-div">

  //                 {/* The widget will load inside this div */}

  //                 <div id="quickbook-widget"></div>

  //               </div>

  //             </div>

  //           </div>

  //         </div>

  //       </article>

  

  //       {/* Load the booking script after the page is interactive */}

  //       <Script

  //         src="https://bookings.alivaahotels.com/plugin/js/booking-service.min.js"

  //         id="propInfo"

  //         strategy="afterInteractive"

  //       />

  //     </section>

  //   );

  // };

   

  //  export default BookingForm;

  

  const BookingForm = () => {

  
    useEffect(() => {

      const loadBookingWidget = () => {

        if (document.getElementById("propInfo")) {
          return; 

        }
        const script = document.createElement("script");

        script.src = "https://bookings.alivaahotels.com/plugin/js/booking-service.min.js";

        script.id = "propInfo";

        script.async = true;

        script.setAttribute("propertyid", "981NJ8TQ49ro3Z7RTrbLaPgGZCWk8ihVQvzMylYvu085aOhvZIjS2TE3NTc=");

        script.setAttribute("cal-rendererId", "quickbook-widget");

        script.setAttribute("JDRN", "Y");

        document.body.appendChild(script);

      };

  

      loadBookingWidget(); // Load the script once component is mounted

  

      return () => {

        // console.log("Cleaning up booking script...");

        const existingScript = document.getElementById("propInfo");

        if (existingScript) {

          existingScript.remove();

        }

      };

    }, []);

  

    return (

      <>

          {/* { !isVisible && (<div className="content-section">

        <div className="container position-relative">

          <div className="col-lg-12 text-center wow fadeInDown" data-wow-duration="4s">

            <button className="btn desktop-button corporatebannerbutton" id="book-now1" onClick={() => setIsVisible(!isVisible)}>

              <img src="/images/search-icon-white.svg" className="search-iconimage" alt="Search Icon" />

             

            </button>

          </div>

        </div>

      </div>)}

      <section className={`booking-form-section ${isVisible ? "slide-in" : "slide-out"}`} id="booking-engine"> */}

        <article className="container">

          <div className="enqiure-inner">

            <div className="row">

              <div className="custom-form-outer-div">

                <div className="custom-form-outer-div">

                  <div id="quickbook-widget"></div>

                </div>

              </div>

            </div>

          </div>

        </article>

      {/* </section> */}

      </>

    );

  };

  

  export default BookingForm;



   