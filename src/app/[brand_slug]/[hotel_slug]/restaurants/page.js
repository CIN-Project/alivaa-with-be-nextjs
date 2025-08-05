"use client";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
//import BookingForm from "app/components/BookingForm";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

import "../../../styles/inner.css";
import HeaderAlivaa from "app/components/HeaderAlivaa";
import HotelDining from "app/components/HotelDining";
import NavbarAliva from "app/components/NavbarAliva";
import BookNowForm from "app/booking-engine-widget/BookNowForm";

export default function RestaurantsPage({ params }) {
  const { hotel_slug, brand_slug } = React.use(params);

    const city_alias = "";


      const [bannerSlider, setbannerSlider] = useState([]);
      const [rsoot, setRsoot] = useState([]);
      const [htls, setHtls] = useState([]);
  const [metah, setmetah] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const requestData = {
            brand_slug: brand_slug,
            city_slug: city_alias,
            hotel_slug: hotel_slug,
            web_source: "alivaahotels.com",
          };
          const response = await axios.post(`${API_BASE_URL}/hotel-restaurants`, requestData);
          setRsoot(response.data.hotel_restaurants || []);
          setHtls(response.data.room_amenities || []);
          setbannerSlider(response.data.hotel_banner_slider || []);
              setmetah(response.data.hotel_meta || []);
        } catch (err) {
          console.error("API Error:", err);
        }
      };
      fetchData();
    }, [hotel_slug]);
  

    console.log("rsoot", rsoot)
  return (
    <>
  <section className='home-hdr-hght'>
     
<NavbarAliva/>
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
            src={`https://play.gumlet.io/embed/${bannerSlider[0].slider_video}?background=true&autoplay=true&loop=true&disableControls=true`}
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
                    <img src="../../images/down-arrow.png" />
                </span>
              

            </section>
 
  <section className="booking-form-section">
 <BookNowForm />
</section>
      <div className="container text-center sectiontop">
              {metah &&
  metah.length > 0 &&
  metah[0] &&
  metah[0].page_heading && (
  <h1 className="global-heading-gurgaon inner-hd">{metah[0].page_heading}</h1>)}

{metah && metah[0] && metah.length > 0 && (  
        <p className="content-boxx">
        {metah[0].page_description}
        </p>
)}
      </div>
 <HotelDining rsoot={rsoot} />
    </>
  )

}



