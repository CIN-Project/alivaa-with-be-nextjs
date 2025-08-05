"use client";

import "../../../styles/inner.css";
import React, { useState, useEffect } from "react";
import { use } from "react"; // ✅ import use from React
import axios from "axios";
import HeaderAlivaa from "app/components/HeaderAlivaa";
import NavbarAliva from "app/components/NavbarAliva";
import GurgaonHotelFacilities from "app/components/GurgaonHotelFacilities";
import BookNowForm from "app/booking-engine-widget/BookNowForm";
import Image from "next/image";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

function FacilitiesPage({ params }) {
  const { hotel_slug, brand_slug } = use(params); // ✅ unwrap here
  const city_alias = "";

  const [hcontact, setHcontact] = useState([]);
  const [metah, setMetah] = useState([]);
  const [bannerSlider, setbannerSlider] = useState([]);

  // Fetch API data on load
  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const res = await axios.post(`${API_BASE_URL}/hotel-facilities`, {
          brand_slug,
          city_slug: city_alias,
          hotel_slug,
          web_source: "alivaahotels.com",
        });

        const data = res.data;

        if (data.ErrorCode === 1) {
          setHcontact(data.hotel_services_facilities || []);
          setMetah(data.hotel_meta || []);
          // hotel_banner_slider is an array, take first item
        setbannerSlider(data.hotel_banner_slider || []);
        } else {
          console.error("API error:", data.ErrorMessage);
        }
      } catch (err) {
        console.error("API request failed:", err);
      }
    };

    fetchFacilities();
  }, [hotel_slug, brand_slug]);

  return (
    <>
      {/* Header */}
      <section className="home-hdr-hght">
        <NavbarAliva />
        <HeaderAlivaa />
      </section>

      {/* Dynamic Banner Section */}

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

        {/* Social Icons */}
        <div className="social-icon-banner">
          <a
            className="btn btn-social"
            href="https://www.facebook.com/profile.php?id=61560140841449&mibextid=ZbWKwL"
            target="_blank"
          >
            <img
              src="/images/fb-icon.svg"
              height="25"
              width="25"
              alt="facebook"
              className="social-icon"
            />
          </a>

          <a
            className="btn btn-social"
            href="https://www.instagram.com/alivaahotels/"
            target="_blank"
          >
            <img
              src="/images/instagram-icon.svg"
              height="25"
              width="25"
              alt="instagram"
              className="social-icon"
            />
          </a>

          <a
            className="btn btn-social"
            href="https://www.linkedin.com/company/alivaa-hotels-resorts/"
            target="_blank"
          >
            <img
              src="/images/linkedin-icon.svg"
              height="25"
              width="25"
              alt="linkedin"
              className="social-icon"
            />
          </a>
        </div>

        <span className="updown-arrow">
          <img src="/images/down-arrow.png" alt="scroll down" />
        </span>
      </section>

      {/* Booking Form */}
      <section className="booking-form-section">
        <BookNowForm />
      </section>

      {/* Facilities Section */}
      <section className="mb-5">
        <div id="gurgaon-facilities">
          <GurgaonHotelFacilities hcontact={hcontact} metah={metah} />
        </div>
      </section>
    </>
  );
}

export default FacilitiesPage;
