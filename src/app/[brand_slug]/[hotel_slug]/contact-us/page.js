"use client"


import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

import HeaderAlivaa from 'app/components/HeaderAlivaa'
import HotelContact from 'app/components/HotelContact'
import "../../../styles/inner.css";
import axios from "axios";
import NavbarAliva from "app/components/NavbarAliva";
import BookNowForm from "app/booking-engine-widget/BookNowForm";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

function ContactUsPage({ params }) {
  const { hotel_slug, brand_slug } = React.use(params);
    const city_alias = "";


const[htlcontact, sethtlcontact] = useState({   
     brand_slug: brand_slug,
            city_slug: city_alias,
            hotel_slug: hotel_slug,
            web_source: "alivaahotels.com",
})

// {[key:'Heading', value: [{}], [key:'Heading', value: [{}]}

// [{key: 'Accordion Title', values: []}]  nested  object structure

const[hcontact, sethcontact] = useState([]);
const [metah, setmetah] = useState([]);
const [banner, setBanner] = useState(null);
const showhotelcontact = () =>{
  axios.post(`${API_BASE_URL}/hotel-contact-us`, htlcontact).then(res => {
  sethcontact(res.data.hotel_contact);
  setBanner(res.data.hotel_banner_slider); // not wrapped in []
  setmetah(res.data.hotel_meta || []);
})
.catch(err => {
console.log(err)
})
}

// on load function call for loading 
useEffect(() => {
  showhotelcontact();
},[])

  return (
   <>
  
  
  <section className='home-hdr-hght'>
  
  <NavbarAliva/>
  <HeaderAlivaa />
  </section>
  
  
      <section className="banner-section" style={{height: '70vh', overflow: 'hidden'}}>
      {banner && banner.slider_video && banner.slider_video !== "-" ? (
   <div className="banner_img_room myvideo pt-0 web-video desk-video" style={{ width: '93%', height: '70vh'  }}>
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9' }}>
      <iframe
        loading="lazy"
        title="Gumlet video player"
        src={`https://play.gumlet.io/embed/${banner.slider_video}?background=true&autoplay=true&loop=true&disableControls=true`}
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
    </div>
  </div>
) : (
  <div
    className="banner_img_room myvideo pt-0 web-video desk-video"
    style={{
      width: "93%",
      height: "70vh",
      overflow: "hidden",
    }}
  >
    <img
      src={banner?.banner_image || "/default-fallback.jpg"}
      alt="Banner"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </div>
)}



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


        <div className="container text-center sectiontop">
             {metah &&
  metah.length > 0 &&
  metah[0] &&
  metah[0].page_heading && (
        <h2 id="gurgaon-hotel" className="global-heading-gurgaon inner-hd" >{metah[0].page_heading}</h2>
             )}

  {metah &&
  metah.length > 0 &&
  metah[0] &&
  metah[0].page_sub_heading && (
  <h1 id="gurgaon-hotel" className="global-heading-gurgaon sub-head">{metah[0].page_sub_heading}</h1>
)}
  {metah && metah[0] && metah.length > 0 && (
          <p className="content-boxx gurgaon-dinning mt-2">  {metah[0].page_description}</p>
  )}
        </div>
      
  <div className="row gurgaon-contact-row sectiontop">
   <div className="container mb-5">  
        <motion.section className="search-content contact-us new-rj-block new-pc-block gurgaon-contact text-center mt-1"
                  initial={{ opacity: 0, x: -50 }}
  
                  whileInView={{ opacity: 1, x: 0 ,y: -200}}
  
                  transition={{ duration: 0.6, delay: 0.6 }}>  
        
  
        <HotelContact hcontact ={hcontact }/>
  
      </motion.section>
  
      </div>
  
      </div>
  
        </>
  )

}

export default ContactUsPage;