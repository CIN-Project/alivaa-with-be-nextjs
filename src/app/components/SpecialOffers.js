"use client";

import React, { useEffect } from "react";

// import Swiper from 'swiper';

import "swiper/css";

import "swiper/css/navigation";

import "swiper/css/pagination";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import LansdowneNewEnquiryPopupBook from "./LansdowneNewEnquiryPopupBook";

const SpecialOffers = () => {
  return (
    <>
    <motion.section className="new-our-offers our-offers about-us">
      <div className="container">
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="alivaa-hotels"
            role="tabpanel"
          >
            <div className="tab-content special-offers about-us new-rj-block text-center">
              <div className="container p-2 g-0">
                <div className="row align-items-start m-0">
                  <div className="col-lg-6 p-0">
                    <div className="alivaa-album">
                      <Image
                        src="/offers/limited-time-offer-alivaa-ggn.png"
                        alt="Executive Package"
                        style={{ margin: "auto" }}
                        width={700}
                        height={550}
                        layout="responsive"
                      />
                    </div>
                  </div>

                  <div className="col-lg-5 offset-lg-1 p-0 text-start executive">
                    <h3 className="global-heading-about">LIMITED TIME OFFER</h3>

                    <ul>
                      <li className="li-para">
                        Limited Time Offer: Up to 50% Off Exclusive Deals
                      </li>

                      <li className="li-para">Up to 50% Off on Best Available Rate</li>

                      <li className="li-para">Luxe Accommodation</li>

                      <li className="li-para">
                        Breakfast for Two
                      </li>

                      <li className="li-para">
                        20% Discount on Food & Beverage
                      </li>

                      <li className="li-para">
                        Free Guaranteed Early check-in & Late check-out
                      </li>
                    </ul>



                    <Link
                      href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y"
                      className="btn text-white dark-bg rounded-0"
                      style={{
                        borderColor: "#000",
                        backgroundColor: "#002d62",
                      }}
                      id="book-now"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>

                <div className="row align-items-start pb-3 pt-4 mx-0 my-5">
                  <div className="col-lg-5 offset-lg-1 mt-4 p-0 order-lg-5">
                    <div className="alivaa-album">
                      <img
                        src="/offers/day-use-offer-alivaa-ggn.jpg"
                        alt="Executive Package"
                        layout="responsive"
                        className="img-fluid"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 ps-5 text-start day-rooms">
                    <h3 className="global-heading-about">Day Use Rooms</h3>

                    <p
                      className="content-boxx"
                      style={{ textAlign: "justify" }}
                    >
                     Day Use Room 10 AM to 6 PM, Check-in and Check-out on the same day
                    </p>

                    <ul>
                      <li className="li-para">Room Only (EP) | Free WiFI</li>
                    </ul>
                    <p
                      className="content-boxx"
                      style={{ textAlign: "justify" }}
                    >
                      Terms and Conditions:
                    </p>
                    <ul>
                      <li className="li-para">
                       8-hour slot to be booked between 10 AM to 6 PM
                      </li>
                      <li className="li-para">
                        Check-in is allowed only at or after 10 am, and check-out is before 6 pm on the same day.
                      </li>
                      <li className="li-para">
                        Every extra hour utilized post 6 pm will be charged at 50% of the booking value, per hour, subject to room availability.
                      </li>
                      <li className="li-para">
                        20% off on Food & Beverage Services.
                      </li>
                    </ul>
                    <Link
                      href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y"
                      className="btn  text-white dark-bg rounded-0"
                      style={{
                        borderColor: "#000",
                        backgroundColor: "#002d62",
                      }}
                      id="book-now"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="alivaamcleodganj-hotels"
            role="tabpanel"
            style={{ textAlign: "center" }}
          >
            <div className="tab-content special-offers about-us new-rj-block text-center">
              <div className="container p-2 g-0">
                <div className="row align-items-start m-0">
                      <div className="col-lg-6 p-0">
                        <div className="alivaa-album">
                          <Image
                            src="/offers/limited-time-offer-alivaa-mc.png"
                            alt="Executive Package"
                            style={{ margin: "auto" }}
                            width={700}
                            height={550}
                            layout="responsive"
                          />
                        </div>
                      </div>

                      <div className="col-lg-5 offset-lg-1 p-0 text-start executive">
                        <h3 className="global-heading-about">Limited Time Offer</h3>
                        <ul>
                          <li className="li-para">
                            Up to 50% Off Exclusive Deals
                          </li>
                          <li className="li-para">Up to 50% Off on Best Available Rate</li>
                          <li className="li-para">Luxe Accommodation</li>
                          <li className="li-para">
                            Breakfast for Two
                          </li>
                          <li className="li-para">
                            20% Discount on Food & Beverage
                          </li>
                          <li className="li-para">
                            Free Guaranteed Early check-in & Late check-out
                          </li>
                        </ul>
                        <Link
                          href="https://alivaahotels.securedreservations.com/reservation?bID=6d7880d9-c05f-4be6-811f-eeb846d0c59d&cID=f1c6c3f5-04d5-4180-9895-7f3e3f6b240c&destination=id=185914d6-4ebc-48b5-b982-6e81e5eb35b0&type=2&checkInDate=2025-05-20&checkOutDate=2025-05-20&guest=[ac1=2]&roomPropertyID=185914d6-4ebc-48b5-b982-6e81e5eb35b0"
                          className="btn text-white dark-bg rounded-0"
                          style={{
                            borderColor: "#000",
                            backgroundColor: "#002d62",
                          }}
                          id="book-now"
                        >
                          Book Now
                        </Link>
                      </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="hoften-hotels"
            role="tabpanel"
            style={{ textAlign: "center" }}
          >
            <div className="tab-content special-offers about-us new-rj-block text-center">
              <div className="container p-2 g-0">
                <div className="row align-items-start pb-3 pt-0 mx-0">
                  <div className="col-lg-6 mt-4 p-0">
                    <div className="alivaa-album">
                      <img
                          src="/offers/day-use-offer-hoften-ggn.jpg"
                          alt="Executive Package"
                          layout="responsive"
                          className="img-fluid"
                        />
                    </div>
                  </div>

                  <div className="col-lg-6 ps-5 text-start day-rooms">
                    <h3 className="global-heading-about">Day Use Rooms</h3>

                      <p
                        className="content-boxx"
                        style={{ textAlign: "justify" }}
                      >
                      Day Use Room 10 AM to 6 PM, Check-in and Check-out on the same day
                      </p>

                      <ul>
                        <li className="li-para">Room Only (EP) | Free WiFI</li>
                      </ul>
                      <p
                        className="content-boxx"
                        style={{ textAlign: "justify" }}
                      >
                        Terms and Conditions:
                      </p>
                      <ul>
                        <li className="li-para">
                        8-hour slot to be booked between 10 AM to 6 PM
                        </li>
                        <li className="li-para">
                          Check-in is allowed only at or after 10 am, and check-out is before 6 pm on the same day.
                        </li>
                        <li className="li-para">
                          Every extra hour utilized post 6 pm will be charged at 50% of the booking value, per hour, subject to room availability.
                        </li>
                        <li className="li-para">
                          20% off on Food & Beverage Services.
                        </li>
                      </ul>
                      <Link
                        href="https://bookings.alivaahotels.com/inst/#/home?propertyId=402NT4HhhBGbbpoRahFpDYw3nQ5NDM=&JDRN=Y&RoomID=210380,210381,210383,210384,210385&ap=1&gsId=402NT4HhhBGbbpoRahFpDYw3nQ5NDM="
                        className="btn  text-white dark-bg rounded-0"
                        style={{
                          borderColor: "#000",
                          backgroundColor: "#002d62",
                        }}
                        id="book-now"
                      >
                        Book Now
                      </Link>
                  </div>
                </div>

              </div>

            </div>
          </div>

          <div
            className="tab-pane fade"
            id="lansdowne-hotels"
            role="tabpanel"
            style={{ textAlign: "center" }}
          >
             <div className="tab-content special-offers about-us new-rj-block text-center">
              <div className="container p-2 g-0">
                <div className="row align-items-start m-0">
                      <div className="col-lg-6 p-0">
                        <div className="alivaa-album">
                          <Image
                            src="/offers/limited-time-offer-alivaa-lns.png"
                            alt="Executive Package"
                            style={{ margin: "auto" }}
                            width={700}
                            height={550}
                            layout="responsive"
                          />
                        </div>
                      </div>

                      <div className="col-lg-5 offset-lg-1 p-0 text-start executive">
                        <h3 className="global-heading-about">Limited Time Offer</h3>

                        <ul>
                          <li className="li-para">
                            Up to 50% Off Exclusive Deals
                          </li>

                          <li className="li-para">Up to 50% Off on Best Available Rate</li>

                          <li className="li-para">Luxe Accommodation</li>

                          <li className="li-para">
                            Breakfast for Two
                          </li>

                          <li className="li-para">
                            20% Discount on Food & Beverage
                          </li>

                          <li className="li-para">
                            Free Guaranteed Early check-in & Late check-out
                          </li>
                        </ul>



                        <Link
                          href="#"
                          className="btn text-white dark-bg rounded-0"
                          style={{
                            borderColor: "#000",
                            backgroundColor: "#002d62",
                          }}
                          id="book-now"
                          data-bs-toggle="modal"
                          data-bs-target="#LansEnquiryModal"
                        >
                          Enquire Now
                        </Link>
                      </div>
                </div>
              </div>
            </div>

          </div>


        </div>
      </div>
    </motion.section>
    <LansdowneNewEnquiryPopupBook></LansdowneNewEnquiryPopupBook>
    </>
  );
};

export default SpecialOffers;
