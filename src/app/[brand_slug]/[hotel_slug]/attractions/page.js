"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../styles/inner.css";
import HeaderAlivaa from "app/components/HeaderAlivaa";
import NavbarAliva from "app/components/NavbarAliva";
import BookNowForm from "app/booking-engine-widget/BookNowForm";
import HotelAttractions from "app/components/HotelAttractions";
import Image from "next/image";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

function HattractionPage({ params }) {
  const { hotel_slug, brand_slug } = React.use(params);
  const city_alias = "";

  const [bannerSlider, setBannerSlider] = useState(null); // banner is a single object
  const [hotelAttraction, setHotelOffers] = useState([]);
  const [metah, setMetah] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${API_BASE_URL}/hotel-attraction`, {
          brand_slug,
          city_slug: city_alias,
          hotel_slug,
          web_source: "alivaahotels.com",
        });

        const data = response.data;

        setHotelOffers(data.hotel_attraction || []);
        setBannerSlider(data.hotel_banner_slider || null);
        setMetah(data.hotel_meta || []);
      } catch (err) {
        console.error("API Error:", err);
      }
    };

    fetchData();
  }, [hotel_slug, brand_slug]);

  return (
    <>
      <section className="home-hdr-hght">
        <NavbarAliva />
        <HeaderAlivaa />
      </section>

      {/* Banner Section */}

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
            rel="noreferrer"
          >
            <img src="/images/fb-icon.svg" height="25" width="25" alt="facebook" />
          </a>
          <a
            className="btn btn-social"
            href="https://www.instagram.com/alivaahotels/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/instagram-icon.svg" height="25" width="25" alt="instagram" />
          </a>
          <a
            className="btn btn-social"
            href="https://www.linkedin.com/company/alivaa-hotels-resorts/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/linkedin-icon.svg" height="25" width="25" alt="linkedin" />
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

 

      {/* Offers Section */}
     <div id="gurgaon-attraction">
<HotelAttractions metah={metah} hotelAttraction={hotelAttraction} /></div>
    </>
  );
}

export default HattractionPage;
