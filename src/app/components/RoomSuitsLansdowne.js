import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import LansdowneNewEnquiryPopupBook from "./LansdowneNewEnquiryPopupBook";

const RoomSuitsLansdowne = () => {
  return (
    <>
    <section className="your-break about-us sec-padding lansdowne-room-sec-new">
      <div className="container">
        <h2 className="about-us text-center">Check Out Our Best Rooms & Suites</h2>

        <p className="text-center">Find your ultimate sanctuary in Alivaa Hotels by experiencing the sophisticated 27 rooms and Suites in Lansdowne. The hotel design prioritises comfort and each room includes individual balconies offering beautiful views along the Himalayas and adjacent valleys.</p>
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
              title: "Super Deluxe Room",
              videoSrc: "/lansdowne-img/super-deluxe-room.jpg",
              description:
                "The Super Deluxe Rooms offer an experience of complete relaxation. With the ...",
            },
            {
              title: "Deluxe Room",
              videoSrc: "/lansdowne-img/deluxe-room.jpg",
              description:
                "Experience the natural landscape from our comfortable Deluxe Rooms, which offer...",
            },
            {
              title: "Premium Room",
              videoSrc: "/lansdowne-img/premium-room.jpg",
              description:
                "Experience Himalayan immersion while escaping the city rush through our Premium Rooms...",
            },
            {
              title: "Rooftop Cottages",
              videoSrc: "/lansdowne-img/rooftop-cottage.jpg",
              description:
                "At the rooftop of our facility we provide expansive cottages which allow guests to...",
            },
           
          ].map((room, index) => (
            <SwiperSlide key={index}>
              <div className="winter-box p-1 text-center">
              <img src={room.videoSrc} alt={room.title} className="w-100 over-room-vd primary-radius" loading="lazy" />

                <div className="winter-box-content carddd shadow-sm">
                  <h3 className="winter-box-heading">{room.title}</h3>
                  <p className="winter-box-para card-texttt">{room.description}</p>
                  <div className="winter-box-btn">
                    <Link href="/lansdowne-accommodation" className="box-btn know-more">Explore More</Link>
                    <Link href="#" className="box-btn book-noww" data-bs-toggle="modal" data-bs-target="#LansEnquiryModal">Enquire Now</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    <LansdowneNewEnquiryPopupBook />
    </>
  );
};

export default RoomSuitsLansdowne;
