"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const Roomshitesaliva = ({ roomSuites, hotelList, brand_slug, hotel_slug }) => {
  return (
    <section className="your-break about-us sec-padding mb-5">
      <div className="container">
        {hotelList?.length > 0 && (
          <h2 className="about-us text-center mt-5">
            {hotelList[0].room_heading}
          </h2>
        )}

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 1 },
          }}
          className="slider-container"
        >
          {roomSuites?.length > 0 &&
            roomSuites.map((room, index) => (
              <SwiperSlide key={index}>
                <div className="winter-box p-1 text-center">
                  {/* Show video if available, otherwise fallback to image */}
                  {room.video_link ? (
                    <div
                      className="banner_img_room myvideo pt-0 web-video desk-video" style={{height: "35vh !important" }}
                    >
                
                        <iframe
                          loading="lazy"
                          title="Room video"
                          src={`https://play.gumlet.io/embed/${room.video_link}?background=true&autoplay=true&loop=true&disableControls=true`}
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
                  
                  ) : room.image ? (
                    <Image
                      src={room.image}
                      alt={room.title}
                      width={1920}
                      height={1080}
                      className="w-100 over-room-vd primary-radius"
                      style={{ objectFit: "cover" }}
                    />
                  ) : null}

                  <div className="winter-box-content carddd shadow-sm">
                    <h3 className="winter-box-heading">{room.title}</h3>
                    <p className="winter-box-para card-texttt">
                      {room.short_description}
                    </p>
                    <div className="winter-box-btn">
                      <Link
                        href={`/${brand_slug}/${hotel_slug}/rooms`}
                        className="box-btn know-more"
                      >
                        Explore More
                      </Link>
                      {/* <Link
                        href={room.booking_link}
                        className="box-btn book-noww"
                      >
                        Book Now
                      </Link> */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Roomshitesaliva;
