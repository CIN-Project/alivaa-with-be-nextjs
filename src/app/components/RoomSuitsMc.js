import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

const Roomshitesmc = () => {
  return (
    <section className="your-break about-us sec-padding mb-5">
      <div className="container">
        <h2 className="about-us text-center">Rooms & Suites</h2>
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
              title: "Deluxe Room",
              videoSrc: "/images/mcleodganj/rooms/deluxe.jpg",
              description:
                "The Deluxe Rooms at Alivaa Hotel maintain comfortable furnishings and a private setting that provides excellent views...",
            },
            {
              title: "Super Deluxe Room",
              videoSrc: "/images/mcleodganj/rooms/super_deluxe.jpg",
              description:
                "The Super Deluxe Room offers enhanced opulence and space, perfect panoramic views and superior amenities, which makes...",
            },
            {
              title: "Premium Room",
              videoSrc: "/images/mcleodganj/rooms/premium.jpg",
              description:
                "Spacious and lavish, the Premium Room is known for the unparalleled comfort and convenience designed to enjoy...",
            },
           
          ].map((room, index) => (
            <SwiperSlide key={index}>
              <div className="winter-box p-1 text-center">
              <img src={room.videoSrc} alt={room.title} className="w-100 over-room-vd primary-radius" loading="lazy" />

                <div className="winter-box-content carddd shadow-sm">
                  <h3 className="winter-box-heading">{room.title}</h3>
                  <p className="winter-box-para card-texttt">{room.description}</p>
                  <div className="winter-box-btn">
                    <Link href="/mcleodganj-accommodation" className="box-btn know-more">Explore More</Link>
                    <Link href="https://alivaahotels.securedreservations.com/reservation?bID=6d7880d9-c05f-4be6-811f-eeb846d0c59d&cID=f1c6c3f5-04d5-4180-9895-7f3e3f6b240c&destination=id=185914d6-4ebc-48b5-b982-6e81e5eb35b0&type=2&checkInDate=2025-05-20&checkOutDate=2025-05-20&guest=[ac1=2]&roomPropertyID=185914d6-4ebc-48b5-b982-6e81e5eb35b0" className="box-btn book-noww">Book Now</Link>
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

export default Roomshitesmc;
