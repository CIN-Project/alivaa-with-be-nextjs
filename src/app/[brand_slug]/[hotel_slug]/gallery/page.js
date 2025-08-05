"use client";
import "../../../styles/inner.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { use } from "react"; // ✅ import use from React
import HeaderAlivaa from "app/components/HeaderAlivaa";
import NavbarAliva from "app/components/NavbarAliva";
import BookNowForm from "app/booking-engine-widget/BookNowForm";
import GurgaonHotelGallery from "app/components/GurgaonHotelGallery";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
function GalleryPage({ params }) {
  const { hotel_slug, brand_slug } = use(params); // ✅ unwrap here


  const [galleryData, setGalleryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.post(`${API_BASE_URL}/hotel-gallery`, {
          brand_slug,
          city_slug: "",
          hotel_slug,
          web_source: "alivaahotels.com",
        });

        if (res.data?.ErrorCode === 1) {
          setGalleryData(res.data);
        } else {
          console.error("API Error:", res.data?.ErrorMessage);
        }
      } catch (error) {
        console.error("API fetch failed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [hotel_slug, brand_slug]);

  return (
    <>
      {/* HEADER SECTION */}
      <section className="home-hdr-hght">
        <NavbarAliva />
        <HeaderAlivaa />
      </section>

      {/* BANNER SECTION WITH DYNAMIC IMAGE */}
          <section className="banner-section" style={{height: '70vh', overflow: 'hidden'}}>
      {galleryData?.hotel_banner_slider && galleryData?.hotel_banner_slider.slider_video && galleryData?.hotel_banner_slider.slider_video !== "-" ? (
   <div className="banner_img_room myvideo pt-0 web-video desk-video" style={{ width: '93%', height: '70vh'  }}>
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9' }}>
      <iframe
        loading="lazy"
        title="Gumlet video player"
        src={`https://play.gumlet.io/embed/${galleryData?.hotel_banner_slider.slider_video}?background=true&autoplay=true&loop=true&disableControls=true`}
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
      src={galleryData?.hotel_banner_slider?.banner_image || "/default-fallback.jpg"}
      alt="Banner"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </div>
)}

        {/* SOCIAL ICONS */}
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

        {/* DOWN ARROW */}
        <span className="updown-arrow">
          <img src="../../images/down-arrow.png" alt="down arrow" />
        </span>
      </section>

      {/* BOOK NOW FORM */}
      <section className="booking-form-section">
        <BookNowForm />
      </section>

      {/* HOTEL GALLERY */}
      {loading ? (
        <div className="text-center py-5">Loading gallery...</div>
      ) : (
        <GurgaonHotelGallery galleryData={galleryData} />
      )}
    </>
  );
}

export default GalleryPage;
