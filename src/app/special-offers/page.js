"use client";

// import Link from 'next/link';

//import BookingForm from '../components/BookingForm';

import "../../app/styles/inner.css";

import { motion } from "framer-motion";

import SpecialOffers from "../components/SpecialOffers";

import Navbar from "../components/Navbar";

import BookingFormInner from "../components/BookingFormInner";

import { useState } from "react";
import { FormProvider } from "app/booking-engine-widget/FormContext";
import BookNowForm from "app/booking-engine-widget/BookNowForm";

export default function SpecialofferPage1() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {/* <section className="banner-section"> */}

      <section className="home-hdr-hght">
        <Navbar />
      </section>

      <section className="banner-section">
        <img
          alt="Hotels in Gurgaon"
          className="banner-img pt-0"
          src="/images/offer-corporate-page.jpg"
        />

        <div className=" social-icon-banner">
          <a
            className="btn btn-social"
            href="https://www.facebook.com/profile.php?id=61560140841449&amp;mibextid=ZbWKwL"
            target="_blank"
          >
            <img
              src="/images/fb-icon.svg"
              height="25"
              width="25"
              alt="social-icon"
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
              alt="social-icon"
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
              alt="social-icon"
              className="social-icon"
            />
          </a>
        </div>
        <span className="updown-arrow">
          <img src="images/down-arrow.png" />
        </span>
        {/* { !isVisible && (<div className="content-section btm20">
        <div className="container position-relative mb-0">
          <div className="col-lg-12 text-center wow fadeInDown" data-wow-duration="4s">
            <button className="btn desktop-button corporatebannerbutton mb5n" id="book-now1" onClick={() => setIsVisible(!isVisible)}>
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
      <div className="row mt-4">
        <div className="container">
          <section
            id="special-offer"
            className="search-content contact-us new-rj-block text-center mt-1"
          >
            <motion.div
              className="container"
              initial={{ opacity: 0, x: 250 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ width: "80%", position: "relative" }}
            >
              <div className="center">
                <h3 className="global-heading-about inner-hd text-center special-offer-head">
                  Special Offers
                </h3>

                <p className="content-boxx " style={{ textAlign: "justify" }}>
                  Our exclusive offers are designed to give you the best value.
                  Whether you're looking for a luxurious getaway, a fashion
                  upgrade, or special lifestyle experiences, our Offers Page
                  brings you the best discounts and packages to enhance your
                  journey with us.
                </p>
              </div>
            </motion.div>
          </section>

          <div className="container offertab">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="alivaa-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#alivaa-hotels"
                  type="button"
                  role="tab"
                >
                  Alivaa, Gurugram
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="alivaa-mcleodganj-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#alivaamcleodganj-hotels"
                  type="button"
                  role="tab"
                >
                  Alivaa, McLeodganj
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="lansdowne-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#lansdowne-hotels"
                  type="button"
                  role="tab"
                >
                  Alivaa, Lansdowne
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="hoften-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#hoften-hotels"
                  type="button"
                  role="tab"
                >
                  Hoften, Gurugram
                </button>
              </li>
              
            </ul>

            <SpecialOffers />
          </div>
          {/* <HotelTab/> */}
        </div>
      </div>
    </>
  );
}
