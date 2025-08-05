"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Modal } from "react-bootstrap";
import NavbarAliva from "app/components/NavbarAliva";
import HeaderAlivaa from "app/components/HeaderAlivaa";
import BookNowForm from "app/booking-engine-widget/BookNowForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faArrowCircleUp,
} from "@fortawesome/free-solid-svg-icons";

import "../../../styles/inner.css";
import FilterBar from "app/cin_booking_engine/Filterbar";
import { BookingEngineProvider } from "app/cin_context/BookingEngineContext";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function GurgaonAccommodationPage({ params }) {
  const { hotel_slug, brand_slug } = React.use(params);

  const [bannerSlider, setbannerSlider] = useState([]);
  const [metah, setmetah] = useState([]);
  const [rsoot, setRsoot] = useState([]);
  const [htls, setHtls] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [activeModalIndex, setActiveModalIndex] = useState(null);
  const [showFilterBar, setShowFilterBar] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const city_alias = "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestData = {
          brand_slug: brand_slug,
          city_slug: city_alias,
          hotel_slug: hotel_slug,
          web_source: "alivaahotels.com",
        };
        const response = await axios.post(
          `${API_BASE_URL}/hotel-rooms`,
          requestData
        );
        setRsoot(response.data.hotel_stay || []);
        setHtls(response.data.room_amenities || []);
        setbannerSlider(response.data.hotel_banner_slider || []);
        setmetah(response.data.hotel_meta || []);
      } catch (err) {
        console.error("API Error:", err);
      }
    };
    fetchData();
  }, [hotel_slug]);

  const renderRoomContent = (val, index) => (
    <>
      <h2 className="global-heading text-2xl font-bold text-gray-800">
        {val.title}
      </h2>
      <p className="mb-2 text-gray-600">{val.short_description}</p>
      <b className="fw-bold">550 sq ft/View Varies</b>
      <a
        href="#"
        className="text-primary d-block mt-1 mb-1 text-black font-semibold cursor-pointer hover:underline flex items-center"
        onClick={(e) => {
          e.preventDefault();
          setActiveModalIndex(index);
        }}
      >
        {showMore ? "Read Less" : "Read More"}
        <FontAwesomeIcon
          icon={showMore ? faArrowCircleUp : faArrowCircleDown}
          className="ms-2 text-lg"
        />
      </a>
      {val.booking_id == "51757" ? (
        <button
          onClick={() => {
            setSelectedRoom({
              roomId: parseInt(val.room_id),
              propertyId: parseInt(val.booking_id),
            });
            setShowFilterBar(true);
          }}
          className="rounded-0 box-btn bg-green-500 mt-3 text-white d-inline-block px-4 py-2 mt-3 rounded-md shadow hover:bg-green-600 transition duration-300 ease-in-out"
          style={{ backgroundColor: "#002d62" }}
        >
          Book Now
        </button>
      ) : (
        <a
          href={val.booking_link}
          className="rounded-0 box-btn bg-green-500 mt-3 text-white d-inline-block px-4 py-2 mt-3 rounded-md shadow hover:bg-green-600 transition duration-300 ease-in-out"
          style={{ backgroundColor: "#002d62" }}
        >
          Book Now
        </a>
      )}
    </>
  );

  return (
    <>
      <section className="home-hdr-hght">
        <NavbarAliva />
        <HeaderAlivaa />
      </section>

      <section
        className="banner-section"
        style={{ height: "70vh", overflow: "hidden" }}
      >
        {bannerSlider &&
        bannerSlider.slider_video &&
        bannerSlider.slider_video !== "-" ? (
          <div
            className="banner_img_room myvideo pt-0 web-video desk-video"
            style={{ width: "93%", height: "70vh" }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 9",
              }}
            >
              <iframe
                loading="lazy"
                title="Gumlet video player"
                src={`https://play.gumlet.io/embed/${bannerSlider.slider_video}?background=true&autoplay=true&loop=true&disableControls=true`}
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
              src={bannerSlider?.banner_image || "/default-fallback.jpg"}
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

      <section className="booking-form-section">
        {/* <BookNowForm /> */}
        {showFilterBar && selectedRoom ? (
          <BookingEngineProvider>
            <FilterBar
              selectedProperty={parseInt(selectedRoom.propertyId)}
              roomId={selectedRoom.roomId}
            />
          </BookingEngineProvider>
        ) : (
          <BookNowForm />
        )}
      </section>

      {/* <section>
        {showFilterBar && selectedRoom && (
          <BookingEngineProvider>
            <FilterBar
              roomId={selectedRoom.roomId}
              propertyId={selectedRoom.propertyId}
            />
          </BookingEngineProvider>
        )}
      </section> */}
      <div className="container text-center sectiontop">
        {metah && metah.length > 0 && metah[0] && metah[0].page_heading && (
          <h1 className="global-heading-gurgaon mb-4 inner-hd">
            {metah[0].page_heading}
          </h1>
        )}
      </div>

      <div id="gurgaon-accommodation">
        {rsoot.map((val, index) => {
          const isEven = index % 2 === 1;

          return (
            <section className="sec-padding room_cs py-10" key={index}>
              <div className="container-md bg-gray-100 p-0 shadow-lg rounded-lg">
                <div className="global-heading-sec text-start">
                  <div className="row g-0 items-center">
                    {isEven ? (
                      <>
                        {/* Video Left */}
                        <div className="col-md-7 order-1">
                          {val?.video_link && val.video_link !== "-" ? (
                            <div
                              style={{
                                position: "relative",
                                width: "100%",
                                aspectRatio: "16 / 9",
                              }}
                            >
                              <iframe
                                loading="lazy"
                                title="Gumlet video player"
                                src={`https://play.gumlet.io/embed/${val.video_link}?background=true&autoplay=true&loop=true&disableControls=true`}
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
                          ) : (
                            <div>
                              <img
                                src={val?.image || "/default-fallback.jpg"}
                                alt="Banner"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          )}
                        </div>
                        {/* Text Right */}
                        <div className="col-md-5 order-2 p-5 flex flex-col justify-center">
                          {renderRoomContent(val, index)}
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Text Left */}
                        <div className="col-md-5 order-1 p-5 flex flex-col justify-center">
                          {renderRoomContent(val, index)}
                        </div>
                        {/* Video Right */}
                        <div className="col-md-7 order-2">
                          {val?.video_link && val.video_link !== "-" ? (
                            <div
                              style={{
                                position: "relative",
                                width: "100%",
                                aspectRatio: "16 / 9",
                              }}
                            >
                              <iframe
                                loading="lazy"
                                title="Gumlet video player"
                                src={`https://play.gumlet.io/embed/${val.video_link}?background=true&autoplay=true&loop=true&disableControls=true`}
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
                          ) : (
                            <div
                              style={{
                                width: "100%",
                                aspectRatio: "16 / 9",
                                overflow: "hidden",
                              }}
                            >
                              <img
                                src={val?.image || "/default-fallback.jpg"}
                                alt="Banner"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
