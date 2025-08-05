"use client";

//import BookingForm from "app/components/BookingForm";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import "../../../styles/inner.css";
import HeaderAlivaa from "app/components/HeaderAlivaa";
import MeeetingEvent from "app/components/MeeetingEvent";
import NavbarAliva from "app/components/NavbarAliva";
import BookNowForm from "app/booking-engine-widget/BookNowForm";

export default function EventsPage({ hotelData }) {
 
const {
  hotel_banner_slider: bannerSlider,  
  hotel_event: htls,
  hotel_meta: metah,
} = hotelData;
  return (
 <>
 <section className='home-hdr-hght'>
      <NavbarAliva></NavbarAliva>
      <HeaderAlivaa />
</section>


<section className="banner-section" style={{height: '70vh', overflow: 'hidden'}}>
 {bannerSlider &&
  bannerSlider.length > 0 &&
  bannerSlider[0] && (
    <div className="banner_img_room myvideo pt-0 web-video desk-video" style={{ width: '93%', height: '70vh' }}>
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9' }}>
        {bannerSlider[0].slider_video && bannerSlider[0].slider_video !== "-" ? (
          <iframe
            loading="lazy"
            title="Gumlet video player"
            src={`https://play.gumlet.io/embed/${bannerSlider[0].slider_video}?autoplay=1&loop=1&mute=1&playsinline=1`}
            style={{
              border: "none",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            allow="autoplay; accelerometer; gyroscope; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          ></iframe>
        ) : bannerSlider[0].banner_image ? (
          <Image
            src={bannerSlider[0].banner_image}
            alt={bannerSlider[0].title || "Banner Image"}
            width={1920}
            height={1080}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              borderRadius: "12px",
            }}
          />
        ) : null}
      </div>
    </div>
)}
    
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
          <img src="../../images/down-arrow.png"/>
        </span>
   
      
</section>

  <section className="booking-form-section">
     

             <BookNowForm />


</section>
<section className="mb-5">
      <MeeetingEvent metah={metah} htls={htls}/>
</section>

 </>
  )

}



