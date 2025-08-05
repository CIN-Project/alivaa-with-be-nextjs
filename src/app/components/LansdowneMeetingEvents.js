"use client";

import React, { useEffect } from "react";
import "swiper/css";

import "swiper/css/navigation";

import "swiper/css/pagination";

import Link from "next/link";

import { motion } from "framer-motion";

const LansdowneMeetingEvents = () => {
  return (
    <>
      <div className="row mb-5">
        <div className="container">
          <motion.section
            className="our-offers about-us gurgaon-fac"
            initial={{ opacity: 0, y: -0 }}
            animate={{ opacity: 1, y: -0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="container text-center">
              <h1 className="global-heading-gurgaon inner-hd">Meeting & Events</h1>
              <p className="content-boxx d-none">
                We offer a stunning poolside space that is perfect to host
                corporate events, an elegant wedding functions or intimate
                parties. If you are planning a colorful pre wedding function
                near poolside setting or a professional offsite meeting then or
                versatile venue is perfect for it and our dedicating team ensure
                that your event is seamless. From floral decor to comfortable
                seating and warm hospitality, our team take care of every
                details.
              </p>
            </div>

            <div className="container gurgaon-fac sectiontop">
              <motion.div
                className="tab-content"
                initial={{ opacity: 0, y: -110 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="tab-pane fade show active">
                  <div className="special-offers about-us new-rj-block text-center">
                    <div className="container">
                      <div
                        className="col-xs-12 no-pad voffset-2 res-no-margin swimming-pool"
                        id="swimming-pool"
                      >
                        <motion.div
                          className="room-block"
                          initial={{ opacity: 0, y: 80, x: 190 }}
                          whileInView={{ opacity: 1, x: 258 }}
                          transition={{ duration: 0.9, delay: 0.9 }}
                        >
                          <img
                            className="custom-img-responsive w-auto faci-vid wow fadeInUp animated"
                            src="/lansdowne-img/events-new-img.png"
                            alt="meeting in Lansdowne"
                          />

                          <motion.div
                            className="room-main-info Gymnas right-block wow fadeInDown animated swimming-pool-para"
                            data-wow-duration="4s"
                            style={{
                              width: "50%",
                              height: "80%",
                              visibility: "visible",
                              WebkitAnimationDuration: "6s",
                              MozAnimationDuration: "6s",
                              animationDuration: "6s",
                            }}
                            initial={{ opacity: 0, y: -250, x: -1150 }}
                            whileInView={{ opacity: 1, x: -800 }}
                            transition={{ duration: 0.9, delay: 0.9 }}
                          >
                            <h3
                              className="global-heading-1"
                              style={{ marginLeft: "0px", marginTop: "35px" }}
                            >
                             Events
                            </h3>

                            <p
                              className="text-two text-justify"
                              style={{ fontSize: "14px", marginLeft: "0px" }}
                            >
                              We offer a stunning poolside space that is perfect to host corporate events, an elegant wedding functions or intimate parties. If you are planning a colorful pre wedding function near poolside setting or a professional offsite meeting then or versatile venue is perfect for it and our dedicating team ensure that your event is seamless. From floral decor to comfortable seating and warm hospitality, our team take care of every details.
                            </p>

                            {/* <a  style={{fontSize: "14px",marginLeft:"20px"}} className="btn btn-primary desktop-button" onClick={openModal}>Enquire Now</a> */}
                          </motion.div>
                        </motion.div>
                      </div>

                      
                    </div>
                  </div>
                </div>

               
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
      <br></br>
      <br></br>
    </>
  );
};

export default LansdowneMeetingEvents;
