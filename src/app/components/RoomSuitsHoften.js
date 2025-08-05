import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

const Roomshiteshoften = () => {
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
              imgSrc: "/images/rooms/deluxe-room-hoften.jpg",
              description:
                "Our Deluxe Rooms are elegantly designed for single travellers and couples who seek peace and comfort. These rooms provide compact, comfortable living areas.",
            },
            {
              title: "Deluxe Twin Room",
              imgSrc: "/images/rooms/deluxe-twin-room-hoften.jpg",
              description:
                "Our Deluxe Twin Room is more than just a stay. We offer two twin-size beds, perfect for those who like separate beds with enough space for a comfortable stay.",
            },
            {
              title: "Suite Room",
              imgSrc: "/images/rooms/suit-room-hoften.jpg",
              description:
                "Experience the epitome of luxury in our Deluxe Rooms, where each room features plush king-sized or twin beds, a private balcony or sit-out area.",
            },
          ].map((room, index) => (
            <SwiperSlide key={index}>
              <div className="winter-box p-1 text-center">
                <img src={room.imgSrc} alt={room.title} className="w-100 primary-radius" />
                <div className="winter-box-content carddd shadow-sm">
                  <h3 className="winter-box-heading">{room.title}</h3>
                  <p className="winter-box-para card-texttt">{room.description}</p>
                  <div className="winter-box-btn">
                    <Link style={{color: "#245704",borderColor:"#245704"}} href="/gurugram-accommodation" className="box-btn know-more">
                      Explore More
                    </Link>
                    <Link style={{backgroundColor: "#245704"}} href="https://bookings.alivaahotels.com/inst/#/home?propertyId=402NT4HhhBGbbpoRahFpDYw3nQ5NDM=&JDRN=Y&RoomID=210380,210381,210383,210384,210385&ap=1&gsId=402NT4HhhBGbbpoRahFpDYw3nQ5NDM=" className="hoftenctacolor box-btn book-noww hofterthemecolor">
                      Book Now
                    </Link>
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

export default Roomshiteshoften;
