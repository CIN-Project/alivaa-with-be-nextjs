"use client";
// import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
// import { useState } from "react";
import BookNowForm from "./booking-engine-widget/BookNowForm";
const Navbar = dynamic(() => import("./components/Navbar"));
const BannerSocial = dynamic(() => import("./components/BannerSocial"));
const AboutUs = dynamic(() => import("./components/AboutUs"));
const ExperienceSlider = dynamic(() => import("./components/ExperienceSlider"));
const OurOffers = dynamic(() => import("./components/OurOffers"));
const OurBrands = dynamic(() => import("./components/OurBrands"));
const HotelSlider = dynamic(() => import("./components/HotelSlider"));
import Image from "next/image";
import FilterBar from "./cin_booking_engine/Filterbar";

export default function HomePage({ contentData, tokenKey, status }) {
  // const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <section className="home-hdr-hght">
        <Navbar />
      </section>
      <section className="banner-section">
        <video
          playsInline
          autoPlay
          loop
          muted
          loading="lazy"
          preload="none"
          width="93%"
          className="banner-img-home myvideo web-video desk-video"
        >
          <source src="/images/new-home-video.mp4" type="video/mp4" />
        </video>

        <video
          playsInline
          autoPlay
          loop
          muted
          loading="lazy"
          preload="none"
          className="banner_img_room myvideo pt-0 web-video mob-video"
        >
          <source src="/mobile-video/home_mob_vd.mp4" type="video/mp4" />
        </video>

        <BannerSocial></BannerSocial>
        <span className="updown-arrow">
          <Image
            src="/images/down-arrow.png"
            height={200}
            width={200}
            alt="down-arrow"
          />
        </span>
      </section>

      <section className="booking-form-section">
        <BookNowForm
          contentData={contentData}
          tokenKey={tokenKey}
          selectedProperty={0}
        />

        {/* <FilterBar
          contentData={contentData}
          tokenKey={tokenKey}
          selectedProperty={0}
        /> */}
      </section>

      <AboutUs />

      <HotelSlider />
      <ExperienceSlider />
      <section className="sectiontop mt-5">
        <OurOffers />
      </section>

      <OurBrands />

      <motion.section
        className="experience-section about-us media-n-news media-news"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.14 }}
      >
        <div className="container">
          <div className="new-rj-block">
            <h2 className="about-us text-center">Media & News</h2>
          </div>
          <div className="row media-box">
            <div className="col-lg-4 col-md-4">
              <div className="media-item">
                <a href="https://hopeconference.in/vikramjit/">
                  <Image
                    src="/images/media-1-image.jpg"
                    className="w-100"
                    alt="media-1"
                    height={300}
                    width={300}
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="media-item">
                <a href="https://www.livemint.com/industry/hotel-chains-alivaa-hotels-lemon-tree-hotels-cygnett-hotels-chalet-hotels-itc-ihcl-makemytrip-brij-hospitality-11736658069735.html">
                  <Image
                    src="/images/media-image-1.jpg"
                    className="w-100"
                    alt="media-1"
                    height={300}
                    width={300}
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="media-item">
                <a href="https://hospitality.economictimes.indiatimes.com/news/hotels/the-year-has-taken-off-on-a-good-note-vikramjit-singh/94292358">
                  <Image
                    src="/images/media-image-2.jpg"
                    className="w-100"
                    alt="media-1"
                    height={300}
                    width={300}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
