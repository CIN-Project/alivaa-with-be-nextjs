'use client';

import React, { useEffect} from 'react';

// import Swiper from 'swiper';

import 'swiper/css';

import 'swiper/css/navigation';

import 'swiper/css/pagination';

import Link from "next/link";

import { motion } from "framer-motion";

// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

////import 'bootstrap/dist/css/bootstrap.min.css';



const GurgaonHotelOffers = () => {

  



  return (

    <motion.section className="our-offers about-us mt-8" 

    initial={{ opacity: 0, x: -50 }}

    whileInView={{ opacity: 1, x: 0 }}

    transition={{ duration: 0.6,  delay:0.12 }}>

        <div className="container mt-4">

        <div className="new-rj-block">

          <h4 className="global-heading text-center">Our Offers</h4>

        </div>

        

        <div className="tab-content mt-3" id="myTabContent">

            <div className="tab-pane fade show active" id="alivaa-hotels" role="tabpanel">

                <div className="special-offers about-us new-rj-block text-center mt-5">

                    <div className="container">

                        <div className="row align-items-start m-0">

                            <motion.div className="col-lg-6 p-0" 

                                initial={{ opacity: 0, x: 100 }}

                                whileInView={{ opacity: 1, x: 0 }}

                                transition={{ duration: 0.6, delay: 0.6 }}>

                                <div className="alivaa-album">

                                    <img

                                    src="/images/executive-package-popup.jpg"

                                    alt="Executive Package"

                                    width={600}

                                    height={400}

                                    layout="responsive"

                                    />

                                </div>

                            </motion.div>

                            <motion.div className="col-lg-5 offset-lg-1 p-0 text-start" id="executive-offer"

                                initial={{ opacity: 0, x: -100 }}

                                whileInView={{ opacity: 1, x: 0 }}

                                transition={{ duration: 0.6, delay: 0.6 }}>

                                <h2 className="global-heading">Executive Package</h2>

                                <ul>

                                    <li>Up to 50% Off on Best Available Rate</li>

                                    <li>Luxe Accommodation</li>

                                    <li>Breakfast for Two</li>

                                    <li>20% Discount on Food & Beverage</li>

                                    <li>Free Guaranteed Early check-in & Late check-out</li>

                                    <li>Booking Period: 1st Sep to Oct 2024</li>

                                    <li>Stay Period: 1st Sep to Mar 2025</li>

                                </ul>

                                {/* Book Now Button */}

                                <Link href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y" className="btn book-now-headerr" style={{ borderColor: '#000' }} id="book-now">

                                    Book Now

                                </Link>

                            </motion.div>

                        </div>

                        <div className="row align-items-start mx-0 my-5">

                            <motion.div className="col-lg-5 offset-lg-1 p-0 order-lg-5" 

                                initial={{ opacity: 0, x: 100 }}

                                whileInView={{ opacity: 1, x: 0 }}

                                transition={{ duration: 0.6, delay: 0.6 }}>

                                <div className="alivaa-album">

                                    <img

                                    src="/images/offer-img-5.webp"

                                    alt="Executive Package"

                                    layout="responsive"

                                    className="img-fluid"

                                    />

                                </div>

                            </motion.div>

                            <motion.div className="col-lg-6 ps-5 text-start" id="dayrooms-offer"

                                initial={{ opacity: 0, x: -100 }}

                                whileInView={{ opacity: 1, x: 0 }}

                                transition={{ duration: 0.6, delay: 0.6 }}>

                                <h2 className="global-heading">Day Rooms</h2>

                                <p className="m-0 pt-2">Day Use Room 10 AM to 6 PM, Check-in and Check-out on same day</p>

                                <ul>

                                    <li>Starting at INR 2024*</li>

                                    <li className="room-only">Room Only (EP) | Free WiFI

                                        <ul>

                                            <li>Cancellation Policy: Non-cancellable, non-refundable and non-amendment for entire length of stay.</li>

                                        </ul>

                                    </li>

                                </ul>

                                <p className="m-0">Terms and Conditions:</p>

                                <ul>

                                    <li>8 hour slot to be booked between 10 AM to 6 PM</li>

                                    <li>Check-in is allowed only at or after 10 am, and check-out is before 6 pm on the same day.</li>

                                    <li>Every extra hour utilized post 6 pm will be charged at 50% of the booking value, per hour, subject to room availability.</li>

                                    <li>A 100 percent advance deposit is required at the time of reservation</li>

                                    <li>Non-cancellable, non-refundable and non-amendment for entire length of stay.</li>

                                </ul>

                                {/* Book Now Button */}

                                <Link href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y" className="btn book-now-headerr" style={{ borderColor: '#000' }} id="book-now">

                                    Book Now

                                </Link>

                            </motion.div>

                        </div>

                        <div className="row align-items-start mx-0 my-5">

                            <motion.div className="col-lg-5 p-0" 

                                initial={{ opacity: 0, x: 100 }}

                                whileInView={{ opacity: 1, x: 0 }}

                                transition={{ duration: 0.6, delay: 0.6 }}>

                                <div className="alivaa-album">

                                    <img

                                    src="/images/offer-img-2.webp"

                                    alt="Executive Package"

                                    layout="responsive"

                                    className="img-fluid"

                                    />

                                </div>

                            </motion.div>

                            <motion.div className="col-lg-6 offset-lg-1 p-0 text-start" id="relax-with-staycation"

                                initial={{ opacity: 0, x: -100 }}

                                whileInView={{ opacity: 1, x: 0 }}

                                transition={{ duration: 0.6, delay: 0.6 }}>

                                <h2 className="global-heading">Relax with a Staycation at ALIVAA</h2>

                                <ul>

                                    <li>Free breakfast is included on both the day of arrival (check-in) and the day of departure (check-out).</li>

                                    <li>Guaranteed Early check-in & Late check-out</li>

                                    <li>15% Discount On F&B Services</li>

                                    <li>Complimentary Access to GYM / Swimming pool</li>

                                    <li>Validity: July 2024 - March 2025</li>

                                </ul>

                                <Link href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y" className="btn book-now-headerr" style={{ borderColor: '#000' }} id="book-now">

                                    Book Now

                                </Link>

                            </motion.div>

                        </div>

                    </div>

                </div>

            </div>



            {/* <div className="tab-pane fade" id="hoften-hotels" role="tabpanel">

                <div className="special-offers about-us new-rj-block text-center mt-5">

                    <div className="row align-items-start m-0 mb-5">

                                <motion.div className="col-lg-5 p-0" 

                                    initial={{ opacity: 0, x: 100 }}

                                    whileInView={{ opacity: 1, x: 0 }}

                                    transition={{ duration: 0.6, delay: 0.6 }}>

                                    <div className="alivaa-album">

                                        <img

                                        src="/images/hoften-offer-3.jpg"

                                        alt="Executive Package"

                                        layout="responsive"

                                        className="img-fluid"

                                        />

                                    </div>

                                </motion.div>

    

                                <motion.div className="col-lg-6 offset-lg-1 p-0 text-start"

                                    initial={{ opacity: 0, x: -100 }}

                                    whileInView={{ opacity: 1, x: 0 }}

                                    transition={{ duration: 0.6, delay: 0.6 }}>

                                    <h2 className="global-heading">Introductory offer</h2>

                                    <ul>

                                        <li>25% off on Best Available Rate</li>

                                        <li>⁠Additional 10% discount for Logged-in users and mobile users</li>

                                        <li>⁠Booking Period : Nov to Mar 2025</li>

                                        <li>⁠Stay Period : Nov to Mar 2025</li>

                                    </ul>

                                    <Link href="https://bookings.alivaahotels.com/inst/#home?propertyId=602NTH6uajze8sE7Uan5lAKiNeraeUF6qvaE3NTc=&JDRN=Y" className="btn book-now-headerr" style={{ borderColor: '#00a3e0' }} id="book-now">

                                        Book Now

                                    </Link>

                                </motion.div>

                            </div>

                    </div>

                </div> */}

            </div>

        </div>

    </motion.section>

  );

};



export default GurgaonHotelOffers;