import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import DalhousieNewEnquiryPopupBook from "./DalhousieNewEnquiryPopupBook";

const DalhousieRoomsSuites = () => {
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
              title: "Deluxe Room",
              videoSrc: "/dalhousie-img/room-deluxe.png",
              description:
                "Elegantly designed for solo travellers, our Deluxe Rooms offer...",
            },
            {
              title: "Super Deluxe Room",
              videoSrc: "/dalhousie-img/room-super-deluxe.png",
              description:
                "Our Super Deluxe rooms provide a more spacious living area with...",
            },
            {
              title: "Premium Room",
              videoSrc: "/dalhousie-img/room-premium.png",
              description:
                "Premium rooms at The Hoften Blue Magnets come with spacious ...",
            },
             {
              title: "Family Suite",
              videoSrc: "/dalhousie-img/room-family.png",
              description:
                "Our Family suites have ample space for a family with 2 interconnected ...",
            },
             {
              title: "Presidential Suite",
              videoSrc: "/dalhousie-img/room-honeymoon-suite.png",
              description:
                "The epitome of luxury. With a lavish bedroom, king-sized bed...",
            },
            
            
          ].map((room, index) => (
            <SwiperSlide key={index}>
              <div className="winter-box p-1 text-center">
                <Image src={room.videoSrc} alt={room.title} height={400} width={500} className="img-fluid w-100" />
                <div className="winter-box-content carddd shadow-sm">
                  <h3 className="winter-box-heading">{room.title}</h3>
                  <p className="winter-box-para card-texttt">{room.description}</p>
                  <div className="winter-box-btn">
                    <Link href="/rooms-in-dalhousie" className="box-btn know-more">Explore More</Link>
                    <Link href="#" className="box-btn book-noww" data-bs-toggle="modal" data-bs-target="#dalhousie-enquiry">Enquire Now</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    <DalhousieNewEnquiryPopupBook />
   </>
  );
};

export default DalhousieRoomsSuites;
