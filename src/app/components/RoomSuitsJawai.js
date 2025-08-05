import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import JawaiNewEnquiryPopupBook from "./JawaiNewEnquiryPopupBook";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

const RoomsSuitsJawai = () => {
  return (
    <>
    <section className="your-break about-us sec-padding mb-5">
      <div className="container">
        <h2 className="about-us text-center mt-5">Rooms & Suites</h2>
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
          {[
            {
              title: "Villa with Private Jacuzzi",
              videoSrc: "/jawai-img/villa-with-private-jacuzzi-overview.mp4",
              description:
                "Enjoy a comfortable stay with luxurious touch in our Villa with Private Jacuzzi...",
            },
            {
              title: "Mud House",
              videoSrc: "/jawai-img/mud-house-overview.mp4",
              description:
                "Our Mud Houses in Jawai are a step into tradition that mirrors the life of...",
            },
            {
              title: "Villa with Private Patio",
              videoSrc: "/jawai-img/villa-with-private-patio-overview.mp4",
              description:
                "Enter into tranquillity with our Villa in Jawai, combining modern design and...  ",
            },
            
          ].map((room, index) => (
            <SwiperSlide key={index}>
              <div className="winter-box p-1 text-center">
                <video autoPlay loop muted playsInline className="w-100 over-room-vd primary-radius">
                  <source src={room.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="winter-box-content carddd shadow-sm">
                  <h3 className="winter-box-heading">{room.title}</h3>
                  <p className="winter-box-para card-texttt">{room.description}</p>
                  <div className="winter-box-btn">
                    <Link href="/jawai-palash-resort-rooms-suites" className="box-btn know-more">Explore More</Link>
                    <Link href="#" className="box-btn book-noww" data-bs-toggle="modal" data-bs-target="#enquiryModall">Enquire Now</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    <JawaiNewEnquiryPopupBook />
   </>
  );
};

export default RoomsSuitsJawai;
