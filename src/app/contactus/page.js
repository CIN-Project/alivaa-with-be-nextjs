"use client";

//import BookingForm from '../components/BookingForm';

import "../../app/styles/inner.css";

import "../../app/styles/contactus.css";

import { motion } from "framer-motion";

import ContactUs from '../components/ContactUs';

import Navbar from "../components/Navbar";

import { useState } from "react";
import BookNowForm from "app/booking-engine-widget/BookNowForm";



export default function ContactUsPage() {
  const [isVisible, setIsVisible] = useState(false);


    return (

      <>
<section className='home-hdr-hght'>
      <Navbar />
      </section>

  <section className="banner-section contact_bnr">
    
    <img alt="Hotels in Gurgaon" className="banner-img pt-0" src="/images/contact-corporate.jpg" />
    
    <div className=" social-icon-banner" >
            <a className="btn btn-social" href="https://www.facebook.com/profile.php?id=61560140841449&amp;mibextid=ZbWKwL" target="_blank">
              <img src="/images/fb-icon.svg" height="25" width="25" alt="social-icon" className="social-icon" />
            </a>
          
            <a className="btn btn-social" href="https://www.instagram.com/alivaahotels/" target="_blank">
              <img src="/images/instagram-icon.svg" height="25" width="25" alt="social-icon" className="social-icon" />
            </a>
           
            <a className="btn btn-social" href="https://www.linkedin.com/company/alivaa-hotels-resorts/" target="_blank">
            <img src="/images/linkedin-icon.svg" height="25" width="25" alt="social-icon" className="social-icon" />
            </a>
           
          </div>
          <span className="updown-arrow">
          <img src="images/down-arrow.png"/>
        </span>
    {/* { !isVisible && (<div className="content-section">
        <div className="container position-relative mb-0">
          <div className="col-lg-12 text-center wow fadeInDown" data-wow-duration="4s">
            <button className="btn desktop-button corporatebannerbutton" id="book-now1" onClick={() => setIsVisible(!isVisible)}>
              <img src="/images/search-icon-white.svg" className="search-iconimage" alt="Search Icon" />
             
            </button>
          </div>
        </div>
      </div>) } */}
      
</section>

         
{/* <section
        className={`booking-form-section ${
          isVisible ? "slide-in" : "slide-out"
        }`}
        id="booking-engine"
      >
        <BookingFormInner />
 </section> */}
 <section className="booking-form-section">

            <BookNowForm />
      
      
</section>
   

       <div className="row">

         <div className="container">

      {/* <BookingForm /> */}

   

      <section id="contactus" className="search-content mt-2 about-us text-center"
>

      

      <motion.div className="container" 

          initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1, x: 0 }}

                transition={{ duration: 0.6 }}>

          <div className="center" >

	          <h3 className="global-heading-about-2 inner-hd">Contact Us		</h3>

            <h1 className="global-heading-gurgaon sub-head">Our 24x7 helpdesk is waiting to assist you</h1>

           

          </div>

      </motion.div>

  

      <ContactUs/>

    </section>

    

    </div>

            </div>

            {/* <HotelTab/> */}

      </>

    );

}