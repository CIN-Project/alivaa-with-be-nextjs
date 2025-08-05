'use client';

   

import { useEffect } from "react";


  

  const BookingFormInner = () => {

    //const [isVisible, setIsVisible] = useState(false);



    useEffect(() => {
      const loadBookingWidget = () => {
        if (document.getElementById("propInfo")) {
          // console.log("Booking script already exists.");
          return; 
        } 

        // console.log("Injecting Booking script...");

        const script = document.createElement("script");

        script.src = "https://bookings.alivaahotels.com/plugin/js/booking-service.min.js";

        script.id = "propInfo";

        script.async = true;

        

        // Add required attributes

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

      

          

      {/* <section className={`booking-form-section ${isVisible ? "slide-in-inner" : "slide-out-inner"}`} id="booking-engine"> */}

        <article className="container">

          <div className="enqiure-inner">

            <div className="row">

              <div className="custom-form-outer-div">

                <div className="custom-form-outer-div">

                  {/* The widget should load inside this div */}

                  <div id="quickbook-widget">
                 
                  </div>

                </div>

              </div>

            </div>

          </div>

        </article>

      {/* </section> */}

      </>

    );

  };

  

  export default BookingFormInner;



   