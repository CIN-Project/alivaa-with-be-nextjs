"use client";

// import Link from 'next/link';

//import BookingForm from '../components/BookingForm';

import "../../app/styles/inner.css";

import { motion } from "framer-motion";

import HotelTab from '../components/HotelTab';

import Navbar from "../components/Navbar";

import { useState } from "react";
import BookNowForm from '../booking-engine-widget/BookNowForm';


export default function AboutPage() {

 

  const [isVisible, setIsVisible] = useState(false);

    return (

      <>
    <section className='home-hdr-hght'>   
    <Navbar/>
    </section>

      <section className="banner-section">
        <video playsInline 

          autoPlay 

          loop 

          muted 

          width="100%" 

          className="banner-img pt-0 myvideo web-video"> 

          <source src="/images/web-video-n.mp4" type="video/mp4" />

        </video>

        <div className="social-icon-banner" >
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

      
<section className="booking-form-section">

            <BookNowForm />
    
</section>

  <div className="row">

    <div className="col-12">

    {/* <section className={`booking-form-section ${isVisible ? "slide-in" : "slide-out"}`} id="booking-engine">
   
   <BookingFormInner />
  
   </section> */}

   <section>
    <div className="container mt-5">
            <motion.section className="search-content about-us-main-footer new-rj-block text-center"

                initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1, x: 0 }}

                transition={{ duration: 0.6, delay: 0.6 }}>

                <div className="container">

                  <div className="center" id="about-us">

                      <h3 className="global-heading-about inner-hd text-center">About Us</h3>

                      <p className="content-boxx" id="ccontent">Alivaa Hotels and Hoften Hotels offer two distinct yet exceptional experiences for travelers. Alivaa Hotels, a premium brand, delivers luxury and sophistication, with top-tier amenities, personalized service, and a focus on elegance and comfort. It's perfect for those who want a lavish escape with everything taken care of. On the other hand, Hoften Hotels, a mid-scale brand, provides a great balance of comfort and value. With modern facilities and a focus on convenience, it’s ideal for both business and leisure travelers seeking quality at an affordable price. Whether you're after indulgence or practicality, both brands promise a memorable stay.</p>

                  </div>

                </div>

            </motion.section>
</div>
   </section>
            <HotelTab/>

            </div>

            </div>

      </>

    );

  }